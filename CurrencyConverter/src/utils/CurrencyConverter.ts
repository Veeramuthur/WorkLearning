// CurrencyConverter.ts
import { CurrencyConverterBase } from './CurrencyConverterBase';

interface ConversionRecord {
  amount: number;
  originalCurrency: string;
  targetCurrency: string;
  result: number;
}

export class CurrencyConverter extends CurrencyConverterBase {
  private static conversionHistory: ConversionRecord[] = [];

  // Convert from one currency to another based on the static exchange rates
  static convert(amount: number, fromCurrency: string, toCurrency: string): number {
    const fromRate = this.getExchangeRate(fromCurrency);
    const toRate = this.getExchangeRate(toCurrency);
    const result = (amount / fromRate) * toRate;

    // Record the conversion in history
    this.addToHistory({ amount, originalCurrency: fromCurrency, targetCurrency: toCurrency, result });
    return result;
  }

  // Store the last 5 conversions in the history
  private static addToHistory(record: ConversionRecord): void {
    this.conversionHistory.push(record);
    if (this.conversionHistory.length > 5) {
      this.conversionHistory.shift(); // Keep only the last 5 entries
    }
  }

  // Retrieve the conversion history
  static getConversionHistory(): ConversionRecord[] {
    return this.conversionHistory;
  }
}
