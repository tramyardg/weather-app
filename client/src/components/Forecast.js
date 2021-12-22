import React from "react";

export const Forecast = ({ weatherCodes }) => {

    return (
        <>
            <div className="forecast">
                <div className="current">
                    <p>Today</p>
                    <div className="info">
                        <img src={weatherCodes[1].img} alt="weather icon" />
                        <div className="degree-celcius">
                            <span className="celcius">19<span>&#176;</span></span>
                            <span className="code-name">Cloudy</span>
                        </div>
                    </div>
                </div>
                <div className="four-day">
                    <div className="col">
                        <p>Today</p>
                        <img src={weatherCodes[1].img} alt="weather icon" />
                        <p className="celcius">19<span>&#176;</span></p>
                    </div>
                    <div className="col">
                        <p>Today</p>
                    </div>
                    <div className="col">
                        <p>Today</p>
                    </div>
                    <div className="col">
                        <p>Today</p>
                    </div>
                </div>
            </div>
        </>
    );
};