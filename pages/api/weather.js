import axios from 'axios'
import { CACHE_MAX_AGE } from '../../constants/cache'

const weather = async (req, res) => {
  const { lat, lng } = req.body

  const result = await axios({
    method: 'GET',
    url: process.env.OPENWEATHER_ONECALL_URL,
    params: {
      lat: lat,
      lon: lng,
      appid: process.env.OPENWEATHER_API_KEY,
    },
  })

  res.setHeader('Cache-Control', `s-maxage=${CACHE_MAX_AGE}`, 'max-age=0', 'stale-while-revalidate')
  res.status(200).json(result.data)
}

export default weather
