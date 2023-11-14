import styles from '@/styles/Detail.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Detail() {
  const params = useParams()
  const [flower, setFlower] = useState<Flower>()
  const [fertilizer, setFertilizer] = useState('')

  useEffect(() => {
    if (!params?.id) {
      return
    }

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
  }, [params])

  if (!flower) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <Head>
        <title>{flower.name}</title>
        <meta name="description" content={flower.name} />
        <link rel="icon" type="image/png" href="/logo.png" sizes="200x200" />
      </Head>
      <div className={`${inter.className} ${styles.container}`}>
        <header className={styles.mainHeader}>
          <Link href="/">
            <div className={styles.logo}>
              <Image width={85} height={85} src="/logo.png" alt="Logo" />
              <h1 className={styles.logoName}>Dulces Pétalos</h1>
            </div>
          </Link>
        </header>

        <section className={styles.detailsContainer}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={flower.imgUrl}
              alt={flower.name}
              width={300}
              height={300}
            />
          </div>

          <div className={styles.infoContainer}>
            <h2 className={styles.name}>{flower.name}</h2>

            <p className={styles.binomialName}>{flower.binomialName}</p>

            <p className={styles.price}>{flower.price}€</p>

            <p className={styles.heightInCm}>
              <b>Altura:</b> {flower.heightInCm}cm
            </p>
            <p className={styles.fertilizerType}>
              <b>Fertilizante:</b> {fertilizer}
            </p>
            <p className={styles.wateringsPerWeek}>
              <b>Regar:</b> {flower.wateringsPerWeek} veces por semana
            </p>

            <br />

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
