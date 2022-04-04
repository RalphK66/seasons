import axios from 'axios'

const geocode = async (req, res) => {
  const { place_id } = req.body
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=AIzaSyA4oWhR283IIhxIPn0_k7W8_JlmupbY0a4`
  )

  const { location } = data.results[0].geometry

  res.status(200).json(location)
}

export default geocode