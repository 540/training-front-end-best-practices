import { useEffect, useState } from 'react'
import styles from './FlowersList.module.scss'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Logo } from '@/ui/components/molecules/Logo'
import classNames from 'classnames'
import { Loader } from '@/ui/components/atoms/Loader'
import { Input } from '../../components/atoms/Input'
import { FlowerGallery } from '@/ui/components/organisms/FlowerGallery'

const inter = Inter({ subsets: ['latin'] })

export const FlowersList = () => {
  const [search, setSearch] = useState<string>('')
  const [flowers, setFlowers] = useState<Flower[]>([])
  const [filteredFlowers, setFilteredFlowers] = useState<Flower[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setLoading(true)
    const URL = '/api/products'
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        if (!response.ok) {
          setError(response.code)
        }

        setFlowers(response)
        setFilteredFlowers(response)
      })
      .catch(error => {
        alert('Ha ocurrido un error')
      })
  }, [])

  useEffect(() => {
    if (search === '') {
      setFilteredFlowers(flowers)
    } else {
      setFilteredFlowers(
        flowers.filter(
          flower =>
            flower.name.toLowerCase().startsWith(search) ||
            flower.binomialName.toLowerCase().startsWith(search),
        ),
      )
    }

    setLoading(false)
  }, [setFilteredFlowers, flowers, search])

  const handleSearch = (searchText: string) => {
    setSearch(searchText.toLowerCase())
  }

  return (
    <>
      <Head>
        <title>Floristería Dulces Pétalos</title>
        <meta
          name="description"
          content="Web de la floristería dulces pétalos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" sizes="200x200" />
      </Head>
      <div className={classNames(inter.className, styles.container)}>
        <header className={styles.mainHeader}>
          <Logo path="/logo.png" />
        </header>
        <section className={styles.inputWrapper}>
          <Input placeholder="Busca aquí..." onChange={handleSearch} />
        </section>
        {error === 'FLOWERS_NOT_FOUND' ? (
          <div>No se han encontrado flores</div>
        ) : loading ? (
          <Loader />
        ) : (
          <FlowerGallery flowers={filteredFlowers} />
        )}
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
  heightInCm: number
}
