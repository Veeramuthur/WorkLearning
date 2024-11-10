import { useEffect, useState } from 'react'

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

const Weatherdashboard = () => {

  const [city, setCity] = useState<string>('');
  const [weatherdata, setWeatherdata] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);




  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b218b3f4f646a0a2cd13799d13b6e2e`);
      const data = await response.json();
      console.log(data);
      setWeatherdata(data);
    } catch {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

    // Handle button click to set finalCity, triggering useEffect
    const handleButtonClick = () => {
      setCity(city); // Set finalCity, which triggers useEffect
    };


  return (
    <div>

      <h1>Weatherdashboard</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
       <button onClick={handleButtonClick}>Get Weather</button>
         
         {/* Generate button getweatherdata to fetchdata */}




      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherdata && (
        <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weatherdata.main?.temp ?? 'N/A'} °C</p>
          <p>Humidity: {weatherdata.main?.humidity ?? 'N/A'}%</p>
          <p>Wind Speed: {weatherdata.wind?.speed ?? 'N/A'} m/s</p>
        </div>
      )}


    </div>
  )
}

export default Weatherdashboard
