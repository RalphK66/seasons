import { Wrapper, Status } from '@googlemaps/react-wrapper'

import CityAutocomplete from '../components/CityAutocomplete'

const Home = () => {
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <p>spinner</p>
      case Status.FAILURE:
        f
        return <p>error</p>
      case Status.SUCCESS:
        return <CityAutocomplete />
    }
  }
  return <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY} render={render} />
}

export default Home

export { getServerSideProps } from '../src/Chakra'
