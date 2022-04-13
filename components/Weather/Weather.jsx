import { Box, Flex } from '@chakra-ui/react'
import Day from './Day'
import Week from './Week'

const Weather = ({ data }) => {
  return (
    <Box>
      <Flex flexWrap={'wrap'} justify={'center'}>
        <Day data={data.daily[0]} day={0} />
        <Day data={data.daily[1]} day={1} />
      </Flex>
      <Flex justify={'center'} m={4}>
        <Week data={data.daily} />
      </Flex>
      <Flex justify={'center'} m={4}>
        {/* <Hourly data={data} /> */}
      </Flex>
    </Box>
  )
}

export default Weather
