import { Box, Center, Fade, Flex, Spacer, useColorMode } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { HEADER_HEIGHT } from '../../constants'

import Header from './Header/Header'
import StickyFooter from './StickyFooter'

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()

  const bgImageUrl = colorMode === 'light' ? '/images/clouds.jpg' : '/images/clouds_dark.jpg'

  return (
    <Flex flexDir={'column'} minHeight={'100vh'} w={'100%'}>
      <Header />
      <Flex
        as='main'
        mt={HEADER_HEIGHT}
        flexDir={'column'}
        flex={1}
        align={'center'}
        justify={'center'}
        bgImage={`url(${bgImageUrl})`}
        bgPos='center'
        bgSize={'cover'}
        bgRepeat='no-repeat'
        transition={'background-image 0.3s ease-in-out'}>
        {children}
        <StickyFooter />
      </Flex>
    </Flex>
  )
}

export default Layout
