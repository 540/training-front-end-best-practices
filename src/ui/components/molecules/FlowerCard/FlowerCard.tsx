import Link from 'next/link'
import { Image } from '@/ui/components/atoms/Image'
import styles from './FlowerCard.module.scss'
import { Text } from '@/ui/components/atoms/Text'

export const FlowerCard = (props: { flower: Flower }) => (
  <Link href={`/detail/${props.flower.id}`}>
    <article className={styles.flowerContainer}>
      <Text
        as="div"
        fontStyle="s-normal"
        color="light"
        className={styles.heightInCm}
      >
        {props.flower.heightInCm} cm
      </Text>
      <div className={styles.imageWrapper}>
        <div className={styles.imageFantasy}>+</div>
        <Image
          src={props.flower.imgUrl}
          alt={props.flower.name}
          className={styles.image}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.infoContainer}>
        <Text as="p" fontStyle="m-normal" color="dark" className="mt-xs">
          {props.flower.name}
        </Text>
        <Text as="p" fontStyle="s-light" color="soft">
          {props.flower.binomialName}
        </Text>
        <Text as="p" fontStyle="m-light" color="primary-light">
          {props.flower.price}€
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
