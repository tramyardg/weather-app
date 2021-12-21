import React from "react";

export const WeatherWidget = ({ children, cities }) => {

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {cities});
                }
                return child;
            })}
        </>
    );
};

