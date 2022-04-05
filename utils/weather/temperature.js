export const convertKelvin = (kelvin) => {
  const celsius = kelvin - 273.15
  const fahrenheit = kelvin * (9 / 5) - 459.67
  return { kelvin, celsius, fahrenheit }
}

export const convertCelsius = (celsius) => {
  const kelvin = celsius + 273.15
  const fahrenheit = celsius * (9 / 5) + 32
  return { kelvin, celsius, fahrenheit }
}

export const convertFahrenheit = (fahrenheit) => {
  const kelvin = (fahrenheit + 459.67) * (5 / 9)
  const celsius = (fahrenheit - 32) * (5 / 9)
  return { kelvin, celsius, fahrenheit }
}
