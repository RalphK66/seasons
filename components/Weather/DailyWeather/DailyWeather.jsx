import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import Image from 'next/image'
const DailyWeather = ({ weather, timezone }) => {
  return (
    <Box>
      {weather.daily.map((day, idx) => (
        <Container p={3} className='' key={day.dt}>
          <Box>
            <Box>
              <h3>
                {DateTime.fromSeconds(day.dt).toLocaleString(DateTime.TIME_24_SIMPLE, {
                  zone: timezone,
                })}
              </h3>

              <h4>
                <span>{day.temp.max.toFixed(0)}&deg;C</span>
                <span>{day.temp.min.toFixed(0)}&deg;C</span>
              </h4>
            </Box>

            <Box>
              <Box>
                <span>Sunrise</span>
                <span>
                  {DateTime.fromSeconds(day.sunrise).toLocaleString(DateTime.TIME_24_SIMPLE, {
                    zone: timezone,
                  })}
                </span>
              </Box>

              <Box>
                <span>Sunset</span>
                <span>
                  {DateTime.fromSeconds(day.sunset).toLocaleString(DateTime.TIME_24_SIMPLE, {
                    zone: timezone,
                  })}
                </span>
              </Box>
            </Box>
          </Box>

          <Box>
            <Image
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt='Weather Icon'
              layout='fill'
            />

            <h5>{day.weather[0].description}</h5>
          </Box>
        </Container>
      ))}
    </Box>
  )
}

export default DailyWeather
