import { Box, Flex, Heading, IconButton, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa'
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'
import { UNIT } from '../../../constants'
import { UnitContext } from '../../../context/UnitContext'

const Header = () => {
  const router = useRouter()
  const { unit, toggleUnit } = useContext(UnitContext)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      p={1}
      h={'150px'}
      w={'100%'}
      bgImage="url('/images/seasons_banner.png')"
      bgpos='center'
      bgSize={'cover'}
      bgRepeat='no-repeat'>
      <Flex pos={'relative'} align='center' justify={'center'} w={'100%'} h={'100%'}>
        {router.asPath !== '/' && (
          <Box pos={'absolute'} left={0} m={1}>
            <NextLink href='/' passHref shallow>
              <FaArrowLeft color={'white'} size={24} />
            </NextLink>
          </Box>
        )}
        <Box p={4} bg={'whiteAlpha.50'} shadow={'dark-lg'}>
          <NextLink href={'/'} passHref>
            <Heading as={'a'} mx={'auto'} fontSize={'6xl'} color={'white'}>
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
