import { Box, Flex, Heading, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import Image from 'next/image'
import { useState } from 'react'
import { ImArrowRight } from 'react-icons/im'
import { DAY, UNITS } from '../../../constants'
import { shortDate } from '../../../utils/dateTime'
import Details from '../Details/Details'

const Day = ({ weather, location, unit, day }) => {
  const [showDetails, setShowDetails] = useState(false)
  const units = UNITS[unit]
  const weatherData = weather.daily[day]
  const dateTime = DateTime.fromSeconds(weatherData.dt, { zone: weather.timezone })
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`

  return (
    <Flex
      position={'relative'}
      flexDirection={'column'}
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
      <Box
        role='button'
        position={'absolute'}
        top={'50%'}
        right={0}
        m={1}
        onClick={() => setShowDetails((prev) => !prev)}>
        <ImArrowRight />
      </Box>
      {showDetails && <Details weatherData={weatherData} unit={unit} zone={weather.timezone}/>}
    </Flex>
  )
}

export default Day
