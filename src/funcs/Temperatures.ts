/**
 * Temperatures utility class for converting temperatures.
 */
export default class Temperatures {
  static celsiusToFahrenheit(celsius: number) {
    let fahrenheit = (celsius * 9 / 5) + 32;

    return fahrenheit;
  }

  static celsiusToKelvin(celsius: number) {
    let kelvin = celsius + 273.15;

    return kelvin;
  }

  static fahrenheitToCelsius(fahrenheit: number) {
    let celsius = (fahrenheit - 32) * 5 / 9;

    return celsius;
  }
}
