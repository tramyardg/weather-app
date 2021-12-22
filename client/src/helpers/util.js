export const getDayOfWeek = (idx) => {
    // https://day.js.org/docs/en/get-set/day
    // 0 (Sunday) to 6 (Saturday)
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].at(idx);
}