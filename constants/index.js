export const CACHE_MAX_AGE = 60 * 30

export const UNIT = { metric: 'metric', imperial: 'imperial' }

export const UNITS = {
  metric: {
    temp: 'º',
    wind: 'km/h',
    pressure: 'mBar',
    accumalation: 'mm',
    precipitation: '%',
    clouds: '%',
    humidity: '%',
    rain: 'mm',
    snow: 'cm'
  },
  imperial: {
    temp: 'º',
    wind: 'm/h',
    pressure: 'inHg',
    accumalation: 'in',
    precipitation: '%',
    clouds: '%',
    humidity: '%',
    rain: 'mm',
    snow: 'in'
  },
}

export const DAY = { 0: 'today', 1: 'tomorrow' }

export const HEADER_HEIGHT = '200px'