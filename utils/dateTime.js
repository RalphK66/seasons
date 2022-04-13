import { DateTime } from 'luxon'
import { UNIT } from '../constants/weather'

export const shortTime = ({ dateTime, unit }) => {
  const format = unit === UNIT.metric ? DateTime.TIME_24_SIMPLE : DateTime.TIME_SIMPLE
  return dateTime.toLocaleString(format)
}

export const shortDate = ({ dateTime, unit }) => {
  const date = [dateTime.day, dateTime.month]
  return unit === UNIT.metric ? date.join('/') : date.reverse().join('/')
}

export const isNewDay = (hour) => {
  return hour === ('00:00' || '00:00 AM')
}
