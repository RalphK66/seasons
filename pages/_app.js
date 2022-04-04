import Head from 'next/head'
import { Chakra } from '../src/Chakra'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Chakra cookies={pageProps.cookies}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Chakra>
    </>
  )
}

export default MyApp

export { getServerSideProps } from '../src/Chakra'
