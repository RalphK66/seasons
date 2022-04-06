import axios from 'axios'
import { CACHE_MAX_AGE } from '../../constants/cache'

const places = async (req, res) => {
  const { query } = req.body

  const results = await axios.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&key=${process.env.GOOGLE_MAPS_API_KEY}`
  )
  res.setHeader('Cache-Control', `s-maxage=${CACHE_MAX_AGE}`, 'max-age=0', 'stale-while-revalidate')
  res.status(200).json(results.data)
}

export default places
