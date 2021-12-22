export const ForecastCurrent = ({ weatherCodes, currentDayForecast }) => {

    return (
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
    )
}