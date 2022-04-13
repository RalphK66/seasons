import { Flex, Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Flex
      pos={'absolute'}
      top={'50%'}
      left={'50%'}
      transform={'auto'}
      translateX='-50%'
      translateY='-50%'>
      <Spinner w={'100px'} h={'100px'} size={'xl'} speed={'1s'} thickness={'8px'} />
    </Flex>
  )
}

export default Loader
