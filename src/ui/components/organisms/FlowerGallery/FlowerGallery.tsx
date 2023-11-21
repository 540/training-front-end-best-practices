import { FC } from 'react'
import { FlowerCard } from '@/ui/components/molecules/FlowerCard/FlowerCard'
import styles from './FlowerGallery.module.scss'

interface Props {
  flowers: Flower[]
}

export const FlowerGallery: FC<Props> = ({ flowers }) => {
  return (
    <div className={styles.flowers}>
      {flowers.map(flower => (
        <FlowerCard key={flower.id} flower={flower} />
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
