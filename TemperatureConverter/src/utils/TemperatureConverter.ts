// TemperatureConverter.ts

export class TemperatureConverter {
    // Convert to Celsius from a specified unit
    static convertToCelsius(amount: number, unit: string): number {
      switch (unit) {
        case 'C':
          return amount;
        case 'F':
          return (amount - 32) * (5 / 9);
        case 'K':
          return amount - 273.15;
        default:
          throw new Error('Invalid unit for conversion to Celsius');
      }
    }
  
    // Convert to Fahrenheit from a specified unit
    static convertToFahrenheit(amount: number, unit: string): number {
      switch (unit) {
        case 'C':
          return (amount * 9) / 5 + 32;
        case 'F':
          return amount;
        case 'K':
          return (amount - 273.15) * (9 / 5) + 32;
        default:
          throw new Error('Invalid unit for conversion to Fahrenheit');
      }
    }
  
    // Convert to Kelvin from a specified unit
    static convertToKelvin(amount: number, unit: string): number {
      switch (unit) {
        case 'C':
          return amount + 273.15;
        case 'F':
          return (amount - 32) * (5 / 9) + 273.15;
        case 'K':
          return amount;
        default:
          throw new Error('Invalid unit for conversion to Kelvin');
      }
    }
  }
  