import { Text, Link, Center, Flex } from '@chakra-ui/react'

const Copyright = () => {
  return (
    <Text>
      {'Copyright © '}
      <Link color='blue.500' href='https://ralphkilian.ca/'>
        Ralph Kilian
      </Link>{' '}
      {` ${new Date().getFullYear()}`}
    </Text>
  )
}

const StickyFooter = () => {
  return (
    <Center p={5} mt={'auto'}>
      <Flex flexDirection={'column'} align={"center"}>
        <Copyright />
      </Flex>
    </Center>
  )
}

export default StickyFooter
