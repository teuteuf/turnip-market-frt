import { Market } from './domain/Market'

type CreateMarket = (marketName: string) => Promise<Market>

export const createMarket: CreateMarket = async (marketName) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/markets/`, {
    method: 'POST',
    body: JSON.stringify({ name: marketName }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const { id, name, offers } = await response.json()

  return {
    id,
    name,
    offers
  }
}
