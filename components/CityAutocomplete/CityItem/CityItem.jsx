import axios from 'axios'
import { useRouter } from 'next/router'
import location from '../../../data/location.json'
import data from '../../../data/geoLocation.json'

// const CityItem = ({ location }) => {
const CityItem = () => {
  const {
    place_id,
    structured_formatting: { main_text, secondary_text },
  } = location

  const router = useRouter()

  const handleLocationSelect = async () => {
    // const { data } = await axios.get('/api/geocode', { params: { place_id } })
    const { lat, lng } = data

    const slug = main_text.replace(' ', '_')

    router.push({
      pathname: '/weather/[slug]',
      query: { slug, lat, lng, main_text, secondary_text },
    })
  }

  return (
    <>
      <div onClick={handleLocationSelect} style={{ display: 'flex' }}>
        <div>
          <strong>{main_text}, </strong>
          {secondary_text}
        </div>
      </div>
    </>
  )
}

export default CityItem
