import { Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div style={{ flexGrow: 1 }}>
      <div style={{ position: 'static' }}>
        <h6 style={{ flexGrow: 1 }}>Seasons Weather App</h6>
        <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
      </div>
    </div>
  )
}

export default Header
