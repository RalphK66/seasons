import { Box, Flex, Heading, Button, Link, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { TiArrowBack } from 'react-icons/ti'
import { useColorModeValue, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box bg={useColorModeValue('gray.200', 'gray.700')} p={4}>
      <Flex align='center' justify='center' pos='relative' position='static' boxSize='full'>
        <NextLink href='/' passHref>
          <Button as={Link} colorScheme='blue'>
            {<Icon as={TiArrowBack} w={6} h={6} />}
          </Button>
        </NextLink>
        <Box>
          <NextLink href='/' passHref>
            <Heading
              as={'a'}
              mx='auto'
              fontSize={['xl', '3xl', '5xl']}
              transition={'font-size 0.3s ease'}>
              Seasons Weather
            </Heading>
          </NextLink>
        </Box>

        <Button onClick={toggleColorMode} colorScheme='blue'>
          <Icon as={colorMode === 'light' ? BsMoonStarsFill : BsSunFill} w={6} h={6} />
        </Button>
      </Flex>
    </Box>
  )
}

export default Header
