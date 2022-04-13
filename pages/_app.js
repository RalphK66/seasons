import Head from 'next/head'
import Router from 'next/router'
import Nprogress from 'nprogress'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import UnitProvider from '../context/UnitContext'
import { Chakra } from '../src/Chakra'
import '../styles/global.css'

function App({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => Nprogress.start())
    Router.events.on('routeChangeComplete', () => Nprogress.done())
    Router.events.on('routeChangeError', () => Nprogress.done())
  }, [])

  return (
    <>
      <Head>
        <title>Seasons</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Chakra cookies={pageProps.cookies}>
        <UnitProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UnitProvider>
      </Chakra>
    </>
  )
}

export default App

export { getServerSideProps } from '../src/Chakra'
