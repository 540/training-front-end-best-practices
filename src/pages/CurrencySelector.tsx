import { FC } from 'react'
import { Currency } from '@/context/CurrencyContext/CurrencyContext'
import styles from '@/styles/Home.module.css'

interface Props {
  currencies: Currency[]
  current: string
  onChange: (currency: string) => void
}

export const CurrencySelector: FC<Props> = ({
  currencies,
  current,
  onChange,
}) => {
  return (
    <select
      className={styles.currencySelector}
      onChange={event => {
        onChange(event.target.value)
      }}
      defaultValue={current}
    >
      {currencies.map(currency => (
        <option key={currency.name} value={currency.name}>
          {currency.name}
        </option>
      ))}
    </select>
  )
}
