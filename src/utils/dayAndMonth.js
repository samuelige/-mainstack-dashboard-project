const dayandmonth = (value) => {
    const date = new Date(value);
    return date.toLocaleString("en-US", {day: "numeric", month: "long"});
};

export {dayandmonth};
