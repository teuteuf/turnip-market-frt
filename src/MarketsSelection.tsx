import React, { useState } from 'react'
import * as MarketRepository from './MarketRepository'

interface MarketsSelectionProps {
  addMarketId: (marketId: string) => void
}

const MarketsSelection: React.FC<MarketsSelectionProps> = ({ addMarketId }: MarketsSelectionProps) => {
  const [newMarketName, setNewMarketName] = useState()
  const [existingMarketId, setExistingMarketId] = useState()

  const createMarket: () => Promise<void> = async () => {
    const market = await MarketRepository.createMarket(newMarketName)
    addMarketId(market.id)
  }
  const joinMarket: () => void = () => addMarketId(existingMarketId)

  return <div>
    <div>
      <input
        type='text'
        placeholder='New market name'
        onChange={(event) => setNewMarketName(event.target.value)}
      />
      <button onClick={createMarket}>Create new market</button>
    </div>
    <div>
      <input
        type='text'
        placeholder='Existing market ID'
        onChange={(event => setExistingMarketId(event.target.value))}
      />
      <button onClick={joinMarket}>Join existing market</button>
    </div>
  </div>
}

export default MarketsSelection
