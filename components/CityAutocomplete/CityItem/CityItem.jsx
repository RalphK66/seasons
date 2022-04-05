import axios from 'axios'
import { useRouter } from 'next/router'
import data from "../../../data/aspen.json"

const CityItem = ({ description, place_id }) => {
  const router = useRouter()

  const { main_text, secondary_text } = description

  const onClick = async () => {
    // const { data } = await axios.post('/api/geocode', { place_id })
    console.log(data)
    const { lat, lng } = data
    const slug = main_text.replace(' ', '_')
    router.push({
      pathname: '/weather/[slug]',
      query: { lat, lng, slug },
    })
  }

  return (
    <div onClick={onClick} style={{ display: 'flex' }}>
      <div>
        <strong>{main_text}, </strong>
        {secondary_text}
      </div>
    </div>
  )
}

export default CityItem
