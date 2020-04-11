import React, { useCallback, useEffect, useState } from 'react'
import MarketsSelection from './MarketsSelection'
import { Market } from '../../domain/Market'
import * as MarketRepository from '../../repositories/MarketRepository'
import MarketWithOffers from './MarketWithOffers'
import AddOffer from './AddOffer'

const keyLocalStorageMarketIds = 'marketIds'
const marketIdsSeparator = '::'

const getMarketIdsFromLocalStorage = (): string[] => {
  const marketsIdsAsString = localStorage.getItem(keyLocalStorageMarketIds)
  return (marketsIdsAsString && marketsIdsAsString.split('::')) || []
}

const setMarketIdsToLocalStorage = (marketIds: string[]): void => {
  localStorage.setItem(keyLocalStorageMarketIds, marketIds.join(marketIdsSeparator))
}

interface MarketsProps {
  pseudo: string
}

const Markets: React.FC<MarketsProps> = ({ pseudo }: MarketsProps) => {
  const [marketIds, setMarketIds] = useState<string[]>(getMarketIdsFromLocalStorage())
  const [markets, setMarkets] = useState<Market[]>([])

  const refreshMarkets = useCallback(async () => {
    const fetchedMarkets = await Promise.all(
      marketIds.map(async (marketId) => MarketRepository.findMarket(marketId))
    )
    setMarkets(fetchedMarkets.filter((market): market is Market => market !== null))
  }, [marketIds])

  useEffect(() => {
    (async (): Promise<void> => {
      await refreshMarkets()
    })()
  }, [marketIds, refreshMarkets])

  const addMarketId = (newMarketId: string): void => setMarketIds([...marketIds, newMarketId])

  useEffect(() => {
    setMarketIdsToLocalStorage(marketIds)
  }, [marketIds])

  return <div>
    <AddOffer pseudo={pseudo} marketIds={marketIds} refreshMarkets={refreshMarkets} />
    {markets.map((market) => <MarketWithOffers key={market.id} market={market}/>)}
    <MarketsSelection addMarketId={addMarketId}/>
  </div>
}

export default Markets
