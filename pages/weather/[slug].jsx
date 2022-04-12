import { Box, Button, Flex } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import Day from '../../components/Weather/Day'
import Hourly from '../../components/Weather/Hourly'
import Week from '../../components/Weather/Week/Week'
import { UNIT } from '../../constants'
import { formattedWeatherData } from '../../controllers/weather'
import readFile from '../../utils/readFile'

const Weather = ({ weather, location }) => {
  const [unit, setUnits] = useState(UNIT.metric)

  const toggleUnits = () => setUnits((prev) => (prev === UNIT.metric ? UNIT.imperial : UNIT.metric))

  const { metric, imperial } = useMemo(
    () => formattedWeatherData({ metric: weather.metric, imperial: weather.imperial }),
    [weather]
  )

  return (
    <>
      <Box w={'full'}>
        <Button onClick={toggleUnits}>{unit}</Button>
        <Box>
          <Flex flexWrap={'wrap'} justify={'center'}>
            <Day data={unit === UNIT.metric ? metric.daily[0] : imperial.daily[0]} day={0} />
            <Day data={unit === UNIT.metric ? metric.daily[1] : imperial.daily[0]} day={1} />
          </Flex>
          <Flex justify={'center'} m={4}>
            <Week data={unit === UNIT.metric ? metric.daily : imperial.daily} />
          </Flex>
          <Flex justify={'center'} m={4}>
            <Hourly data={unit === UNIT.metric ? metric.hourly : imperial.hourly} />
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Weather

export const getServerSideProps = async (context) => {
  const { lat, lng, main_text, secondary_text } = context.query
  const location = { lat, lng, main_text, secondary_text }
  const weather = await readFile({ dir: process.cwd(), paths: ['data', 'vancouver.json'] })

  return {
    props: { weather, location },
  }
}

// export const getServerSideProps = async (context) => {
// context.res.setHeader(
//   'Cache-Control',
//   'public, s-maxage=3600, stale-while-revalidate=3600'
// )

//   const { lat, lng, main_text, secondary_text } = context.query

//   const location = { lat, lng, main_text, secondary_text }

//   const requests = Object.values(UNIT).map((unit) =>
//     axios({
//       method: 'GET',
//       url: process.env.OPENWEATHER_ONECALL_URL,
//       params: {
//         lat: lat,
//         lon: lng,
//         appid: process.env.OPENWEATHER_API_KEY,
//         units: unit,
//         exclude: 'minutely,alerts'
//       },
//     })
//   )
//   const [metric, imperial] = await Promise.all(requests)
//   const weather = { metric: metric.data, imperial: imperial.data }

//   return { props: { weather, location } }
// }
