import axios from 'axios'
import { useRouter } from 'next/router'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const CityItem = ({ location }) => {
  const { place_id, structured_formatting } = location
  const { main_text, secondary_text } = structured_formatting

  const router = useRouter()

  const handleLocationSelect = async () => {
    const { data } = await axios.get('/api/geocode', { params: { place_id } })
    const { lat, lng } = data

    const slug = main_text.replace(' ', '_')

    router.push({
      pathname: '/weather/[slug]',
      query: { slug, lat, lng, main_text, secondary_text },
    })
  }

  return (
    <Box
      p={1.5}
      borderRadius={5}
      _hover={{ color: 'green.600', bg: useColorModeValue('whiteAlpha.600', 'blackAlpha.600') }}
      transition={'all 0.3s ease'}
      role={'button'}
      onClick={handleLocationSelect}>
      <Text>
        {main_text}, {secondary_text}
      </Text>
    </Box>
  )
}

export default CityItem

// import location from '../../../testData/location.json'
// import data from '../../../testData/geoLocation.json'
