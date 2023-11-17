import styles from '@/styles/Detail.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useFlowerDetail } from '@/hooks/useFlowerDetail'

const inter = Inter({ subsets: ['latin'] })

export default function Detail() {
  const params = useParams()
  const { flowerDetail, error } = useFlowerDetail(params?.id)
  const fertilizer: Record<Flower['fertilizerType'], string> = {
    nitrogen: 'Nitrógeno',
    phosphorus: 'Fósforo',
  }

  if (flowerDetail) {
    return (
      <>
        <Head>
          <title>{flowerDetail.name}</title>
          <meta name="description" content={flowerDetail.name} />
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
                src={flowerDetail.imgUrl}
                alt={flowerDetail.name}
                width={300}
                height={300}
              />
            </div>

            <div className={styles.infoContainer}>
              <h2 className={styles.name}>{flowerDetail.name}</h2>

              <p className={styles.binomialName}>{flowerDetail.binomialName}</p>

              <p className={styles.price}>{flowerDetail.price}€</p>

              <p className={styles.heightInCm}>
                <b>Altura:</b> {flowerDetail.heightInCm}cm
              </p>
              <p className={styles.fertilizerType}>
                <b>Fertilizante:</b>{' '}
                {fertilizer[flowerDetail.fertilizerType] ?? 'No especificado'}
              </p>
              <p className={styles.wateringsPerWeek}>
                <b>Regar:</b> {flowerDetail.wateringsPerWeek} veces por semana
              </p>

              <br />

              <Link href="/">Volver atrás</Link>
            </div>
          </section>
        </div>
      </>
    )
  } else if (error) {
    return <div>Ha ocurrido un error</div>
  } else {
    return <div>Cargando...</div>
  }
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
