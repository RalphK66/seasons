import { DateTime } from 'luxon'

export const CACHE_MAX_AGE = 60 * 30

export const UNIT = { metric: 'metric', imperial: 'imperial' }

// const UNITS = {
//   temp: { metric: 'ºC', imperial: 'F' },
//   wind: { metric: 'km/h', imperial: 'm/h' },
//   pressure: { metric: 'bar', imperial: 'inHg' },
//   rain: { metric: 'mm', imperial: 'in' },
//   snow: { metric: 'cm', imperial: 'in' },
// }

export const UNITS = {
  metric: {
    temp: 'º',
    wind: 'km/h',
    pressure: 'bar',
    rain: 'mm',
    snow: 'cm',
    dateTime: {
      time: DateTime.TIME_24_SIMPLE,
      shortDate: (parts) => parts.map((part, idx) => (idx < 3 ? part.value : '')).join(''),
    },
  },
  imperial: {
    temp: 'F',
    wind: 'm/h',
    pressure: 'inHg',
    rain: 'in',
    snow: 'in',
    time: DateTime.TIME_SIMPLE,
    shortDate: (parts) =>
      parts
        .map((part, idx) => (idx < 3 ? part.value : ''))
        .reverse()
        .join(''),
  },
}

export const DAY = { 0: 'today', 1: 'tomorrow', 2: 'nextDay' }
