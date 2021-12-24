import PropTypes from 'prop-types';
import ForecastCurrent from "./ForecastCurrent";
import ForecastFourDay from "./ForecastFourDay";

function Forecast({ weatherCodes, currentDayForecast, fourDayForecast }) {
    // console.log(currentDayForecast, fourDayForecast);

    return (
        <>
            {(currentDayForecast && fourDayForecast) && (
                <div className="forecast">
                    <ForecastCurrent weatherCodes={weatherCodes} currentDayForecast={currentDayForecast} />
                    <ForecastFourDay weatherCodes={weatherCodes} fourDayForecast={fourDayForecast} />
                </div>
            )}
        </>
    );
};

Forecast.propTypes = {
    weatherCodes: PropTypes.array,
    currentDayForecast: PropTypes.object,
    fourDayForecast: PropTypes.array
}

export default Forecast;