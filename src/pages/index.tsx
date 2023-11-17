import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ChangeEventHandler, useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllFlowers } from "@/core/usecases/getAllFlowers";
import { Flower } from "@/core/domain/model/Flower";
import { filterFlowersBy } from "@/core/usecases/filterFlowersBy";

const inter = Inter({ subsets: [ 'latin' ] })

export default function Home() {
  const [ query, setQuery ] = useState<string>('')
  const [ flowers, setFlowers ] = useState<Flower[]>([])
  const [ filteredFlowers, setFilteredFlowers ] = useState<Flower[]>([])
  const [ loading, setLoading ] = useState<boolean>(true)
  const [ error, setError ] = useState<string>('')

  useEffect(() => {
    const fetchFlowers = async () => {
      setLoading(true)

      try {
        const result = await getAllFlowers()

        setFlowers(result);
        setFilteredFlowers(result)
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === 'FLOWERS_NOT_FOUND') {
            setError(error.message);
          } else {
            alert('Ha ocurrido un error');
          }
        }
      } finally {
        setLoading(false)
      }
    }

    fetchFlowers()
  }, [])

  useEffect(() => {
    setFilteredFlowers(filterFlowersBy(query, flowers))
    setLoading(false)
  }, [ setFilteredFlowers, flowers, query ])

  let content

  if (error === 'FLOWERS_NOT_FOUND') {
    content = <div>No se han encontrado flores</div>
  } else if (!loading) {
    content = filteredFlowers.map(flower => (
      <Link href={ `/detail/${ flower.id }` } key={ flower.id }>
        <article className={ styles.flowerContainer }>
          <div className={ styles.heightInCm }>{ flower.heightInCm } cm</div>
          <div className={ styles.imageWrapper }>
            <div className={ styles.imageFantasy }>+</div>
            <Image
              src={ flower.imgUrl }
              alt={ flower.name }
              className={ styles.image }
              width={ 300 }
              height={ 300 }
            />
          </div>
          <div className={ styles.infoContainer }>
            <p className={ styles.name }>{ flower.name }</p>
            <p className={ styles.binomialName }>{ flower.binomialName }</p>
            <p className={ styles.price }>{ flower.price }€</p>
          </div>
        </article>
      </Link>
    ))
  } else {
    content = <div>Cargando...</div>
  }

  const handleSearch: ChangeEventHandler<HTMLInputElement> = event => {
    setQuery(event.target.value.toLowerCase())
  }

  return (
    <>
      <Head>
        <title>Floristería Dulces Pétalos</title>
        <meta
          name="description"
          content="Web de la floristería dulces pétalos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/png" href="/logo.png" sizes="200x200"/>
      </Head>
      <div className={ `${ inter.className } ${ styles.container }` }>
        <header className={ styles.mainHeader }>
          <Link href="/">
            <div className={ styles.logo }>
              <Image width={ 85 } height={ 85 } src="/logo.png" alt="Logo"/>
              <h1 className={ styles.logoName }>Dulces Pétalos</h1>
            </div>
          </Link>
        </header>
        <section className={ styles.inputWrapper }>
          <input
            placeholder="Busca aquí..."
            className={ styles.input }
            onChange={ handleSearch }
          />
        </section>
        <div className={ styles.flowers }>{ content }</div>
      </div>
    </>
  )
}
