function checkDate(timestamp) {
    // timestamp в секундах, поэтому переводим в ms
    const date = new Date(timestamp * 1000);
    // Использую UTC для унификации времени в случае, если временная зона отличается
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    
    const currentDate = new Date(Date.now());
    const currentDay = currentDate.getUTCDate();
    const currentMonth = currentDate.getUTCMonth();
    const currentYear = currentDate.getUTCFullYear();
    // Перенёс вычисления сразу в return для лаконичности и краткости
    return {
        isSameDate: year === currentYear && month === currentMonth && day === currentDay,
        dayPeriod: date.getUTCHours() > 11 ? 'pm' : 'am'
    };
}
