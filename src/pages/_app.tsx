import '@/ui/styles/itcss.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CurrencyProvider } from '@/context/CurrencyContext/CurrencyContext'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
        <CurrencyProvider>
            <Component {...pageProps} />
        </CurrencyProvider>
    </QueryClientProvider>
  )
}
