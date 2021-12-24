import React from "react";
import PropTypes from "prop-types";

function WeatherWidget({
    children,
    cities,
    weatherCodes,
    currentCity,
    currentDayForecast,
    fourDayForecast,
    handleClickCity
}) {

    return (
        <div className="weather-app">
            <div className="weather-widget">
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            cities,
                            weatherCodes,
                            currentCity,
                            currentDayForecast,
                            fourDayForecast,
                            handleClickCity
                        });
                    }
                    return child;
                })}
            </div>
        </div>
    );
};


WeatherWidget.propTypes = {
    children: PropTypes.node,
    cities: PropTypes.array,
    weatherCodes: PropTypes.array,
    currentCity: PropTypes.object,
    currentDayForecast: PropTypes.object,
    fourDayForecast: PropTypes.array,
    handleClickCity: PropTypes.func
}

export default WeatherWidget;
