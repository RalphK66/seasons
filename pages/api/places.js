import axios from 'axios'
import { CACHE_MAX_AGE } from '../../constants'

const places = async (req, res) => {
  const { query } = req.query

  const { data } = await axios({
    method: 'GET',
    url: `${process.env.GOOGLE_MAPS_API_BASE_URL}/place/autocomplete/json`,
    params: { input: query, types: '(cities)', key: process.env.GOOGLE_MAPS_API_KEY },
  })

  res.setHeader('Cache-Control', `s-maxage=${CACHE_MAX_AGE}`, 'max-age=0', 'stale-while-revalidate')
  res.status(200).json(data)
}

export default places
