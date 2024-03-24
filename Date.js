let newDate = new Date();
let year = newDate.getFullYear();
let currentMonth = newDate.getMonth() + 1;

let currentDay = newDate.getDate();
let formattedYear = year.toString(); 
let formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth.toString();
let formattedDay = currentDay < 10 ? `0${currentDay}` : currentDay.toString();
let dateToday = formattedYear + "-" + formattedMonth + "-" + formattedDay; 
console.log(dateToday);
