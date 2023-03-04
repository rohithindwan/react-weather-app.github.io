import './App.css';
import CityComponent from './module/CityComponent';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import WeatherComponent from './module/WeatherInfoComponent';

const API_KEY="a4b94bc33c281bbc0a2cdf36113507b1";

const Container = styled.div`
display: flex;
flex-direction: column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background:white;
font-family: Montserrat;   
`;
const AppLabel =styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`;

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  
  const fetchWeather= async(e)=>{
    e.preventDefault();
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  const response =
  await axios.get(URL);
  setWeather(response.data)
  }
  return (
    <Container>
    <AppLabel>React Weather App</AppLabel>
    {city && weather ? (
      <WeatherComponent weather={weather} city={city} />
    ) : (
      <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
    )}
  </Container>
    
  );
}

export default App;
