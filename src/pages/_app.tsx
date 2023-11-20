import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CurrencyProvider } from '@/context/CurrencyContext/CurrencyContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrencyProvider>
      <Component {...pageProps} />
    </CurrencyProvider>
  )
}
