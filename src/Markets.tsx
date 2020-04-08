import React, { useEffect, useState } from 'react'
import MarketsSelection from './MarketsSelection'

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

  const addMarketId = (newMarketId: string) => setMarketIds([...marketIds, newMarketId])

  useEffect(() => {
    setMarketIdsToLocalStorage(marketIds)
  }, [marketIds])

  return <div>
    <MarketsSelection addMarketId={addMarketId}/>
    {marketIds.join(', ')}
  </div>
}

export default Markets
