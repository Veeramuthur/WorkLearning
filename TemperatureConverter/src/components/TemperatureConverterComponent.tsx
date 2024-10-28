// TemperatureConverterComponent.tsx

import React, { useState } from 'react';
import { TemperatureConverter } from '../utils/TemperatureConverter'; // Import TemperatureConverter from '../utils/TemperatureConverter';

interface ConversionRecord {
  amount: number;
  originalUnit: string;
  targetUnit: string;
  result: number;
}

const TemperatureConverterComponent: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [originalUnit, setOriginalUnit] = useState<string>('C');
  const [targetUnit, setTargetUnit] = useState<string>('F');
  const [convertedResult, setConvertedResult] = useState<number | null>(null);
  const [history, setHistory] = useState<ConversionRecord[]>([]);

  const handleConvert = () => {
    let result: number;

    try {
      if (targetUnit === 'C') {
        result = TemperatureConverter.convertToCelsius(amount, originalUnit);
      } else if (targetUnit === 'F') {
        result = TemperatureConverter.convertToFahrenheit(amount, originalUnit);
      } else if (targetUnit === 'K') {
        result = TemperatureConverter.convertToKelvin(amount, originalUnit);
      } else {
        throw new Error('Invalid target unit');
      }

      // Update result
      setConvertedResult(result);

      // Update conversion history
      const newRecord = { amount, originalUnit, targetUnit, result };
      setHistory((prevHistory) => {
        const updatedHistory = [...prevHistory, newRecord];
        if (updatedHistory.length > 5) {
          updatedHistory.shift(); // Keep only the last 5 records
        }
        return updatedHistory;
      });
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <div>
        <label>
          Temperature:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <label>
          From:
          <select value={originalUnit} onChange={(e) => setOriginalUnit(e.target.value)}>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
            <option value="K">Kelvin</option>
          </select>
        </label>
        <label>
          To:
          <select value={targetUnit} onChange={(e) => setTargetUnit(e.target.value)}>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
            <option value="K">Kelvin</option>
          </select>
        </label>
        <button onClick={handleConvert}>Convert</button>
      </div>

      {convertedResult !== null && (
        <h3>
          Converted Result: {convertedResult.toFixed(2)}°{targetUnit}
        </h3>
      )}

      <h3>Conversion History</h3>
      <ul>
        {history.map((record, index) => (
          <li key={index}>
            {record.amount}°{record.originalUnit} → {record.result.toFixed(2)}°{record.targetUnit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemperatureConverterComponent;
