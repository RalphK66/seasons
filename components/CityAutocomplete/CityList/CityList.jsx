import React from 'react'
import CityItem from '../CityItem'

const CityList = ({ cities }) => {
  return (
    <div>
      {cities?.map((city, idx) => (
        <CityItem key={idx} description={city.structured_formatting} place_id={city.place_id} />
      ))}
    </div>
  )
}

export default CityList
