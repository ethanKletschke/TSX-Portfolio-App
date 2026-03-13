/**
 * Temperatures utility class for converting temperatures.
 */
export default class Temperatures {
  static celsiusToFahrenheit(celsius: number) {
    let fahrenheit = (celsius * 9 / 5) + 32;

    return fahrenheit;
  }
}
