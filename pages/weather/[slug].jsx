import { Box, Divider, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import { useContext, useMemo } from 'react'
import Weather from '../../components/Weather'
import { UNIT } from '../../constants/weather'
import { UnitContext } from '../../context/UnitContext'
import { processedWeatherData } from '../../controllers/weather'

const WeatherForecast = ({ weather, location }) => {
  const { unit } = useContext(UnitContext)

  const data = useMemo(
    () => processedWeatherData({ metric: weather.metric, imperial: weather.imperial }),
    [weather]
  )

  return (
    <>
      <Head>
        <title>Seasons | {location.main_text}</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <Box w={'full'} textAlign={'center'}>
        <Flex
          mx={'auto'}
          my={5}
          p={5}
          w={'fit-content'}
          minW={'300px'}
          flexDir={'column'}
          justify={'center'}
          bg={useColorModeValue('aliceblue', 'black')}
          shadow={'dark-lg'}
          borderRadius={5}
          transition={'background-color 0.3s ease-in-out'}>
          <Heading>{location.main_text}</Heading>
          <Divider my={2} borderColor={useColorModeValue('gray.500', 'gray.100')} />
          <Text>{location.secondary_text}</Text>
        </Flex>
        <Weather data={data[unit]} />
      </Box>
    </>
  )
}

export default WeatherForecast

export const getServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=3600')

  const { lat, lng, main_text, secondary_text } = context.query

  const location = { lat, lng, main_text, secondary_text }

  const requests = Object.values(UNIT).map((unit) =>
    axios({
      method: 'GET',
      url: process.env.OPENWEATHER_ONECALL_URL,
      params: {
        lat: lat,
        lon: lng,
        appid: process.env.OPENWEATHER_API_KEY,
        units: unit,
        exclude: 'minutely,alerts',
      },
    })
  )
  const [metric, imperial] = await Promise.all(requests)

  const weather = { metric: metric.data, imperial: imperial.data }

  return { props: { weather, location } }
}

// import readFile from '../../utils/readFile'
// export const getServerSideProps = async (context) => {
//   const { lat, lng, main_text, secondary_text } = context.query
//   const location = { lat, lng, main_text, secondary_text }
//   const weather = await readFile({ dir: process.cwd(), paths: ['testData', 'vancouver.json'] })

//   return {
//     props: { weather, location },
//   }
// }
