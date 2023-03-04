import React from "react";
import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/icon/temp.svg",
  sunrise: "/icon/sunny.svg",
  humidity: "/icon/humidity.svg",
  wind: "/icon/wind.svg",
  pressure: "/icon/pressure.svg",
};

// export const WeatherIcons={
//     "01d": "https://openweathermap.org/img/wn/01d@2x.png",
//     "01n":"https://openweathermap.org/img/wn/01n@2x.png",
//     "02d": "https://openweathermap.org/img/wn/02d@2x.png",
//     "02n": "https://openweathermap.org/img/wn/02n@2x.png",
//     "03d": "https://openweathermap.org/img/wn/03d@2x.png",
//     "03n": "https://openweathermap.org/img/wn/03n@2x.png",
//     "04d": "https://openweathermap.org/img/wn/04d@2x.png",
//     "04n": "https://openweathermap.org/img/wn/04n@2x.png",
//     "09d": "https://openweathermap.org/img/wn/09d@2x.png",
//     "09n": "https://openweathermap.org/img/wn/09n@2x.png",
//     "10d": "http://openweathermap.org/img/wn/10d@2x.png",
//     "10n": "https://openweathermap.org/img/wn/10n@2x.png",
//     "11d": "https://openweathermap.org/img/wn/11d@2x.png",
//     "11n": "https://openweathermap.org/img/wn/11n@2x.png",
// }
const WeatherConditon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 13px auto;
`;
const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;
const WeatherInfoLable = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;
const WeatherInfoContainer = styled.span`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLable = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLable>
        {value}
        <span>{name}</span>
      </InfoLable>
    </InfoContainer>
  );
};

export default function WeatherComponent(props) {
  const { weather } = props;
  const findDay = weather?.weather.icon?.include("d");

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
}

  return (
    <>
     <WeatherConditon>
        <Condition>
        <span>{`${Math.floor(weather?.main?.temp-273)}°C`}</span>|{` ${weather?.weather[0].description}`}
        </Condition>
        <WeatherIcon src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}/>
        {/* <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} alt="pic" /> */}
      </WeatherConditon>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoLable>weather info</WeatherInfoLable>

      <WeatherInfoContainer>
        <WeatherInfoComponent 
        name={findDay ? "sunset" : "sunrise"} 
        value={getTime(weather?.sys[findDay?"sunset" : "sunrise"])} />
        <WeatherInfoComponent name="humidity" value={`${weather?.main?.humidity}%`} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </WeatherInfoContainer>
    </>
  );
}


