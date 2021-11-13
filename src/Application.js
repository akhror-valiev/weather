import React from 'react';
import { useState } from 'react';
import { fetchWeatherInfo } from './api/fetchWeatherInfo';

const Application = () => {


    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState({})


    const search = async(e)=>{
        if (e.key === "Enter"){
            const data = await fetchWeatherInfo(query)
            setWeather(data)
            setQuery()
            console.log(data);
        }
    }

    return (
        <div className="main-container">
            <div className="search">
                <input type="text" className="search" placeholder="Search..."
                value={query} 
                onChange={(e)=>setQuery(e.target.value)}
                onKeyPress={search}
                 />
            </div>
            {weather.main && (
                <div className="city">
                    <div className="info">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"/>
                    </div>
                    <div className="details">
                        <h2 className="city-name">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>

                        </h2>
                        <div className="city-temp">
                            {Math.round((weather.main.temp - 32) /1.8)}
                            <sup>&deg;C</sup>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default Application;
