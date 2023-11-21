import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'

export interface Currency {
  name: string
  symbol: string
  rate: number
}

interface CurrencyValue {
  currency: Currency
  currencies: Currency[]
  setCurrency: (currencyName: string) => void
  roundPrice: (price: number) => number
}

const CurrencyContext = createContext<CurrencyValue>({
  currency: {
    name: '',
    symbol: '',
    rate: 0,
  },
  currencies: [],
  setCurrency: () => {},
  roundPrice: () => 0,
})

const currencies = [
  {
    name: 'EUR',
    symbol: '€',
    rate: 1,
  },
  {
    name: 'USD',
    symbol: '$',
    rate: 1.2,
  },
  {
    name: 'GBP',
    symbol: '£',
    rate: 0.9,
  },
]

interface Props {
  children: ReactNode
}

export const CurrencyProvider: FC<Props> = ({ children }) => {
  const [currency, setCurrency] = useState(currencies[0])

  const providerValue = useMemo(
    () => ({
      currency,
      currencies,
      setCurrency: (currencyName: string) => {
        const currency = currencies.find(
          currency => currency.name === currencyName,
        )
        if (currency) {
          setCurrency(currency)
        }
      },
      roundPrice: (price: number) => {
        return Math.round((price * currency.rate + Number.EPSILON) * 100) / 100
      },
    }),
    [currency, setCurrency],
  )

  return (
    <CurrencyContext.Provider value={providerValue}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => {
  return useContext(CurrencyContext)
}
