import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from 'src/ui/views/FlowerDetail/FlowerDetail.module.scss'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Image } from '@/ui/components/atoms/Image'
import { Logo } from '@/ui/components/molecules/Logo/Logo'
import classNames from 'classnames'
import { Loader } from '@/ui/components/atoms/Loader'
import { Text } from '@/ui/components/atoms/Text'

const inter = Inter({ subsets: ['latin'] })

export const FlowerDetail = () => {
  const params = useParams()
  const [flower, setFlower] = useState<Flower>()
  const [fertilizer, setFertilizer] = useState('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!params?.id) {
      return
    }

    setLoading(true)
    const URL = 'https://dulces-petalos.herokuapp.com/api/product/' + params.id
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        setFlower(response)
        if (response.fertilizerType === 'phosphorus') {
          setFertilizer('Fosforado')
        } else if (response.fertilizerType === 'nitrogen') {
          setFertilizer('Nitrogenado')
        } else {
          setFertilizer('tipo de fertilizante no definido')
        }
      })
      .catch(error => {
        alert('Ha ocurrido un error.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [params])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Head>
        <title>{flower!.name}</title>
        <meta name="description" content={flower!.name} />
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
              src={flower!.imgUrl}
              alt={flower!.name}
              width={500}
              height={500}
            />
          </div>

          <div className={styles.infoContainer}>
            <Text as="h2" fontStyle="l-normal" centered={true}>
              {flower!.name}
            </Text>

            <Text
              as="p"
              fontStyle="m-normal"
              color="soft"
              className="mt-xs"
              centered={true}
            >
              {flower!.binomialName}
            </Text>
            <Text
              as="p"
              fontStyle="l-normal"
              color="primary-light"
              className="mt-m"
              centered={true}
            >
              {flower!.price}€
            </Text>

            <Text as="p" fontStyle="m-light" color="dark" className="mt-m">
              Altura: {flower!.heightInCm}cm
            </Text>
            <Text as="p" fontStyle="m-light" color="dark" className="mt-m">
              Fertilizante: {fertilizer}
            </Text>
            <Text
              as="p"
              fontStyle="m-light"
              color="dark"
              className="mt-m mb-xl"
            >
              Regar: {flower!.wateringsPerWeek} veces por semana
            </Text>
            <Link href="/">Volver atrás</Link>
          </div>
        </section>
      </div>
    </>
  )
}

interface Flower {
  id: number
  name: string
  binomialName: string
  price: number
  imgUrl: string
  wateringsPerWeek: number
  fertilizerType: 'nitrogen' | 'phosphorus'
  heightInCm: number
}
