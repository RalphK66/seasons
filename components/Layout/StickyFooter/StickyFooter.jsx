import { Box, Center, Flex, Link, Text } from '@chakra-ui/react'

const Copyright = () => {
  return (
    <Text color={'black'} fontSize={'sm'}>
      {'Copyright © '}
      <Link color={'red.400'} href='https://ralphkilian.ca/'>
        Ralph Kilian
      </Link>{' '}
      {` ${new Date().getFullYear()}`}
    </Text>
  )
}

const StickyFooter = () => {
  return (
    <Box w={'100%'}>
      <Center>
        <Flex flexDir={'column'} align={'center'} p={2} borderRadius={5}>
          <Copyright />
        </Flex>
      </Center>
    </Box>
  )
}

export default StickyFooter
