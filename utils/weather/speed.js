export const convertMetersSec = (metersSec) => {
  const milesHour = metersSec * 2.236936
  return { metersSec, milesHour }
}

export const convertMilesHour = (milesHour) => {
  const metersSec = milesHour * 0.44704
  return { metersSec, milesHour }
}
