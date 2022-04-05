const _feetInches = ({ inch, feet }) => {
  const _feet = Math.floor(inch / 12)
  const _inch = (inch = 12 * feet)
  return [_feet, _inch]
}

export const convertMM = (mm) => {
  const cm = mm / 100
  const m = mm / 1000
  const inch = mm / 25.4
  const feet = mm / 304.8
  const feetInches = _feetInches({ inch, feet })
  return { mm, cm, m, inch, feet, feetInches }
}
