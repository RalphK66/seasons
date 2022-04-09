// velocity - metric
export const ms_kmh = (ms) => {
  return ms * 3.6
}
// Pressure - metric
export const hpa_bar = (hPa) => {
  return hPa / 1000
}
// Pressure - imperial
export const hpa_inhg = (hPa) => {
  return hPa * 0.0295
}
// Accumulation - metric
export const mm_Cm = (mm) => {
  return mm / 10
}
// Accumulation - imperial
export const mm_In = (mm) => {
  return mm / 25.4
}
