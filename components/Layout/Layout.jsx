import { Flex, useColorMode } from '@chakra-ui/react'
import Header from './Header/Header'
import StickyFooter from './StickyFooter'

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()

  const bgImageUrl = colorMode === 'light' ? '/images/clouds.jpg' : '/images/clouds_dark.jpg'

  return (
    <Flex
      minHeight={'100vh'}
      w={'100%'}
      flexDir={'column'}
      flex={1}
      align={'center'}
      justify={'center'}
      bgImage={`url(${bgImageUrl})`}
      bgPos='center'
      bgSize={'cover'}
      bgRepeat='no-repeat'
      transition={'background-image 0.3s ease-in-out'}>
      <Header />
      {children}
      <StickyFooter />
    </Flex>
  )
}

export default Layout
