import { Box, Flex } from '@chakra-ui/react'

import Header from '../Header/Header'
import StickyFooter from '../StickyFooter'




const LayoutBox = ({ children }) => {
  return (
    <Flex flexDirection={'column'} minHeight='100vh'>
      {children}
    </Flex>
  )
}
const Layout = ({ children }) => {

  return (
    <LayoutBox>
      <Header />
      <Box w={'md'} minW='fit-content' mx='auto'>
        {children}
      </Box>
      <StickyFooter />
    </LayoutBox>
  )
}

export default Layout
