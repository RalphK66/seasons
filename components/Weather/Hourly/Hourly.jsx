import { Flex, Heading, List, useColorModeValue } from '@chakra-ui/react'
import Hour from './Hour'

const Hourly = ({ data }) => {
  return (
    <Flex
      flexDir={'column'}
      p={4}
      my={5}
      mx={2}
      bg={useColorModeValue('white', 'black')}
      borderRadius={5}
      textAlign={'center'}
      maxWidth={'500px'}
      width={'100%'}
      shadow={'dark-lg'}
      transition={'background-color 0.3s ease-in-out'}>
      <Heading size={'md'} mb={4}>
        HOURLY
      </Heading>
      <List align='stretch'>
        {data.map((hour, idx) => (
          <Hour key={idx} hour={hour} isNow={idx === 0} />
        ))}
      </List>
    </Flex>
  )
}

export default Hourly
