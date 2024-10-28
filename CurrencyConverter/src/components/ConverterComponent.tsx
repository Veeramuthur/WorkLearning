// ConverterComponent.tsx
import React, { useState } from 'react';
import { CurrencyConverter } from '../utils/CurrencyConverter.ts';

const ConverterComponent: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [newRateCurrency, setNewRateCurrency] = useState<string>('USD');
  const [newRate, setNewRate] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const handleConvert = () => {
    try {
      const result = CurrencyConverter.convert(amount, fromCurrency, toCurrency);
      setConvertedAmount(result);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const handleUpdateExchangeRate = () => {
    try {
      CurrencyConverter.setExchangeRate(newRateCurrency, newRate);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const conversionHistory = CurrencyConverter.getConversionHistory();

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <label>
          From:
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
          </select>
        </label>
        <label>
          To:
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
          </select>
        </label>
        <button onClick={handleConvert}>Convert</button>
      </div>
      {convertedAmount !== null && (
        <h3>Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}</h3>
      )}

      <h3>Update Exchange Rate</h3>
      <div>
        <label>
          Currency:
          <select value={newRateCurrency} onChange={(e) => setNewRateCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
          </select>
        </label>
        <label>
          New Rate:
          <input
            type="number"
            value={newRate}
            onChange={(e) => setNewRate(Number(e.target.value))}
          />
        </label>
        <button onClick={handleUpdateExchangeRate}>Update Rate</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h3>Conversion History</h3>
      <ul>
        {conversionHistory.slice(-5).map((record, index) => (
          <li key={index}>
            {record.amount} {record.originalCurrency} → {record.result.toFixed(2)} {record.targetCurrency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConverterComponent;
