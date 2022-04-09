import { Text, Link, Center, Flex, Box } from '@chakra-ui/react'

const Copyright = () => {
  return (
    <Text>
      {'Copyright © '}
      <Link color='blue.200' href='https://ralphkilian.ca/'>
        Ralph Kilian
      </Link>{' '}
      {` ${new Date().getFullYear()}`}
    </Text>
  )
}

const StickyFooter = () => {
  return (
    <Box mt={'auto'}>
      <Center p={5}>
        <Flex flexDirection={'column'} align={'center'}>
          <Copyright />
        </Flex>
      </Center>
    </Box>
  )
}

export default StickyFooter
