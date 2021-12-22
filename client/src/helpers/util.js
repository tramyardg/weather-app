export const getWeatherCode = (weatherCodes, code) => {
    if (weatherCodes.length) {
        return weatherCodes.filter(w => w.code === code)[0];
    } else {
        return null;
    }

}

export const getDayOfWeek = (idx) => {
    // https://day.js.org/docs/en/get-set/day
    // 0 (Sunday) to 6 (Saturday)
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].at(idx);
}

export const roundUpTemp = (temp) => {
    return temp < 0 ? Math.floor(temp) : Math.ceil(temp);
}