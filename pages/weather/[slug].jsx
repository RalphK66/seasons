import axios from 'axios'
import { useContext, useMemo } from 'react'
import { Box, Divider, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { UnitContext } from '../../context/UnitContext'
import Weather from '../../components/Weather'
import { formattedWeatherData } from '../../controllers/weather'
import { UNIT } from '../../constants'

const WeatherForecast = ({ weather, location }) => {
  const { unit } = useContext(UnitContext)

  const data = useMemo(
    () => formattedWeatherData({ metric: weather.metric, imperial: weather.imperial }),
    [weather]
  )

  return (
    <Box w={'full'} textAlign={'center'}>
      <Flex
        mx={'auto'}
        my={5}
        p={5}
        w={'fit-content'}
        flexDir={'column'}
        justify={'center'}
        bg={useColorModeValue('aliceblue', 'black')}
        shadow={'dark-lg'}
        borderRadius={5}
        transition={'background-color 0.3s ease-in-out'}>
        <Heading>{location.main_text}</Heading>
        <Text>{location.secondary_text}</Text>
        <Divider my={2} borderColor={useColorModeValue('gray.500', 'gray.100')} />
        <Text
          fontWeight={'light'}
          fontSize={'xs'}
          color={useColorModeValue('gray.500', 'gray.100')}>
          ( {location.lat}, {location.lng} )
        </Text>
      </Flex>
      {weather && <Weather data={data[unit]} />}
    </Box>
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
  console.log(metric.data.daily)
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
