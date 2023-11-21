import NextImage, { ImageProps } from 'next/image'
import { FC } from 'react'

type Props = ImageProps

export const Image: FC<Props> = props => {
  return <NextImage {...props} />
}
