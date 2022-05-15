import { useContext, useEffect, useState } from 'react'
import cityContext, { CityProvider } from '../CityContext'
import WeatherCard from './WeatherCard'
import axios from 'axios';

export default  function WeatherContainer(){
    const [weather,setWeather]=useState("");
    const {city}  = useContext(cityContext)
    const key = "895284fb2d2c50a520ea537456963d9c"

    const getWeatherData=async (lat,lon)=>{
        try {
          const {data}=await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&lang=tr&appid=${key}`);
          
          setWeather(data);
        } catch (err) {
          setWeather({err:"veri alınırken hata oluştu"});
        }
    }
    
    useEffect(() =>  {
          getWeatherData(city.latitude,city.longitude);
    }, [city])
    

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
    const d = new Date();

    return (
        weather !== ""?
        <div className="weather-container row mt-5 justify-content-center">
          {
           
            weather.daily.map( (weatherItem,index) =>{
              
              return <WeatherCard weekDay={ weekday[d.getDay() + index] } key={index} weather={weatherItem} />
            })
          }
        </div>
        :"Loading..."       
    )
} 