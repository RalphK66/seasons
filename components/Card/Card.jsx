import { Flex, useColorModeValue } from '@chakra-ui/react'


const Card = ({ children, bg=['white', 'black'] }) => {
  return (
    <Flex
      position={'relative'}
      flexDirection={'column'}
      m={4}
      p={4}
      bg={useColorModeValue(bg[0], bg[1])}
      borderRadius={5}
      textAlign={'center'}
      maxWidth='500px'
      width='100%'
      height={'fit-content'}
      shadow={'dark-lg'}>
      {children}
    </Flex>
  )
}

export default Card
