import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import Weekday from './Weekday/Weekday'

const Week = ({ data }) => {
  return (
    <Flex
      flexDirection={'column'}
      m={4}
      bg={useColorModeValue('white', 'black')}
      borderRadius={5}
      textAlign={'center'}
      maxWidth='1032px'
      // minWidth='468px'
      shadow={'dark-lg'}>
      <Heading my={4}>Rest of the Week</Heading>
      <Box overflowX={'scroll'} bg={'transparent'} m={2}>
        <SimpleGrid columns={3} spacing={1} m={2}>
          {data.slice(2).map((day, idx) => (
            <Weekday key={idx} day={day} />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

export default Week
