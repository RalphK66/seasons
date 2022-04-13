import Head from 'next/head'
import { Chakra } from '../src/Chakra'
import Layout from '../components/Layout'
import '../styles/global.css'
import UnitProvider from '../context/UnitContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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

export default MyApp

export { getServerSideProps } from '../src/Chakra'
