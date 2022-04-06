import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const Today = ({ weather, location }) => {
  return (
    <Box m={4} p={4} bg={'blue.500'} borderRadius={5}>
      <Heading>
        {location.main_text} {location.secondary_text}
      </Heading>

      <Flex align={'baseline'}>
        <Heading size="lg">{weather.temp.toFixed(0)}&deg;C</Heading>

        <Text> place me next to the Text above! </Text>
      </Flex>
    </Box>
  )
}

export default Today
