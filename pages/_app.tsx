import { AppProps } from 'next/app'
import '@shared/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
