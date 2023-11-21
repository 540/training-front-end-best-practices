import { useParams } from 'next/navigation'
import Head from 'next/head'
import styles from './FlowerDetail.module.scss'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Image } from '@/ui/components/atoms/Image'
import { Loader } from '@/ui/components/atoms/Loader'
import { Text } from '@/ui/components/atoms/Text'
import { useFlowerDetail } from '@/hooks/useFlowerDetail'
import { Flower } from '@/core/domain/model/Flower'
import classNames from 'classnames'
import { Logo } from '@/ui/components/molecules/Logo'

const inter = Inter({ subsets: ['latin'] })

export const FlowerDetail = () => {
  const params = useParams()
  const { flowerDetail, error } = useFlowerDetail(params?.id as string)
  const fertilizer: Record<Flower['fertilizerType'], string> = {
    nitrogen: 'Nitrogenado',
    phosphorus: 'Fosforado',
  }

  if (flowerDetail) {
    return (
      <>
        <Head>
          <title>{flowerDetail.name}</title>
          <meta name="description" content={flowerDetail.name} />
          <link rel="icon" type="image/png" href="/logo.png" sizes="200x200" />
        </Head>
        <div className={classNames(inter.className, styles.container)}>
          <header className={styles.mainHeader}>
            <Logo path="/logo.png" />
          </header>

          <section className={styles.detailsContainer}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src={flowerDetail.imgUrl}
                alt={flowerDetail.name}
                width={500}
                height={500}
              />
            </div>

            <div className={styles.infoContainer}>
              <Text as="h2" fontStyle="l-normal" centered={true}>
                {flowerDetail.name}
              </Text>

              <Text
                as="p"
                fontStyle="m-normal"
                color="soft"
                className="mt-xs"
                centered={true}
              >
                {flowerDetail.binomialName}
              </Text>
              <Text
                as="p"
                fontStyle="l-normal"
                color="primary-light"
                className="mt-m"
                centered={true}
              >
                {flowerDetail.price}€
              </Text>

              <Text as="p" fontStyle="m-light" color="dark" className="mt-m">
                Altura: {flowerDetail.heightInCm}cm
              </Text>
              <Text as="p" fontStyle="m-light" color="dark" className="mt-m">
                Fertilizante:{' '}
                {fertilizer[flowerDetail.fertilizerType] ?? 'No especificado'}
              </Text>
              <Text
                as="p"
                fontStyle="m-light"
                color="dark"
                className="mt-m mb-xl"
              >
                Regar: {flowerDetail.wateringsPerWeek} veces por semana
              </Text>
              <Link href="/">Volver atrás</Link>
            </div>
          </section>
        </div>
      </>
    )
  } else if (error) {
    return <div>Ha ocurrido un error</div>
  } else {
    return <Loader />
  }
}
