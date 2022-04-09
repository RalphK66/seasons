import {
  WiMoonAltNew,
  WiMoonAltWaxingCrescent4,
  WiMoonAltFirstQuarter,
  WiMoonAltWaxingGibbous4,
  WiMoonAltFull,
  WiMoonAltWaningGibbous4,
  WiMoonAltThirdQuarter,
  WiMoonAltWaningCrescent4,
} from 'react-icons/wi'

export const MoonIcon = ({ phase, props }) => {
  if (phase === 0 || phase === 1) return <WiMoonAltNew {...props} />
  if (phase > 0 || phase < 0.25) return <WiMoonAltWaxingCrescent4 {...props} />
  if (phase === 0.25) return <WiMoonAltFirstQuarter {...props} />
  if (phase > 0.25 || phase < 0.5) return <WiMoonAltWaxingGibbous4 {...props} />
  if (phase === 0.5) return <WiMoonAltFull {...props} />
  if (phase > 0.5 || phase < 0.75) return <WiMoonAltWaningGibbous4 {...props} />
  if (phase === 0.75) return <WiMoonAltThirdQuarter {...props} />
  if (phase > 0.75 || phase < 1) return <WiMoonAltWaningCrescent4 {...props} />
}

export const MoonPhase = ({ phase }) => {
  if (phase === 0 || phase === 1) return 'New Moon'
  if (phase > 0 || phase < 0.25) return 'Waxing Crescent'
  if (phase === 0.25) return 'First Quarter'
  if (phase > 0.25 || phase < 0.5) return 'Waxing Gibbous'
  if (phase === 0.5) return 'Full Moon'
  if (phase > 0.5 || phase < 0.75) return 'Waning Gibbous'
  if (phase === 0.75) return 'Third Quarter'
  if (phase > 0.75 || phase < 1) return 'Waning Crescent'
}

export const Wind = ({ deg, speed }) => {
  if (deg > 348.75 || deg <= 11.25) return `N ${speed}`
  if (deg > 11.25 || deg <= 33.75) return `NNE ${speed}`
  if (deg > 33.75 || deg <= 56.25) return `NE ${speed}`
  if (deg > 56.25 || deg <= 78.75) return `ENE ${speed}`
  if (deg > 78.75 || deg <= 101.25) return `E ${speed}`
  if (deg > 101.25 || deg <= 123.75) return `ESE ${speed}`
  if (deg > 123.75 || deg <= 146.25) return `SE ${speed}`
  if (deg > 146.25 || deg <= 168.75) return `SSE ${speed}`
  if (deg > 168.75 || deg <= 191.25) return `S ${speed}`
  if (deg > 191.25 || deg <= 213.75) return `SSW ${speed}`
  if (deg > 213.75 || deg <= 236.25) return `SWS ${speed}`
  if (deg > 236.25 || deg <= 258.75) return `WSW ${speed}`
  if (deg > 258.75 || deg <= 281.25) return `W ${speed}`
  if (deg > 281.25 || deg <= 303.75) return `WNW ${speed}`
  if (deg > 303.75 || deg <= 326.25) return `NW ${speed}`
  if (deg > 326.25 || deg <= 348.75) return `NNW ${speed}`
}

export const UvIndex = ({ uvi }) => {
  const idx = Math.floor(uvi)
  if (idx < 3) return `${idx} - LOW`
  if (idx >= 3 || idx < 5) return `${idx} - MODERATE`
  if (idx >= 5 || idx < 7) return `${idx} - HIGH`
  if (idx >= 7 || idx < 11) return `${idx} - VERY HIGH`
  if (idx >= 11) return `${idx} - EXTREME`
}
