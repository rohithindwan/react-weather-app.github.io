import React from 'react'
import styled from 'styled-components'
const WeatherIcon=styled.img`
width: 140px;
height: 140px;
margin: 4px auto;
`;
const ChooseCityLable=styled.span`
color:black;
font-size:18px;
font-weight:bold;
magin: 10px auto;
`;

const SearchBox=styled.form`
display:flex;
  flex-direction:row;
  border:black solid 1px;
  border-radius: 2px;
  color:black;
  font-size:18px;
  font-weight:bold;
  margin: 10px auto;
  & input{
    padding: 10px;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold;
  }
  & button{
    padding: 10px;
    background-color: black;
    color:white;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold;
    cursor: pointer;

  }
`;

export default function CityComponent(props) {
  const {setCity,fetchWeather}=props;
  return (
    <>
    <WeatherIcon src='/icon/cloudy.png' alt='pick'></WeatherIcon>
    <ChooseCityLable>find Weather of your City</ChooseCityLable>
    <SearchBox onSubmit={fetchWeather}>
      <input placeholder='city'
      onChange={(e)=>setCity(e.target.value)}/>
      <button type='submit'>Search</button>
    </SearchBox>
    </>
  )
}
