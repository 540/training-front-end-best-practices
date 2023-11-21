import { useState } from 'react'
import styles from './FlowersList.module.scss'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Logo } from '@/ui/components/molecules/Logo'
import classNames from 'classnames'
import { Loader } from '@/ui/components/atoms/Loader'
import { Input } from '@/ui/components/atoms/Input'
import { FlowerGallery } from '@/ui/components/organisms/FlowerGallery'
import { FlowersNotFoundError } from '@/core/domain/model/FlowersNotFoundError'
import { Selector } from '@/ui/components/atoms/Selector'
import { useFlowers } from '@/ui/hooks/useFlowers'
import { useCurrency } from '@/ui/context/CurrencyContext/CurrencyContext'

const inter = Inter({ subsets: ['latin'] })

export const FlowersList = () => {
  const [search, setSearch] = useState<string>('')
  const { flowers, error } = useFlowers()
  const filteredFlowers = !search
    ? flowers
    : flowers?.filter(
        flower =>
          flower.name.toLowerCase().startsWith(search) ||
          flower.binomialName.toLowerCase().startsWith(search),
      )
  const { currencies, setCurrency, currency, roundPrice } = useCurrency()

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
          <Selector
            options={currencies.map(currency => ({
              name: currency.name,
              value: currency.name,
            }))}
            current={currency.name}
            onChange={setCurrency}
          />
        </header>
        <section className={styles.inputWrapper}>
          <Input placeholder="Busca aquí..." onChange={handleSearch} />
        </section>
        {flowers ? (
          <FlowerGallery
            flowers={filteredFlowers ?? []}
            currencySymbol={currency.symbol}
            formatPrice={roundPrice}
          />
        ) : error instanceof FlowersNotFoundError ? (
          <div>No se han encontrado flores</div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  )
}
