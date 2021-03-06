import { DateTime, Info } from 'luxon'
import {
  BsChevronDoubleDown,
  BsClouds,
  BsPersonLinesFill,
  BsSnow,
  BsThermometerHalf,
  BsThermometerSnow,
  BsThermometerSun,
} from 'react-icons/bs'
import { FaCloudRain, FaSun, FaWind } from 'react-icons/fa'
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { RiContrastDrop2Line, RiDropLine } from 'react-icons/ri'
import { UNIT, UNITS } from '../constants/weather'
import { hpa_inhg, mm_Cm, mm_In, ms_kmh } from '../utils/convertions'
import { shortDate, shortTime } from '../utils/dateTime'

const iconProps = { size: 28 }

const windDirSpd = ({ deg, speed }) => {
  const s = Math.round(speed)

  if (deg > 348.75 || deg <= 11.25) return `N - ${s}`
  if (deg > 11.25 && deg <= 33.75) return `NNE - ${s}`
  if (deg > 33.75 && deg <= 56.25) return `NE - ${s}`
  if (deg > 56.25 && deg <= 78.75) return `ENE - ${s}`
  if (deg > 78.75 && deg <= 101.25) return `E - ${s}`
  if (deg > 101.25 && deg <= 123.75) return `ESE - ${s}`
  if (deg > 123.75 && deg <= 146.25) return `SE - ${s}`
  if (deg > 146.25 && deg <= 168.75) return `SSE - ${s}`
  if (deg > 168.75 && deg <= 191.25) return `S - ${s}`
  if (deg > 191.25 && deg <= 213.75) return `SSW - ${s}`
  if (deg > 213.75 && deg <= 236.25) return `SWS - ${s}`
  if (deg > 236.25 && deg <= 258.75) return `WSW - ${s}`
  if (deg > 258.75 && deg <= 281.25) return `W - ${s}`
  if (deg > 281.25 && deg <= 303.75) return `WNW - ${s}`
  if (deg > 303.75 && deg <= 326.25) return `NW - ${s}`
  if (deg > 326.25 && deg <= 348.75) return `NNW - ${s}`
}

const UvIndex = ({ uvi }) => {
  const idx = Math.floor(uvi)
  if (idx < 3) return `${idx} - LOW`
  if (idx >= 3 && idx < 5) return `${idx} - MODERATE`
  if (idx >= 5 && idx < 7) return `${idx} - HIGH`
  if (idx >= 7 && idx < 11) return `${idx} - VERY HIGH`
  if (idx >= 11) return `${idx} - EXTREME`
}

const roundPrecipitation = (pop) => {
  return Math.ceil(pop / 5) * 5
}

const processWeatherData = ({ weather, timezone, unit }) => {
  const dateTime = DateTime.fromSeconds(weather.dt, { zone: timezone })

  const temperature = (temp, unit) => {
    if (typeof temp === 'object') {
      return {
        max: {
          name: 'High',
          value: Math.round(temp.max),
          unit: unit,
          icon: <BsThermometerSun {...iconProps} />,
        },
        min: {
          name: 'Low',
          value: Math.round(temp.min),
          unit: unit,
          icon: <BsThermometerSnow {...iconProps} />,
        },
      }
    }
    if (typeof temp === 'number') {
      return {
        temp: {
          name: 'Temperature',
          value: Math.round(temp),
          unit: unit,
          icon: <BsThermometerHalf {...iconProps} />,
        },
      }
    }
  }

  const feelsLike = (feels_like, unit) => {
    const isString = typeof feels_like === 'string'
    return isString
      ? {
          feels_like: {
            name: 'Feels Like',
            value: Math.round(feels_like),
            unit: unit,
            icon: <BsPersonLinesFill {...iconProps} />,
          },
        }
      : {}
  }

  const precipitation = (pop, unit) => {
    return pop
      ? {
          precipitation: {
            name: 'Precipitation (%)',
            value: roundPrecipitation(pop),
            unit: unit,
            icon: <BsChevronDoubleDown {...iconProps} />,
          },
        }
      : {}
  }

  const rain = (rain, unit) => {
    if (!rain) return {}
    const amount = Math.round(rain)
    return rain
      ? {
          rain: {
            name: 'Rain',
            value: amount < 1 ? '< 1' : amount,
            unit: unit,
            icon: <FaCloudRain {...iconProps} />,
          },
        }
      : {}
  }

  const snow = (snow, unit) => {
    if (!snow) return {}
    const amount = unit === UNIT.metric ? Math.round(mm_Cm(snow)) : Math.round(mm_In(snow))
    return {
      snow: {
        name: 'Snow',
        value: amount < 1 ? '< 1' : amount,
        unit: unit,
        icon: <BsSnow {...iconProps} />,
      },
    }
  }

  const sunrise = ({ sunrise, unit }) => {
    return sunrise
      ? {
          sunrise: {
            name: 'Sunrise',
            value: shortTime({
              dateTime: DateTime.fromSeconds(sunrise, { zone: timezone }),
              unit: unit,
            }),
            icon: <FiSunrise {...iconProps} />,
          },
        }
      : {}
  }

  const sunset = ({ sunset, timezone, unit }) => {
    return sunset
      ? {
          sunset: {
            name: 'Sunset',
            value: shortTime({
              dateTime: DateTime.fromSeconds(sunset, { zone: timezone }),
              unit: unit,
            }),

            icon: <FiSunset {...iconProps} />,
          },
        }
      : {}
  }

  return {
    info: {
      date: dateTime.toLocaleString(DateTime.DATE_FULL),
      short_date: shortDate({ dateTime, unit }),
      time: shortTime({ dateTime, unit }),
      weekday: {
        short: Info.weekdays('short')[(dateTime.weekday + 6) % 7],
        long: Info.weekdays('long')[(dateTime.weekday + 6) % 7],
      },
      description: {
        title: weather.weather[0].main,
        content: weather.weather[0].description,
        iconUrl: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
      },
    },

    weather: {
      ...temperature(weather.temp, UNITS[unit].temp),
      ...feelsLike(weather.feels_like, UNITS[unit].temp),
      ...precipitation(weather.pop ?? undefined, UNITS[unit].precipitation),
      ...rain(weather.rain ?? undefined, UNITS[unit].rain),
      ...snow(weather.snow ?? undefined, UNITS[unit].snow),
      wind: {
        name: 'Wind',
        value: windDirSpd({
          deg: weather.wind_deg,
          speed: Math.round(unit === UNIT.metric ? ms_kmh(weather.wind_speed) : weather.wind_speed),
        }),
        unit: UNITS[unit].wind,
        icon: <FaWind {...iconProps} />,
      },
      humidity: {
        name: 'Humidity',
        value: weather.humidity,
        unit: UNITS[unit].humidity,
        icon: <RiContrastDrop2Line {...iconProps} />,
      },
      uvi: {
        name: 'UV Index',
        value: UvIndex({ uvi: weather.uvi }),
        unit: '',
        icon: <FaSun {...iconProps} />,
      },
      clouds: {
        name: 'Cloud Cover',
        value: weather.clouds,
        unit: UNITS[unit].clouds,
        icon: <BsClouds {...iconProps} />,
      },
      pressure: {
        name: 'Pressure',
        value: unit === UNIT.metric ? weather.pressure : Math.round(hpa_inhg(weather.pressure)),
        unit: UNITS[unit].pressure,
        icon: <BsChevronDoubleDown {...iconProps} />,
      },
      dew_point: {
        name: 'Dew Point',
        value: Math.round(weather.dew_point),
        unit: UNITS[unit].temp,
        icon: <RiDropLine {...iconProps} />,
      },
      ...sunrise({ sunrise: weather.sunrise ?? undefined, timezone: timezone, unit: unit }),
      ...sunset({ sunset: weather.sunset ?? undefined, timezone: timezone, unit: unit }),
    },
  }
}

export const processedWeatherData = ({ metric, imperial }) => {
  const currentMetric = processWeatherData({
    weather: metric.current,
    timezone: metric.timezone,
    unit: UNIT.metric,
  })
  const currentImperial = processWeatherData({
    weather: imperial.current,
    timezone: imperial.timezone,
    unit: UNIT.imperial,
  })

  const dailyMetric = metric.daily.map((day) =>
    processWeatherData({ weather: day, timezone: metric.timezone, unit: UNIT.metric })
  )

  const dailyImperial = imperial.daily.map((day) =>
    processWeatherData({ weather: day, timezone: imperial.timezone, unit: UNIT.imperial })
  )

  const hourlyMetric = metric.hourly.map((hour) =>
    processWeatherData({ weather: hour, timezone: metric.timezone, unit: UNIT.metric })
  )

  const hourlyImperial = imperial.hourly.map((hour) =>
    processWeatherData({ weather: hour, timezone: imperial.timezone, unit: UNIT.imperial })
  )

  return {
    metric: { current: currentMetric, daily: dailyMetric, hourly: hourlyMetric },
    imperial: { current: currentImperial, daily: dailyImperial, hourly: hourlyImperial },
  }
}
