let date = new Date();
console.log(date);

//date method
//its use for readable format
console.log(date.toDateString());

//ISO format
const dat  = new Date("2024-02-25");
console.log(dat);

//short date
// const d = new Date("03/02/2022");
// console.log(d)

// long dates
const d = new Date("mar 24 2022");
console.log(d)

// date method get date
getFullYear()	   //Get year as a four digit number (yyyy)
getMonth()         //Get month as a number (0-11)
getDate()	       //Get day as a number (1-31)
getDay()	       //Get weekday as a number (0-6)
getHours()	       //Get hour (0-23)
getMinutes()	   //Get minute (0-59)
getSeconds()	   //Get second (0-59)
getMilliseconds()  //Get millisecond (0-999)
getTime()	       //Get time (milliseconds since January 1, 1970)


// set method
setDate()	      //Set the day as a number (1-31)
setFullYear()	      //Set the year (optionally month and day)
setHours()	      //Set the hour (0-23)
setMilliseconds()	      //Set the milliseconds (0-999)
setMinutes()	      //Set the minutes (0-59)
setMonth()	      //Set the month (0-11)
setSeconds()	      //Set the seconds (0-59)
setTime()	      //Set the time (milliseconds since January 1, 1970)
