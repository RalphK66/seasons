import axios from 'axios'

const weather = async (req, res) => {
  const { lat, lng } = req.body

  try {
    const result = await axios({
      method: 'GET',
      url: process.env.OPENWEATHER_ONECALL_URL,
      params: {
        lat: lat,
        lon: lng,
        appid: process.env.OPENWEATHER_API_KEY,
      },
    })
    res.status(200).json(result.data)
  } catch (error) {
    const { data } = error.response
    res.status(data.cod).json(data)
  }
}

export default weather
