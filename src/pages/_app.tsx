import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from 'contexts/CartContext'

import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Wemovie Ecommerce</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <meta name="description" content="The best stores the games" />
      </Head>
      <GlobalStyles />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
