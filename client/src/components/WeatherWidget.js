import React from "react";

export const WeatherWidget = ({ children, cities, weatherCodes, currentDayForecast, fourDayForecast, handleClickCity }) => {

    return (
        <>
            <div className="weather-app">
                <div className="weather-widget">
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, { cities, weatherCodes, currentDayForecast, fourDayForecast, handleClickCity });
                        }
                        return child;
                    })}
                </div>
            </div>
        </>
    );
};

