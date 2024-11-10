import React, { useState, useEffect } from 'react';

function CT_Weatherdashboard() {
  const [city, setCity] = useState('');            // Holds the city input value
  const [weatherData, setWeatherData] = useState(null);  // Stores fetched weather data
  const [finalCity, setFinalCity] = useState('');   // Tracks when to trigger fetch
  const [error, setError] = useState(null);         // Tracks fetch errors

  // Function to fetch weather data
  const fetchData = async () => {
    if (!finalCity) return; // Don't fetch if finalCity is empty
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${finalCity}&appid=3b218b3f4f646a0a2cd13799d13b6e2e&units=metric`

      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeatherData(data);       // Store the fetched data
      setError(null);             // Clear any previous errors
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);       // Clear data if fetch fails
      setError(error.message);    // Set error message
    }
  };

  // useEffect to fetch data whenever finalCity changes
  useEffect(() => {
    fetchData();
  }, [finalCity]);

  // Handle button click to set finalCity, triggering useEffect
  const handleButtonClick = () => {
    setFinalCity(city); // Set finalCity, which triggers useEffect
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Weather Dashboard</h1>
      
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '10px',
        }}
      />
      <button onClick={handleButtonClick} style={{ padding: '10px', fontSize: '16px', width: '100%' }}>
        Get Weather
      </button>

      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : weatherData ? (
        <div style={{ marginTop: '20px' }}>
          <p>Temperature: {weatherData.main?.temp ?? 'N/A'} °C</p>
          <p>Humidity: {weatherData.main?.humidity ?? 'N/A'}%</p>
          <p>Wind Speed: {weatherData.wind?.speed ?? 'N/A'} m/s</p>
        </div>
      ) : (
        <p style={{ marginTop: '20px' }}>No weather data available. Enter a city and click "Get Weather".</p>
      )}
    </div>
  );
}

export default CT_Weatherdashboard;
