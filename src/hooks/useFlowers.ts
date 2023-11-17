import { useQuery } from 'react-query'

export const useFlowers = () => {
  const { data, error } = useQuery<Flower[]>('flowers', async () => {
    const response = await fetch('/api/products')
    const json = await response.json()
    if (!response.ok) {
      throw json?.code ?? 'UNKNOWN_ERROR'
    }

    return json
  })

  return { flowers: data, error }
}

interface Flower {
  id: number
  name: string
  binomialName: string
  price: number
  imgUrl: string
  heightInCm: number
}
