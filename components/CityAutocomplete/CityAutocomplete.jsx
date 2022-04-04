import axios from 'axios'
import { useState, useEffect } from 'react'
import CityList from '../CityList/CityList'
import cities from "../../test/cities.json"

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
    <div>
      <input value={query} onChange={onChange} />
      <CityList cities={cities} />
    </div>
  )
}

export default PlacesAutocomplete

