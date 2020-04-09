import React, { useEffect, useState } from 'react'
import MarketsSelection from './MarketsSelection'
import { Market } from './domain/Market'
import * as MarketRepository from './MarketRepository'

const keyLocalStorageMarketIds = 'marketIds'
const marketIdsSeparator = '::'

const getMarketIdsFromLocalStorage = () => {
  const marketsIdsAsString = localStorage.getItem(keyLocalStorageMarketIds)
  return (marketsIdsAsString && marketsIdsAsString.split('::')) || []
}

const setMarketIdsToLocalStorage = (marketIds: string[]) => {
  localStorage.setItem(keyLocalStorageMarketIds, marketIds.join(marketIdsSeparator))
}

interface MarketsProps {
  pseudo: string
}

const Markets: React.FC<MarketsProps> = ({ pseudo }: MarketsProps) => {
  const [marketIds, setMarketIds] = useState<string[]>(getMarketIdsFromLocalStorage())
  const [markets, setMarkets] = useState<Market[]>([])

  useEffect(() => {
    (async (): Promise<void> => {
      const fetchedMarkets = await Promise.all(
        marketIds.map(async (marketId) => MarketRepository.findMarket(marketId))
      )
      setMarkets(fetchedMarkets)
    })()
  }, [marketIds])

  const addMarketId = (newMarketId: string) => setMarketIds([...marketIds, newMarketId])

  useEffect(() => {
    setMarketIdsToLocalStorage(marketIds)
  }, [marketIds])

  return <div>
    <MarketsSelection addMarketId={addMarketId}/>
    {markets.map(market => market.name).join(', ')}
  </div>
}

export default Markets
