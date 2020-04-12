import React, { useState } from 'react'
import { Offer } from '../../domain/Offer'
import * as MarketRepository from '../../repositories/MarketRepository'
import blockStyles from '../Block.module.css'

interface AddOfferProps {
  pseudo: string
  marketIds: string[]
  refreshMarkets: () => void
}

const AddOffer: React.FC<AddOfferProps> = ({ pseudo, marketIds, refreshMarkets }: AddOfferProps) => {
  const [offerValue, setOfferValue] = useState<number>(0)
  const sendOffer: () => void = async () => {
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

  return <div className={blockStyles.wrapper}>
    <input
      type='number'
      placeholder='$$$$'
      onChange={(event): void => setOfferValue(parseInt(event.target.value))}
      className={blockStyles.element}
    />
    <button
      onClick={sendOffer}
      className={`${blockStyles.element} ${blockStyles.button}`}
    >
      Send Offer
    </button>
  </div>
}

export default AddOffer
