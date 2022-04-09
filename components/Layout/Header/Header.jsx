import { Box, Flex, Heading, Button, Link, Text, Spacer } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { TiArrowBack } from 'react-icons/ti'
import { useColorModeValue, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box bg={useColorModeValue('white', 'gray.700')} p={4} width='100%'>
      <Flex align='center' pos='relative' position='static'>
        <NextLink href='/' passHref>
          <Button as={Link} colorScheme='blue'>
            {<Icon as={TiArrowBack} w={[4, 5, 6]} h={[4, 5, 6]} />}
          </Button>
        </NextLink>
        <Spacer />
        <Box>
          <NextLink href='/' passHref>
            <Heading
              as={'a'}
              mx='auto'
              fontSize={['l', 'xl', '3xl', '5xl']}
              transition={'font-size 0.3s ease'}>
              Seasons Weather
            </Heading>
          </NextLink>
        </Box>
        <Spacer />
        <Button onClick={toggleColorMode} colorScheme='blue'>
          <Icon
            as={colorMode === 'light' ? BsMoonStarsFill : BsSunFill}
            w={[4, 5, 6]}
            h={[4, 5, 6]}
          />
        </Button>
      </Flex>
    </Box>
  )
}

export default Header
