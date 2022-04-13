import { Box, Center, Fade, Flex, Spacer, useColorMode } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

import Header from './Header/Header'
import StickyFooter from './StickyFooter'

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()
  return (
    <Flex flexDir={'column'} minHeight={'100vh'} w={'100%'}>
      <Header />
      <Flex
        flexDir={'column'}
        flex={1}
        align={'top'}
        justify={'center'}
        bgImage={`${
          colorMode === 'light' ? "url('/images/clouds.jpg')" : "url('/images/clouds_dark.jpg')"
        }`}
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
