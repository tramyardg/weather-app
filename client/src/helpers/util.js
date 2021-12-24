

export const getDayOfWeek = (idx) => {
    // https://day.js.org/docs/en/get-set/day
    // 0 (Sunday) to 6 (Saturday)
    const _days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return _days[idx];
}

export const addAnimationClass = (ele, addAnimationClass) => {
    ele.add('animate__animated');
    ele.add(addAnimationClass);
}

export const removeAnimationClass = (ele, removeAnimationClass) => {
    ele.remove('animate__animated');
    ele.remove(removeAnimationClass);
}