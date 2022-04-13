import { Box, Center, Flex, Spacer } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

import Header from './Header/Header'
import StickyFooter from './StickyFooter'

const Layout = ({ children }) => {
  return (
    <Flex flexDir={'column'} minHeight='100vh' w='100%'>
      <Header />
      <Flex align={'center'} justifyItems={'center'}>
        {children}
      </Flex>
      <StickyFooter />
    </Flex>
  )
}

export default Layout
