import { Flex, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import { BsThermometerSnow, BsThermometerSun } from 'react-icons/bs'
import { FaMoon, FaSun, FaWind } from 'react-icons/fa'
import { RiContrastDrop2Line, RiDropLine } from 'react-icons/ri'
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { UNITS } from '../../../constants'
import { MoonIcon, MoonPhase, UvIndex, Wind } from '../../../constants/weather'
import { shortTime } from '../../../utils/dateTime'
import { DateTime } from 'luxon'

const Details = ({ weatherData, unit, zone }) => {
  const { temp, humidity, wind_deg, wind_speed, dew_point, uvi, sunrise, sunset, moon_phase } =
    weatherData

  const iconProps = { size: 32 }
  const data = [
    {
      name: 'High',
      value: temp.max,
      unit: UNITS[unit].temp,
      icon: <BsThermometerSun {...iconProps} />,
    },

    {
      name: 'Low',
      value: temp.min,
      unit: UNITS[unit].temp,
      icon: <BsThermometerSnow {...iconProps} />,
    },
    {
      name: 'Humidity',
      value: humidity,
      unit: '%',
      icon: <RiContrastDrop2Line {...iconProps} />,
    },
    {
      name: 'Wind',
      value: Wind({ deg: wind_deg, speed: wind_speed }),
      unit: UNITS[unit].wind,
      icon: <FaWind {...iconProps} />,
    },
    {
      name: 'Dew Point',
      value: dew_point,
      unit: UNITS[unit].temp,
      icon: <RiDropLine {...iconProps} />,
    },
    {
      name: 'UV Index',
      value: UvIndex({ uvi: uvi }),
      icon: <FaSun {...iconProps} />,
    },
    {
      name: 'Sunrise',
      value: shortTime({ dateTime: DateTime.fromSeconds(sunrise, { zone }), unit: unit }),
      icon: <FiSunrise {...iconProps} />,
    },
    {
      name: 'SunSet',
      value: shortTime({ dateTime: DateTime.fromSeconds(sunset, { zone }), unit: unit }),
      icon: <FiSunset {...iconProps} />,
    },
    {
      name: 'Moon Phase',
      value: (
        <Flex gap={1} align={'center'}>
          {MoonPhase({ phase: moon_phase })}
          {MoonIcon({ phase: moon_phase, props: { size: 32 } })}{' '}
        </Flex>
      ),
      icon: <FaMoon {...iconProps} />,
    },
  ]

  return (
    <TableContainer>
      <Table variant='simple'>
        <Tbody color={'black'}>
          {data.map((d, idx) => {
            console.log(d)
            return (
              <Tr key={idx}>
                <Td>
                  <Flex gap={3} align={'center'}>
                    {d.icon}
                    {d.name}
                  </Flex>
                </Td>
                <Td>
                  <Flex gap={1} align={'center'}>
                    <Text>{d.value}</Text>
                    <Text>{d.hasOwnProperty('unit') ? d.unit : ''}</Text>
                  </Flex>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Details
