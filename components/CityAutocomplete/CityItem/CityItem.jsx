import axios from 'axios'
import { useRouter } from 'next/router'
import location from '../../../data/location.json'
import data from '../../../data/geoLocation.json'
import { Text } from '@chakra-ui/react'

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
    <Text
      onClick={handleLocationSelect}
      role={'button'}
      my={1}
      _hover={{ color: 'blue.400' }}
      transition={'color 0.3s ease'}>
      {main_text}, {secondary_text}
    </Text>
  )
}

export default CityItem
