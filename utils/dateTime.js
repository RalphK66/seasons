import { DateTime } from 'luxon'
import { UNIT, UNITS } from '../constants'

export const convertSecToHMS = (sec) => {
  if (sec === 0) return { sign: '', hours: 0, minutes: 0, seconds: 0 }

  const sign = sec > 0 ? '+' : '-'
  const absSec = Math.abs(sec)
  const seconds = absSec % 60
  const totalMinutes = Math.trunc(absSec / 60)
  const minutes = totalMinutes % 60
  const hours = Math.trunc(totalMinutes / 60)
  return { sign, hours, minutes, seconds }
}

const getHourlyWeather = ({ hourly, timezone }) => {
  const eodToday = DateTime.local({ zone: timezone }).endOf('day')
  const eodTodayTimestamp = eodToday.toUnixInteger()

  const eodTomorrow = eodToday.plus({ days: 1 })
  const eodTomorrowTimestamp = eodTomorrow.toUnixInteger()

  const hourlyData = { today: [], tomorrow: [], nextDay: [] }

  hourly.forEach((hourData) => {
    if (hourData.dt < eodTodayTimestamp) {
      hourlyData.today.push(hourData)
    } else if (hourData.dt > eodTodayTimestamp && hourData.dt < eodTomorrowTimestamp) {
      hourlyData.tomorrow.push(hourData)
    } else {
      hourlyData.nextDay.push(hourData)
    }
  })

  // Object.entries(hourlyData).forEach(([k, v]) => console.log(k, v.length))

  return hourlyData
}

// getHourlyWeather({ hourly, timezone })

export const shortTime = ({dateTime = DateTime.now(), unit}) => {
  return dateTime.toLocaleString(
    unit === UNIT.metric ? DateTime.TIME_24_SIMPLE : DateTime.TIME_SIMPLE
  )
}

export const shortDate = ({dateTime = DateTime.now(), unit}) => {
  const parts = dateTime.toLocaleParts().map((part, idx) => {
    if (idx < 3) {
      return part.value
    }
  })
  return unit === UNIT.metric ? parts.join('') : parts.reverse().join('')
}
