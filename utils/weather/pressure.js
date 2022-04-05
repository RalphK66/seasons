export const convertHPA = (hPa) => {
  const inHg = hPa * 0.0295
  const bar = hPa / 1000
  return {hPa, inHg, bar}
}
