// CurrencyConverterBase.ts

export class CurrencyConverterBase {
    protected static exchangeRates: Record<string, number> = {
      USD: 1,     // Base currency
      EUR: 0.85,
      GBP: 0.75,
      JPY: 110,
      INR: 74,
    };
  
    // Method to set or update the exchange rate for a specific currency
    static setExchangeRate(currency: string, rate: number): void {
      if (rate > 0) {
        this.exchangeRates[currency] = rate;
      } else {
        throw new Error("Exchange rate must be positive.");
      }
    }
  
    // Method to get the exchange rate for a specific currency
    static getExchangeRate(currency: string): number {
      return this.exchangeRates[currency];
    }
  }
  