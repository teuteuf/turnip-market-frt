import { Market } from '../../domain/Market'
import React from 'react'

interface MarketProps {
  market: Market
}

const MarketWithOffers: React.FC<MarketProps> = ({ market }: MarketProps) => {
  return <div>
    <h3>{market.name} ({market.id})</h3>
    {market.activeOffers.length > 0 && <ul>
      {market.activeOffers.map((offer) =>
        <li key={offer.player}>
          <span>- {offer.player} -</span>
          <span>- {offer.price} -</span>
          <span>- {offer.endTime} -</span>
        </li>
      )}
    </ul>}
    {market.activeOffers.length === 0 && <strong>no active offers!</strong>}
  </div>
}

export default MarketWithOffers
