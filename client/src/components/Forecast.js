import { ForecastCurrent } from "./ForecastCurrent";
import { ForecastFourDay } from "./ForecastFourDay";

export const Forecast = ({ weatherCodes, currentDayForecast, fourDayForecast }) => {
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