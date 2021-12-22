import dayjs from "dayjs";
import { getDayOfWeek } from "../helpers/util";

export const ForecastFourDay = ({ fourDayForecast, weatherCodes }) => {

    const getDayISOstring = (startTime) => getDayOfWeek(dayjs(startTime).day());

    return (
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
    )
}