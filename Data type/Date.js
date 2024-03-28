//  Date and Time  :-    https://www.w3schools.com/jsref/jsref_obj_date.asp

// Creation :-  To create a new Date object call new Date()

// 1. Today Date
// let date = new Date();
// console.log(date, "Today's Date");

// console.log(date.getFullYear(), "FUll  Year"); // returns the full year (4 digits)
// console.log(date.getYear(), "Year");  // returns the year (2 digits)
// console.log(date.getMonth(), "Month");    //returns the month (0-11)
// console.log(date.getDate(), "Date");         // returns the day of the month
// console.log(date.getDay(), "Day");        // returns the weekday for the day (0-6)
// console.log(date.getHours(), "Hour");       // returns the hour (0-23)
// console.log(date.getMinutes(), "Minute");   // returns the minutes (0-59)
// console.log(date.getSeconds(), "Second");     // returns the seconds (0-59)
// console.log(date.getMilliseconds(), "Milli Second");  // returns the milliseconds (0-999)
// console.log(date.getTime(), "Time");           // returns time in milliseconds since January  1, 1970 00:00:00 UTC
// console.log(date.getTimezoneOffset(), "Time Zone Difference from UTC in minutes");


// // 2. Zero day date -: 1 jan 1070 00:00:00
// const zeroDayDate = new Date(0);
// console.log(date, "zeroDayDate");



// Setting date components


/*
    setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/

// let setDate = new Date();
// setDate.setFullYear(1999);      // sets the year to  1999
// setDate.setMonth(11);           // sets the month to Nov
// setDate.setDate(27);            // Sets the date to 27
// setDate.setHours(9);                 // Set Hour
// setDate.setMinutes(35);              // Set Minute
// console.log("Set Date", setDate);


// Autocorrection :-     If you try setting an invalid value for a component, JavaScript will automatically correct it to a valid value

// let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
// console.log(date);

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);
// console.log(date);

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);
// console.log(date); // shows the correct date



// Date.now() :-     returns a number representing the current time in milliseconds since January 1, 1970.
// let now = Date.now();
// console.log('Now: ', now);


//  Date.parse from a string
/*
The method Date.parse(str) can read a date from a string.
The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:
YYYY-MM-DD – is the date: year-month-day.
The character "T" is used as the delimiter.
HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.
Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.
The call to Date.parse(str) parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the format is invalid, returns NaN.
*/


// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
// console.log(ms); // 1327611110417  (timestamp)

// let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
// console.log(date);