import React, { useState } from 'react';

type WeatherInfo = {
  temperature: string;
  humidity: string;
  windSpeed: string;
};

type CityWeatherData = {
  [city: string]: WeatherInfo;
};

const mockWeatherData: CityWeatherData = {
  'New York': {
    temperature: '22°C',
    humidity: '56%',
    windSpeed: '15 km/h'
  },
  'Los Angeles': {
    temperature: '27°C',
    humidity: '45%',
    windSpeed: '10 km/h',
  },
  'London': {
    temperature: '15°C',
    humidity: '70%',
    windSpeed: '20 km/h'
  },
};

type HistoryButtonProps = {
  cityName: string;
  onCityClick: (cityName: string) => void;
};

function HistoryButton({ cityName, onCityClick }: HistoryButtonProps) {
  return (
    <button key={cityName} id="cityButton" onClick={() => onCityClick(cityName)}>
      {cityName}
    </button>
  );
}

function WeatherDashboard() {
  const [searchCityName, setSearchCityName] = useState<string>('');
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState<WeatherInfo | 'not found' | null>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearch = () => {
    const cityWeatherData = mockWeatherData[searchCityName];

    if (cityWeatherData) {
      setCurrentWeatherInfo(cityWeatherData);
      if (!searchHistory.includes(searchCityName)) {
        setSearchHistory([...searchHistory, searchCityName]);
      }
    } else {
      setCurrentWeatherInfo('not found');
    }

    setSearchCityName('');
  };

  const handleCityClick = (cityName: string) => {
    setCurrentWeatherInfo(mockWeatherData[cityName]);
  };

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        value={searchCityName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchCityName(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>Search</button>
      
      <div id="previousSearches">
        {searchHistory.map(cityName => (
          <HistoryButton key={cityName} cityName={cityName} onCityClick={handleCityClick} />
        ))}
      </div>
      
      <div id="weatherData">
        {currentWeatherInfo === 'not found' ? (
          <div>City not found.</div>
        ) : currentWeatherInfo && (
          <>
            <div>Temperature: {currentWeatherInfo.temperature}</div>
            <div>Humidity: {currentWeatherInfo.humidity}</div>
            <div>Wind Speed: {currentWeatherInfo.windSpeed}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherDashboard;
