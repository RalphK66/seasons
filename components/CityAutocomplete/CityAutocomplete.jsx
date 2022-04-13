import axios from 'axios'
import { useEffect, useState } from 'react'
import { Box, Center, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import CityItem from './CityItem'
import predictions from '../../data/cities.json'

const PlacesAutocomplete = () => {
  const [query, setQuery] = useState('')
  // const [predictions, setPredictions] = useState(null)

  // useEffect(() => {
  //   const autoComplete = async () => {
  //     const { data } = await axios.get('/api/places', { params: { query } })
  //     setPredictions(data.predictions)
  //   }
  //   if (query) {
  //     autoComplete()
  //   }
  // }, [query])

  const onChange = async (e) => {
    const { value } = e.target
    setQuery(value)
  }

  return (
    <Flex p={4} m={4} mb={'auto'} flexDir={'column'}>
      <Box m={3}>
        <InputGroup>
          <Input
            size={'lg'}
            variant={'flushed'}
            placeholder={'Enter city...'}
            value={query}
            onChange={onChange}
          />
          <InputRightElement>
            {query && predictions?.length > 0 && <CheckIcon color={'green.500'} />}
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box m={3} p={1}>
        {predictions?.map((prediction, idx) => (
          <CityItem key={idx} location={prediction} />
        ))}
      </Box>
    </Flex>
  )
}

export default PlacesAutocomplete
