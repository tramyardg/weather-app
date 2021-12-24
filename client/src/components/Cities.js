import PropTypes from 'prop-types';
import React, { useState } from "react";
import { addAnimationClass, removeAnimationClass } from '../helpers/util';

function Cities({ cities, currentCity, handleClickCity }) {

    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    const handleActiveCity = (cityName) => {
        if (!document.querySelectorAll('button[data-city_name]')) return;
        document.querySelectorAll('button[data-city_name]').forEach(e => e.dataset.city_name === cityName ? e.classList.add('active') : e.classList.remove('active'));

        animateForcastBox();
    }

    const animateForcastBox = () => {
        if (!document.querySelector('.weather-icon') &&
            !document.querySelector('.degree-celcius') &&
            !document.querySelector('.four-day')) {
            return;
        }

        const weatherIconClassList = document.querySelector('.weather-icon').classList;
        const degreeCelciusClassList = document.querySelector('.degree-celcius').classList;
        const fourDayClassList = document.querySelector('.four-day').classList;
        addAnimationClass(weatherIconClassList, 'animate__slideInLeft');
        addAnimationClass(degreeCelciusClassList, 'animate__slideInRight');
        addAnimationClass(fourDayClassList, 'animate__fadeIn');

        setTimeout(function () {
            removeAnimationClass(weatherIconClassList, 'animate__slideInLeft');
            removeAnimationClass(degreeCelciusClassList, 'animate__slideInRight');
            removeAnimationClass(fourDayClassList, 'animate__fadeIn');
        }, 1000);

    }

    const handleClickMobileMenu = () => {
        setIsMobileMenuActive(!isMobileMenuActive);
    }

    return (
        <>
            {cities.length && (
                <>
                    <div className="mobile-menu">
                        <svg onClick={handleClickMobileMenu} fill={`${isMobileMenuActive ? '#5FB0E8' : '#494A50'}`} viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="20" rx="8"></rect>
                            <rect y="30" width="100" height="20" rx="8"></rect>
                            <rect y="60" width="100" height="20" rx="8"></rect>
                        </svg>
                    </div>
                    <div className={`city-wrapper ${isMobileMenuActive ? 'active animate__animated animate__fadeInDown' : ''}`}>
                        {cities.map((item, i) =>
                            <button
                                key={i}
                                onClick={() => { handleClickCity(item.coordinates); handleActiveCity(item.city_name); }}
                                data-city_name={item.city_name}
                                className={`${currentCity.coordinates === item.coordinates ? 'city-btn active' : ' city-btn'}`}>
                                {item.city_name}
                            </button>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

Cities.propTypes = {
    cities: PropTypes.array,
    currentCity: PropTypes.object,
    handleClickCity: PropTypes.func
}

export default Cities;