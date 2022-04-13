import { Box, Flex, Heading, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa'
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'
import { HEADER_HEIGHT } from '../../../constants'
import { UNIT } from '../../../constants/weather'
import { UnitContext } from '../../../context/UnitContext'

const Header = () => {
  const router = useRouter()
  const { unit, toggleUnit } = useContext(UnitContext)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box 
    id={'header'}
      pos={'fixed'}
      zIndex={'999'}
      p={1}
      h={HEADER_HEIGHT}
      w={'100%'}
      bgImage="url('/images/seasons_banner.png')"
      bgPos='center'
      bgSize={'cover'}
      bgRepeat='no-repeat'>
      <Flex pos={'relative'} align={'center'} justify={'center'} w={'100%'} h={'100%'}>
        {router.asPath !== '/' && (
          <Box pos={'absolute'} left={0} m={1}>
            <NextLink href='/' passHref shallow>
              <FaArrowLeft color={'white'} size={24} />
            </NextLink>
          </Box>
        )}
        <Box p={4} bg={'blackAlpha.600'}>
          <NextLink href={'/'} passHref>
            <Heading as={'a'} mx={'auto'} fontSize={['4xl', '6xl']} color={'white'}>
              Seasons
            </Heading>
          </NextLink>
        </Box>
        <Flex m={1} pos={'absolute'} right={0} top={0}>
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
          />
        </Flex>
        <Flex m={1} pos={'absolute'} right={0} bottom={0}>
          <IconButton
            onClick={toggleUnit}
            icon={unit === UNIT.metric ? <RiFahrenheitFill /> : <RiCelsiusFill />}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
