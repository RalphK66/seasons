import axios from 'axios'
import { useEffect, useState } from 'react'
import { readFile } from "../../utils/readFile.mjs"

const Weather = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState({})
  console.log(data)
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

  return <div>Weather</div>
}

export default Weather

export const getServerSideProps = async (context) => {
  // const { lat, lng } = context.query
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
  return {
    props: { data },
  }
}
