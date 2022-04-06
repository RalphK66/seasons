import axios from 'axios'
import { useEffect, useState } from 'react'
import path from 'path'
import fs from 'fs/promises'
import DailyWeather from '../../components/Weather/DailyWeather'
import { Box } from '@chakra-ui/react'
import Today from '../../components/Weather/Today'

const readFile = async ({ dir, paths }) => {
  const filePath = path.join(dir, ...paths)
  const joinData = await fs.readFile(filePath)
  const data = JSON.parse(joinData)
  return data
}

const Weather = ({ data, location }) => {
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState({})
  console.log(location)
  const toggleLoading = () => setLoading((prev) => !prev)

  // useEffect(() => {
  //   const getData = async () => {
  //     toggleLoading()

  //     const { data } = await axios.post('/api/weather', { lat, lng })
  //     console.log(data)
  //     toggleLoading()
  //     setWeatherData(weatherData)
  //   }

  //   if (
  //     weatherData &&
  //     Object.keys(weatherData).length === 0 &&
  //     Object.getPrototypeOf(weatherData) === Object.prototype
  //   ) {
  //     getData()
  //   }
  // }, [])

  return (
    <Box>
      {location && <Today weather={data.current} location={location} />}
    </Box>
  )
}

export default Weather

export const getServerSideProps = async (context) => {
  // const { lat, lng, description:location } = context.query
  // const { data } = await axios({
  //   method: 'GET',
  //   url: process.env.OPENWEATHER_ONECALL_URL,
  //   params: {
  //     lat: lat,
  //     lon: lng,
  //     appid: process.env.OPENWEATHER_API_KEY,
  //   },
  // })
  const data = await readFile({ dir: process.cwd(), paths: ['data', 'weatherData.json'] })
  const location = { main_text: 'Aspen', secondary_text: 'CO, USA' }

  return {
    props: { data, location},
  }
}
