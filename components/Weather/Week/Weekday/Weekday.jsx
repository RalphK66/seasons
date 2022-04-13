import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
  WrapItem,
} from '@chakra-ui/react'
import Image from 'next/image'
import WeatherModal from '../../WeatherModal'

const Weekday = ({ day, isToday = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <WrapItem onClick={onOpen} role='button'>
      <Flex
        w={'100%'}
        bg={useColorModeValue('white', 'black')}
        transition={'background-color 0.3s ease-in-out'}
        borderRadius={5}
        shadow={'md'}
        borderWidth={1}
        borderColor={'rgba(255, 255, 255, 0.24)'}>
        <Box w={'100%'}>
          <Flex flexDir={'column'} p={4}>
            <Flex align={'center'}>
              <Text fontSize={'sm'} fontWeight={'bold'}>
                {isToday ? 'Today' : day.info.weekday.short}
              </Text>
              <Spacer />
              <Text fontSize={'sm'}>{day.info.short_date}</Text>
            </Flex>
            <Flex flexDir={'column'} justify={'center'} mt={2}>
              <Heading size={'md'} color={'red.400'}>
                {day.weather.max.value}
                {day.weather.max.unit}
              </Heading>
              <Text fontSize={'sm'} color={'blue.400'}>
                {day.weather.min.value}
                {day.weather.min.unit}
              </Text>
            </Flex>
            <Flex justify={'center'}>
              <Image
                src={day.info.description.iconUrl}
                alt={'weather icon'}
                width={72}
                height={72}
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <WeatherModal day={day} isOpen={isOpen} onClose={onClose} />
    </WrapItem>
  )
}

export default Weekday
