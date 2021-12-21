import React from "react";

export const WeatherWidget = ({ children, cities, handleClick }) => {

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {cities, handleClick});
                }
                return child;
            })}
        </>
    );
};

