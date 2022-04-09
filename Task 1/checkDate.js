function checkDate(timestamp) {
    const date = new Date(timestamp);
    const currentDate = new Date(Date.now());

    return {
        isSameDate: date.getTime() === currentDate.getTime(),
        dayPeriod: date.getHours() > 11 ? 'pm' : 'am',
    };
}
