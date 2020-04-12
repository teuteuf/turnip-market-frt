import React, { useState } from 'react'
import * as MarketRepository from '../../repositories/MarketRepository'
import blockStyles from '../Block.module.css'

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
    <div className={blockStyles.wrapper}>
      <input
        type='text'
        placeholder='New market name'
        onChange={(event) => setNewMarketName(event.target.value)}
        className={blockStyles.element}
      />
      <button
        onClick={createMarket}
        className={`${blockStyles.element} ${blockStyles.button}`}
      >
        Create new market
      </button>
    </div>
    <div className={blockStyles.wrapper}>
      <input
        type='text'
        placeholder='Existing market ID'
        onChange={(event => setExistingMarketId(event.target.value))}
        className={blockStyles.element}
      />
      <button
        onClick={joinMarket}
        className={`${blockStyles.element} ${blockStyles.button}`}
      >
        Join existing market
      </button>
    </div>
  </div>
}

export default MarketsSelection
