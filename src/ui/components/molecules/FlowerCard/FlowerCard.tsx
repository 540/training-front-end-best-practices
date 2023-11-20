import Link from 'next/link'
import { Image } from '@/ui/components/atoms/Image'
import styles from './FlowerCard.module.scss'
import { Text } from '@/ui/components/atoms/Text'
import { FC } from 'react'

interface Props {
  flower: Flower
  currencySymbol: string
  formatPrice: (price: number) => number
}

export const FlowerCard: FC<Props> = ({
  flower,
  currencySymbol,
  formatPrice,
}) => (
  <Link href={`/detail/${flower.id}`}>
    <article className={styles.flowerContainer}>
      <Text
        as="div"
        fontStyle="s-normal"
        color="light"
        className={styles.heightInCm}
      >
        {flower.heightInCm} cm
      </Text>
      <div className={styles.imageWrapper}>
        <div className={styles.imageFantasy}>+</div>
        <Image
          src={flower.imgUrl}
          alt={flower.name}
          className={styles.image}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.infoContainer}>
        <Text as="p" fontStyle="m-normal" color="dark" className="mt-xs">
          {flower.name}
        </Text>
        <Text as="p" fontStyle="s-light" color="soft">
          {flower.binomialName}
        </Text>
        <Text as="p" fontStyle="m-light" color="primary-light">
          {formatPrice(flower.price)}
          {currencySymbol}
        </Text>
      </div>
    </article>
  </Link>
)

interface Flower {
  id: number
  name: string
  binomialName: string
  price: number
  imgUrl: string
  heightInCm: number
}
