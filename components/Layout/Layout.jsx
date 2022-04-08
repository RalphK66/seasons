import { Box, Center, Flex, Spacer } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

import Header from '../Header/Header'
import StickyFooter from '../StickyFooter'

const Layout = ({ children }) => {
  return (
    <Flex
      flexDirection={'column'}
      minHeight='100vh'
      w='100%'
      bg={useColorModeValue('blue.500', 'blue.1000')}>
      <Header />
      <Flex align={'center'} justifyItems={'center'}>
        {children}
      </Flex>
      <StickyFooter />
    </Flex>
  )
}

export default Layout
