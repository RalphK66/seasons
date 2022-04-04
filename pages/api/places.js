import axios from 'axios'

const places = async (req, res) => {
  const { query } = req.body

  const results = await axios.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&key=${process.env.GOOGLE_MAPS_API_KEY}`
  )

  res.status(200).json(results.data)
}

export default places
