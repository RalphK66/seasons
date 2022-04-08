import { Box, Flex, Heading, Text, Spacer } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { shortDate } from '../../../utils/dateTime'
import { DAY, UNITS } from '../../../constants'
import { DateTime } from 'luxon'
import Image from 'next/image'

const Day = ({ weather, location, unit, day }) => {
  const units = UNITS[unit]
  const weatherData = weather.daily[day]
  const dateTime = DateTime.fromSeconds(weatherData.dt, { zone: weather.timezone })
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`

  return (
    <Box
      m={4}
      p={4}
      bg={useColorModeValue('white', 'blue.500')}
      borderRadius={5}
      textAlign={'center'}
      maxWidth='500px'
      width='100%'>
      <Flex>
        <Text>{DAY[day].toUpperCase()}</Text>
        <Spacer />
        <Text>{shortDate({ dateTime: dateTime, unit: unit })}</Text>
      </Flex>
      <Flex align={'center'} justifyContent={'center'}>
        <Image src={iconUrl} alt='weather icon' width={128} height={128} bg={'gray.100'} />
        <Flex align={'baseline'} gap={3}>
          <Heading size={'4xl'}>
            {weatherData.temp.max.toFixed(0)}
            {units.temp}
          </Heading>
          <Heading fontWeight={'normal'}>
            {weatherData.temp.min.toFixed(0)}
            {units.temp}
          </Heading>
        </Flex>
      </Flex>
      <Text>{weatherData.weather[0].description}</Text>
    </Box>
  )
}

export default Day
