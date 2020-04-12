import { Market } from '../../domain/Market'
import React from 'react'

interface MarketProps {
  market: Market
}

const MarketWithOffers: React.FC<MarketProps> = ({ market }: MarketProps) => {
  return <div>
    <h4>{market.name} ({market.id})</h4>
    {market.activeOffers.length > 0 && <ul>
      {market.activeOffers.map((offer) =>
        <li key={offer.player}>
          <div>{offer.price} bells</div>
          <div>@{offer.player}</div>
        </li>
      )}
    </ul>}
    {market.activeOffers.length === 0 && <strong>no active offers!</strong>}
  </div>
}

export default MarketWithOffers
