import React from "react";

export const Cities = ({ cities, handleClickCity }) => {

    const handleActiveCity = (cityName) => {
        if (!document.querySelectorAll('button[data-city_name]')) {
            return;
        }
        document.querySelectorAll('button[data-city_name]').forEach(e => {
            const datasetCityName = e.dataset.city_name;
            if (datasetCityName === cityName) {
                e.classList.add('active')
                e.classList.add('animate__animated')
                e.classList.add('animate__pulse')
            } else {
                e.classList.remove('active');
                e.classList.remove('animate__animated')
                e.classList.remove('animate__pulse')
            }
        });
        animateForcastBox();
        
    }

    const animateForcastBox = () => {
        if (!document.querySelector('.forecast')) {
            return;
        }
        const forecastDiv = document.querySelector('.forecast');
        forecastDiv.classList.add('animate__animated')
        forecastDiv.classList.add('animate__slideInRight')

        setTimeout(function () {
            forecastDiv.classList.remove('animate__animated')
            forecastDiv.classList.remove('animate__slideInRight')
        }, 1000);
    }

    return (
        <>
            {cities.length && (
                <div className="city-wrapper">
                    {cities.map((item, i) =>
                        <button
                            key={i}
                            onClick={() => { handleClickCity(item.coordinates); handleActiveCity(item.city_name); }}
                            data-city_name={item.city_name}
                            className={`${i === 0 ? 'city-btn active' : ' city-btn'}`}>
                            {item.city_name}
                        </button>
                    )}
                </div>
            )}
        </>
    );
};