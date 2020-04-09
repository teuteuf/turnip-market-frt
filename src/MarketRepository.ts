import { Market } from './domain/Market'

type CreateMarket = (marketName: string) => Promise<Market>
type FindMarket = (marketId: string) => Promise<Market>

export const createMarket: CreateMarket = async (marketName) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/markets/`, {
    method: 'POST',
    body: JSON.stringify({ name: marketName }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const { id, name, activeOffers } = await response.json()

  return {
    id,
    name,
    activeOffers
  }
}

export const findMarket: FindMarket = async (marketId) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/markets/${marketId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const { id, name, activeOffers } = await response.json()

  return {
    id,
    name,
    activeOffers
  }
}
