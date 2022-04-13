import { Flex, Heading, useColorModeValue, Wrap } from '@chakra-ui/react'
import Weekday from './Weekday'

const Week = ({ data }) => {
  return (
    <Flex
      flexDir={'column'}
      p={4}
      my={5}
      mx={2}
      bg={useColorModeValue('aliceblue', 'black')}
      borderRadius={5}
      textAlign={'center'}
      maxWidth='1032px'
      width={'100%'}
      shadow={'dark-lg'}
      transition={'background-color 0.3s ease-in-out'}>
      <Heading size={'md'} mb={4}>
        WEEKLY
      </Heading>
      <Wrap spacing={[1, 2, 3, 4]} justify={'center'}>
        {data.map((day, idx) => (
          <Weekday key={idx} day={day} isToday={idx === 0} />
        ))}
      </Wrap>
    </Flex>
  )
}

export default Week
