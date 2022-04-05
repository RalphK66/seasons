import { addSeconds, fromUnixTime } from 'date-fns'
// import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz/esm'

export const fromUnix = (timestamp) => {
  return fromUnixTime(timestamp)
}

export const UTCtoLocal = (timestamp, offsetInSec) => {
  const UTC = fromUnix(timestamp)
  const local = addSeconds(UTC, offsetInSec)
  return local
}

// console.log(fromUnix(1649076404))
// const local = UTCtoLocal(1649076404, -21600)
// console.log(local)
// console.log(utcToZonedTime(fromUnix(1649076404), "America/Denver"))

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


