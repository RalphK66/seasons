import { Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { DAY } from '../../../constants'
import Card from '../../Card'
import Details from './Details'

const Day = ({ data, day }) => {
  const iconUrl = data.info.description.iconUrl

  return (
    <Card w={'100%'} m={4} p={4} maxWidth={'500px'}>
      <Flex align={'baseline'}>
        <Heading>{DAY[day].toUpperCase()}</Heading>
        <Text ms={5}>{data.info.weekday.short}</Text>
        <Spacer />
        <Text>{data.info.short_date}</Text>
      </Flex>
      <Flex align={'center'} justifyContent={'center'}>
        <Image src={iconUrl} alt='weather icon' width={128} height={128} />
        <Flex align={'baseline'} gap={3}>
          <Heading size={'4xl'}>
            {data.weather.max.value}
            {data.weather.max.unit}
          </Heading>
          <Heading fontWeight={'normal'}>
            {data.weather.min.value}
            {data.weather.min.unit}
          </Heading>
        </Flex>
      </Flex>
      <Text>{data.info.description.content}</Text>
      <Details data={data.weather} />
    </Card>
  )
}

export default Day
