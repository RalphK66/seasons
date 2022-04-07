import axios from 'axios'
import { UNITS } from '../../constants'

const weather = async (req, res) => {
  const { lat, lng } = req.query
  console.log(req.query)

  // const requests = UNITS.map((unit) =>
  //   axios({
  //     method: 'GET',
  //     url: process.env.OPENWEATHER_ONECALL_URL,
  //     params: {
  //       lat: lat,
  //       lon: lng,
  //       appid: process.env.OPENWEATHER_API_KEY,
  //       units: unit,
  //     },
  //   })
  // )
  // const [metric, imperial] = await Promise.all(requests)

  // res.status(200).json({ metric: metric.data, imperial: imperial.data })
  res.status(200).json({ success: 'OK' })
}

export default weather
