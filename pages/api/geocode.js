import axios from 'axios'
import { CACHE_MAX_AGE } from '../../constants'

const geocode = async (req, res) => {
  const { place_id } = req.query

  const { data } = await axios({
    method: 'GET',
    url: `${process.env.GOOGLE_MAPS_API_BASE_URL}/geocode/json`,
    params: { place_id, key: process.env.GOOGLE_MAPS_API_KEY },
  })

  const { location } = data.results[0].geometry

  res.setHeader('Cache-Control', `s-maxage=${CACHE_MAX_AGE}`, 'max-age=0', 'stale-while-revalidate')
  res.status(200).json(location)
}

export default geocode
