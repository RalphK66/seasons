import { Box, Divider, Flex, Heading, Spacer, Text,useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

const Weekday = ({ day }) => {
  const maxTempColor = useColorModeValue('blue.600', 'blue.200')
  // const dividerColor = useColorModeValue('gray.800', 'gray.500')
  return (
    <Flex w={'100%'} borderRadius={5} shadow={'lg'}>
      <Box w={'100%'}>
        <Flex flexDirection={'column'} p={4}>
          <Flex align={'center'}>
            <Text fontSize={'sm'} fontWeight={'bold'}>{day.info.weekday.short}</Text>
            <Spacer />
            <Text fontSize={'sm'}>{day.info.short_date}</Text>
          </Flex>
          <Flex flexDirection={'column'} justify={'center'} mt={2}>
            <Heading size={'md'} color={maxTempColor}>
              {day.weather.max.value}
              {day.weather.max.unit}
            </Heading>
            <Text fontSize={'sm'}>
              {day.weather.min.value}
              {day.weather.min.unit}
            </Text>
          </Flex>
          <Flex justify={'center'}>
            <Image src={day.info.description.iconUrl} alt='weather icon' width={72} height={72} />
          </Flex>
        </Flex>
      </Box>
      {/* {(idx + 1) % 3 !== 0 && (
        <Box mx={2} py={2}>
          <Divider orientation={'vertical'} borderColor={dividerColor} />
        </Box>
      )} */}
    </Flex>
  )
}

export default Weekday
