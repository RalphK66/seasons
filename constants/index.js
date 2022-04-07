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
    temp: 'ºC',
    wind: 'km/h',
    pressure: 'bar',
    rain: 'mm',
    snow: 'cm',
  },
  imperial: {
    temp: 'F',
    wind: 'm/h',
    pressure: 'inHg',
    rain: 'in',
    snow: 'in',
  },
}
