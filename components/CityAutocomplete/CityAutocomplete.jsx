import axios from 'axios'
import { useState, useEffect } from 'react'
import { Center, Flex, Box, InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import CityList from './CityList'
import cities from '../../data/cities.json'

const PlacesAutocomplete = () => {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState(null)
  // const [suggestions, setSuggestions] = useState([])

  // useEffect(() => {
  //   const getSuggestions = async () => {
  //     const results = await axios.post('/api/places', { query })
  //     const { predictions, status } = results.data
  //     setStatus(status)
  //     setSuggestions(predictions)
  //     console.log(predictions)

  //   }
  //   if (query) {
  //     getSuggestions()
  //   }
  // }, [query])

  const onChange = async (e) => {
    const { value } = e.target
    setQuery(value)
  }

  const onSelect = async () => {}

  return (
    <Center>
      <Flex flexDirection='column'>
        <Box m={3}>
          <InputGroup>
            <Input
              size='lg'
              variant='flushed'
              placeholder='Enter city...'
              value={query}
              onChange={onChange}
            />
            <InputRightElement>
              {/* {suggestions.length > 0 && <CheckIcon color='green.500' />} */}
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box m={3} p={1}>
          <CityList cities={cities} />
        </Box>
      </Flex>
    </Center>
  )
}

export default PlacesAutocomplete
