import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { UNITS } from '../../../constants'

const Today = ({ weather, location, unit }) => {
  const units = UNITS[unit]
  const todaysWeather = weather.daily[0]
 
  return (
    <Box m={4} p={4} bg={'blue.500'} borderRadius={5}>
      <Heading>
        {location.main_text} - {location.secondary_text}
      </Heading>

      <Flex align={'baseline'} gap={3}>
        <Heading size='lg'>
          {todaysWeather.temp.max.toFixed(0)} {units.temp}
        </Heading>
        <Text> {todaysWeather.temp.min.toFixed(0)} {units.temp}</Text>
      </Flex>
    </Box>
  )
}

export default Today
