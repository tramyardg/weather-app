import dayjs from "dayjs";
import React from "react";
import { getDayOfWeek, getWeatherCode, roundUpTemp } from "../helpers/util";

export const Forecast = ({ weatherCodes, currentDayForecast, fourDayForecast }) => {
    console.log(currentDayForecast, fourDayForecast);

    const getDayISOstring = (startTime) => getDayOfWeek(dayjs(startTime).day());    

    return (
        <>
            {(currentDayForecast && fourDayForecast) && (
                <div className="forecast">
                    <div className="current">
                        <p className="">Today</p>
                        <div className="info">
                            <img src={getWeatherCode(weatherCodes, currentDayForecast.weatherCode).img} alt="weather icon" />
                            <div className="degree-celcius">
                                <span className="celcius">{roundUpTemp(currentDayForecast.temperature)}<span>&#176;</span></span>
                                <span className="code-name">{getWeatherCode(weatherCodes, currentDayForecast.weatherCode).name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="four-day">
                        {(fourDayForecast.length && weatherCodes) &&
                            fourDayForecast.map((item, i) =>
                                <div className="col" key={i}>
                                    <p>{getDayISOstring(item.startTime)}</p>
                                    <img src={getWeatherCode(weatherCodes, item.values.weatherCode).img} alt={getWeatherCode(weatherCodes, item.values.weatherCode).name} />
                                    <p className="celcius">{roundUpTemp(item.values.temperature)}<span>&#176;</span></p>
                                </div>
                            )}
                    </div>
                </div>
            )}
        </>
    );
};