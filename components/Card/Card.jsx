import { Flex, useColorModeValue } from '@chakra-ui/react'

const Card = (props) => {
  return (
    <Flex
      pos={'relative'}
      flexDir={'column'}
      m={4}
      p={4}
      borderRadius={5}
      bg={useColorModeValue('white', 'black')}
      textAlign={'center'}
      width='100%'
      maxWidth={'500px'}
      height={'fit-content'}
      shadow={'dark-lg'}
      {...props}
      transition={'background-color 0.3s ease-in-out'}>
      {props.children}
    </Flex>
  )
}

export default Card
