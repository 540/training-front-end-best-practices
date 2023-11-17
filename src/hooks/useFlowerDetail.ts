import { useQuery } from 'react-query'

export const useFlowerDetail = (id: string | string[]) => {
  const { data, error } = useQuery<Flower>(['flower', id], async () => {
    const response = await fetch(
      'https://dulces-petalos.herokuapp.com/api/product/' + id,
    )
    const json = await response.json()
    if (!response.ok) {
      throw json?.code ?? 'UNKNOWN_ERROR'
    }

    return json
  })

  return { flowerDetail: data, error }
}

interface Flower {
  id: number
  name: string
  binomialName: string
  price: number
  imgUrl: string
  heightInCm: number
  fertilizerType: 'nitrogen' | 'phosphorus'
  wateringsPerWeek: number
}
