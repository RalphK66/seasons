import { Flex, Heading, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import { DAY } from '../../../constants'
import Card from '../../Card'
import WeatherModal from '../WeatherModal'

const Day = ({ data, day }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const iconUrl = data.info.description.iconUrl

  return (
    <>
      <Card w={'100%'} m={5} p={4} maxWidth={'500px'} onClick={onOpen} role={'button'}>
        <Flex align={'baseline'}>
          <Heading size='md'>{DAY[day].toUpperCase()}</Heading>
          <Text ms={5}>{data.info.weekday.short}</Text>
          <Spacer />
          <Text>{data.info.short_date}</Text>
        </Flex>
        <Flex align={'center'} justifyContent={'center'}>
          <Image src={iconUrl} alt={'weather icon'} width={128} height={128} />
          <Flex align={'baseline'} gap={3}>
            <Heading size={'4xl'} color={'red.400'}>
              {data.weather.max.value}
              {data.weather.max.unit}
            </Heading>
            <Heading fontWeight={'normal'} color={'blue.400'}>
              {data.weather.min.value}
              {data.weather.min.unit}
            </Heading>
          </Flex>
        </Flex>
        <Text>{data.info.description.content}</Text>
      </Card>
      <WeatherModal
        day={data}
        isOpen={isOpen}
        onClose={onClose}
        isToday={day === 0}
        isTomorrow={day === 1}
      />
    </>
  )
}

export default Day
