import styles from './Logo.module.scss'
import { Image } from '@/ui/components/atoms/Image'
import { Link } from '@/ui/components/atoms/Link'
import { Text } from '@/ui/components/atoms/Text'

export const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <Image width={85} height={85} src="/logo.png" alt="Logo" />
        <Text as="h1" fontStyle="l-normal" color="primary">
          Dulces Pétalos
        </Text>
      </div>
    </Link>
  )
}
