import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (Math.random() <= 0.3) {
    res.status(422).json({ code: 'FLOWERS_NOT_FOUND' })
  } else {
    fetch('https://dulces-petalos.herokuapp.com/api/product')
      .then(response => response.json())
      .then(data => {
        res.status(200).json(data)
      })
  }
}
