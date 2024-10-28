
export class TemperatureConverterbase {
    protected static validUnits = ['C','K','F'];

    // check if Units is Valid
    protected static isValidUnit(unit: string): boolean {
        return this.validUnits.includes(unit);
      }

   }