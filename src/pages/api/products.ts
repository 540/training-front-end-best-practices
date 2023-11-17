import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const forceError = false
  if (forceError) {
    res.status(422).json({ code: 'FLOWERS_NOT_FOUND' })
  } else {
    const response = await fetch(
      'https://dulces-petalos.herokuapp.com/api/product',
    )
    const data = await response.json()
    res.status(200).json(data)
  }
}
