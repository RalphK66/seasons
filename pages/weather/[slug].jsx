import axios from 'axios'
import { Box, Button, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { UNIT } from '../../constants'
import Day from '../../components/Weather/Day'
import readFile from '../../utils/readFile'
import Loader from '../../components/Loader/Loader'

const Weather = ({ weather, location }) => {
  const [unit, setUnits] = useState(UNIT.metric)

  const toggleUnits = () => setUnits((prev) => (prev === UNIT.metric ? UNIT.imperial : UNIT.metric))

  return (
    <>
      <Box w={'full'}>
        <Button onClick={toggleUnits}>{unit}</Button>
        <Flex flexWrap={'wrap'} justifyContent={'center'}>
          <Day weather={weather[unit]} unit={unit} location={location} day={0} />
          <Day weather={weather[unit]} unit={unit} location={location} day={1} />
        </Flex>
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
//       },
//     })
//   )
//   const [metric, imperial] = await Promise.all(requests)
//   const weather = { metric: metric.data, imperial: imperial.data }

//   return { props: { weather, location } }
// }
