import { FC } from 'react'
import { FlowerCard } from '@/ui/components/molecules/FlowerCard/FlowerCard'
import styles from './FlowerGallery.module.scss'

interface Props {
  flowers: Flower[]
  currencySymbol: string
  formatPrice: (price: number) => number
}

export const FlowerGallery: FC<Props> = ({
  flowers,
  currencySymbol,
  formatPrice,
}) => {
  return (
    <div className={styles.flowers}>
      {flowers.map(flower => (
        <FlowerCard
          key={flower.id}
          flower={flower}
          currencySymbol={currencySymbol}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  )
}

interface Flower {
  id: number
  name: string
  binomialName: string
  price: number
  imgUrl: string
  heightInCm: number
}
