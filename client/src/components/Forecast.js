import dayjs from "dayjs";
import React from "react";
import { getDayOfWeek } from "../helpers/util";

export const Forecast = ({ weatherCodes, currentDayForecast, fourDayForecast }) => {
    // console.log(currentDayForecast, fourDayForecast);

    const getDayISOstring = (startTime) => getDayOfWeek(dayjs(startTime).day());    

    return (
        <>
            {(currentDayForecast && fourDayForecast) && (
                <div className="forecast">
                    <div className="current">
                        <p data-datetoday={currentDayForecast.startTime}>Today</p>
                        <div className="info">
                            <img 
                                className="weather-icon" 
                                src={weatherCodes.filter(w => w.code === currentDayForecast.values.weatherCode)[0]["img"]} 
                                alt={weatherCodes.filter(w => w.code === currentDayForecast.values.weatherCode)[0]["name"]} 
                            />
                            <div className="degree-celcius">
                                <span className="celcius">
                                    {Math.round(currentDayForecast.values.temperature)}<span>&#176;</span>
                                </span>
                                <span className="code-name">
                                    {weatherCodes.filter(w => w.code === currentDayForecast.values.weatherCode)[0]["name"]}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="four-day">
                        {(fourDayForecast.length && weatherCodes) &&
                            fourDayForecast.map((item, i) =>
                                <div className="col" key={i} data-date={item.startTime}>
                                    <p>{getDayISOstring(item.startTime)}</p>
                                    <img 
                                        src={weatherCodes.filter(w => w.code === item.values.weatherCode)[0]["img"]} 
                                        alt={weatherCodes.filter(w => w.code === item.values.weatherCode)[0]["name"]} 
                                    />
                                    <p className="celcius">
                                        {Math.round(item.values.temperature)}<span>&#176;</span>
                                    </p>
                                </div>
                            )}
                    </div>
                </div>
            )}
        </>
    );
};