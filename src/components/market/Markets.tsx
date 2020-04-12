import React, { useCallback, useEffect, useState } from 'react'
import MarketsSelection from './MarketsSelection'
import { Market } from '../../domain/Market'
import * as MarketRepository from '../../repositories/MarketRepository'
import MarketWithOffers from './MarketWithOffers'
import AddOffer from './AddOffer'
import blockStyles from '../Block.module.css'

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
    <AddOffer pseudo={pseudo} marketIds={marketIds} refreshMarkets={refreshMarkets}/>
    {markets.length > 0 && <div className={blockStyles.wrapper}>
      <h3>Current Offers</h3>
      {markets.map((market) => <div key={market.id} className={blockStyles.element}><MarketWithOffers market={market}/></div>)}
    </div>}
    <MarketsSelection addMarketId={addMarketId}/>
  </div>
}

export default Markets
