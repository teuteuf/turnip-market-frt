import React, { useState } from 'react'
import { Offer } from './domain/Offer'
import * as MarketRepository from './MarketRepository'

interface AddOfferProps {
  pseudo: string,
  marketIds: string[],
  refreshMarkets: () => void
}

const AddOffer: React.FC<AddOfferProps> = ({ pseudo, marketIds, refreshMarkets }: AddOfferProps) => {
  const [offerValue, setOfferValue] = useState<number>(0)
  const sendOffer = async () => {
    const now = new Date()
    const beforeNoon = now.getHours() < 12
    const startTime = new Date()
    const endTime = new Date()

    if (beforeNoon) {
      startTime.setHours(8, 0, 0, 0)
      endTime.setHours(12, 0, 0, 0)
    } else {
      startTime.setHours(12, 0, 0, 0)
      endTime.setHours(22, 0, 0, 0)
    }

    const offer: Offer = {
      player: pseudo,
      price: offerValue,
      startTime,
      endTime
    }

    await Promise.all(marketIds.map(async (marketId) => {
      await MarketRepository.postOffer(marketId, offer)
    }))
    refreshMarkets()
  }

  return <div>
    <input
      type='number'
      placeholder='$$$$'
      onChange={(event) => setOfferValue(parseInt(event.target.value))}
    />
    <button onClick={sendOffer}>Send Offer</button>
  </div>
}

export default AddOffer
