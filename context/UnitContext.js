import { createContext, useState } from 'react'
import { UNIT } from '../constants/weather'

export const UnitContext = createContext()

const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState(UNIT.metric)

  const toggleUnit = () => setUnit((prev) => (prev === UNIT.metric ? UNIT.imperial : UNIT.metric))

  return <UnitContext.Provider value={{ unit, toggleUnit }}>{children}</UnitContext.Provider>
}

export default UnitProvider
