import React from "react";

export const Cities = ({ cities, handleClick }) => {

    const handleActiveCity = (cityName) => {
        if (!document.querySelectorAll('button[data-city_name]')) {
            return;
        }
        console.log(cityName);
        document.querySelectorAll('button[data-city_name]').forEach(e => {
            const datasetCityName = e.dataset.city_name;
            datasetCityName === cityName ? e.classList.add('active') : e.classList.remove('active');
        });
    }


    return (
        <>
            <div className="city-wrapper">
                {cities.map((item, i) =>
                    <button
                        key={i}
                        onClick={() => { handleClick(item.coordinates); handleActiveCity(item.city_name); }}
                        data-city_name={item.city_name}
                        className={`${i === 0 ? 'city-btn active' : ' city-btn'}`}>
                        {item.city_name}
                    </button>
                )}
            </div>
        </>
    );
};