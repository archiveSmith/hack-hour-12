// Parse dates from questionable date strings.

// Your function will be a called with a string which represents a date and time.
// The provided string will be in one of the formats below. Your function must
// return a Date object with the same month, day of month, hour, and minute
// as in the provided string. The year for the returned date object should be
// the current year.

// Example strings:
// Thursday 12:37 PM
// Nov 19th 1:12 PM
// Mar 1st 6:09 PM
// Monday 5:33 PM
// Friday 7:04 PM
// Today 2:01 PM

// - If the date string starts with a day of week (e.g. Monday) then it's the last occurence
//   that day of the week BEFORE today (e.g. if today is Wednesday and the string
//   'Wednesday 12:37 PM' is passed in, then the date you return should be 7 days ago,
//   the last time Wednesday occurred before today.)
// - If the date string starts with a month (e.g. Nov, Sep) assume that it's for this year.
//   Month abbreviations will always be the first 3 letters of the month name with
//   the first letter capitalized.
// - If a string is passed in which does not conform to any of the rules above, then
//   you should simply return a Date object for the current time.

// Example input, assuming the current Date is Thursday December 17, 2015:
// parseDates('Jan 12th 1:09 AM')  => returns new Date object representing 'Mon Jan 12 2015 01:09:00 GMT-0800 (PST)'
// parseDates('Today 8:15 PM')     => returns new Date object representing 'Thu Dec 17 2015 20:15:00 GMT-0800 (PST)'
// parseDates('Sunday 12:59 PM')   => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'

// parseDates('Jan 1st')
// parseDates('hello')
// parseDates('Today 2 PM')        => invalid formats, so all return Date object for today at the current time: 'Thu Dec 17 2015 11:31:00 GMT-0800 (PST)'

// FAQ:
// - seconds / milliseconds of the returned Date object do not matter
// - you can assume the provided day of month will be valid if it's a month string
//   (i.e. the function will not be called with 'Jul 84th 1:00 PM') since that's not a real date
// - if any part of the date string is missing then you can consider it an invalid date

function getHour(hour, ampm) {
   return ampm === 'AM' ? hour === '12' ? 0 : hour : hour === '12' ? 12 : +hour + 12;
}

function parseDates(str) {
  //console.log(str);
  let date;
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  reMonDstHhMm = /^(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)\s(\d*)..\s(\d*)\:(\d*)\s(..)$/i;
  reDayHhMm    = /^(Today|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\s(\d*)\:(\d*)\s(..)$/i;
  let parsed = [];

  if(parsed = str.match(reMonDstHhMm)) {
    //console.log('Mon',parsed[1],'Date',parsed[2],'H',parsed[3],'M', parsed[4], 'ND', parsed[5]);
    let month = months.indexOf(parsed[1].toUpperCase());
    let hour  = getHour(parsed[3],parsed[5]);
    date = new Date(2017, month, parsed[2], hour, parsed[4]);
    return date.toString(date.toLocaleDateString());
  } else if (parsed = str.match(reDayHhMm)){
      let hour  = getHour(parsed[2],parsed[4]);
      let dayDiff = 0;
      //console.log('Day',parsed[1],'H',hour,'M', parsed[3], 'ND', parsed[4]);
      const today = new Date();
      date = new Date(today.getYear() + 1900, today.getMonth(), today.getDate(), hour, parsed[3]);

      if(parsed[1] !== 'Today') {
        const todayDoW = date.getDay();
        const passedDoW = days.indexOf(parsed[1]);

        dayDiff = passedDoW < todayDoW ? todayDoW - passedDoW :
                      passedDoW > todayDoW ? (7 + todayDoW) - passedDoW : 7;
        //console.log('diff',dayDiff,'today',date.getDay(),'passed',passedDoW);
      }

      date.setDate(date.getDate() - dayDiff);
      return date.toString(date.toLocaleDateString());
  } else {
    return new Date;
  }

}

console.log(parseDates('Aug 12th 1:09 PM')) // => returns new Date object representing 'Mon Jan 12 2015 01:09:00 GMT-0800 (PST)'
console.log(parseDates('Today 8:15 PM'))   //  => returns new Date object representing 'Thu Dec 17 2015 20:15:00 GMT-0800 (PST)'
console.log(parseDates('Sunday 12:59 PM')) //  => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'
console.log(parseDates('Saturday 12:59 PM')) //  => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'
console.log(parseDates('Friday 12:59 PM')) //  => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'
console.log(parseDates('Thursday 12:59 PM')) //  => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'
console.log(parseDates('Wednesday 1:59 PM')) //  => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'
console.log(parseDates('Tuesday 12:59 PM')) //  => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'
console.log(parseDates('Monday 12:59 AM')) //  => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'


module.exports = parseDates;
