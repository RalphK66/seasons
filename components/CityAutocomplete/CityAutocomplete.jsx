import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import CityItem from './CityItem'

const PlacesAutocomplete = () => {
  const [query, setQuery] = useState('')
  const [predictions, setPredictions] = useState(null)

  useEffect(() => {
    const autoComplete = async () => {
      const { data } = await axios.get('/api/places', { params: { query } })
      setPredictions(data.predictions)
    }
    if (query) {
      autoComplete()
    }
  }, [query])

  const onChange = async (e) => {
    const { value } = e.target
    setQuery(value)
    if (!value) {
      setPredictions([])
    }
  }

  return (
    <Flex p={4} m={4} mb={'auto'} flexDir={'column'} minH={'260px'} minW={'365px'}>
      <Box m={4} p={4} borderRadius={5} bg={'whiteAlpha.300'} shadow={'dark-lg'}>
        <InputGroup>
          <Input
            size={'lg'}
            variant={'flushed'}
            placeholder={'Enter city...'}
            value={query}
            onChange={onChange}
            _placeholder={{ color: useColorModeValue('red.500', 'whiteAlpha.800') }}
            _focus={{ _placeholder: { color: 'whiteAlpha.800' } }}
          />
          <InputRightElement>
            {query && predictions?.length > 0 && <CheckIcon color={'green.500'} />}
          </InputRightElement>
        </InputGroup>
        <Box m={3} p={1}>
          {predictions?.map((prediction, idx) => (
            <CityItem key={idx} location={prediction} />
          ))}
        </Box>
      </Box>
    </Flex>
  )
}

export default PlacesAutocomplete

// import predictions from '../../testData/cities.json'
