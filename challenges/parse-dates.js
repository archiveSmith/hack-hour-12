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

function parseDatesInProgress(str) {

  const dateArr = str.split(' ');
  const now = new Date();
  const nowDay = now.getDay();
  const dayMs = 1000 * 60 * 60 * 24;

  switch (dateArr[0]) {
    case 'Sunday': dateArr[0] = 7 - 0 + nowDay; break; // 2
    case 'Monday': dateArr[0] = 1; break; // 1
    case 'Tueday': dateArr[0] = 2; break; // 7
    case 'Wednesday': dateArr[0] = 3; break; // 6
    case 'Thursday': dateArr[0] = 4; break;
    case 'Friday': dateArr[0] = 5; break;
    case 'Saturday': dateArr[0] = 6; break;
    case 'Today': dateArr[0] = now.getMonth() + ' ' + now.getDate(); break;
    default: break;
  }

  const dateStr = dateArr.join(' ');


  let output = new Date();
  output.setTime(Date.parse(dateStr))
  return output;
}

function parseDates(str) {
  // INPUT: String containing date information, possibly poorly formatted
  // OUTPUT: Date object, NOT a string
  // Create store for days and months since Date object takes numerical inputs

  // DAYS object (previous slide)
  // MONTHS object (previous slide)
  
  // Create Date object to manipulate with "set" and "get" Date API
  const date = new Date();

  // Check if input is properly formatted. If not, return current date.
  if (!/^[a-zA-Z]{3,9}\s(\d{1,2}[a-z]{2}\s)?\d{1,2}:\d{2}\s(AM|PM)$/.test(str)) return date;

  // Split input by spaces to check which format we're dealing with and then extract data
  const sections = str.split(' ');

  // Create month, dayOfMonth, times, hour, minutes, and ampm variables to modify Date object
  let month, dayOfMonth, times, hour, minutes, ampm;

  // If given the today format like 'Today 2:01 PM'...
  if (sections[0] === 'Today') {
    times = sections[1].split(':');
    ampm = sections[2];
  }

  // If given the month format like 'Jan 12th 1:09 AM'...
  // PARSE MONTHS (next slide)

  // If given the day format like 'Thursday 12:37 PM'...
  // PARSE DAYS (next slide)

  // All formats have time data stored in times variable
  hour = Number(times[0]);
  minutes = Number(times[1]);
  
  // Midnight should be 0 instead of 12
  if (ampm === 'AM' && hour === 12) hour = 0;
  // Non-noon PM hours should increase by 12. Think military time.
  if (ampm === 'PM' && hour !== 12) hour += 12;
  
  // Mutate Date object with input's hour and minutes
  date.setHours(hour);
  date.setMinutes(minutes);
  return date;
}

// console.log(parseDates('Thursday 12:37 PM'));
// console.log(parseDates('Nov 19th 1:12 PM'));
// console.log(parseDates('Mar 1st 6:09 PM'));
// console.log(parseDates('Monday 5:33 PM'));
// console.log(parseDates('Friday 7:04 PM'));
// console.log(parseDates('Today 2:01 PM'));
// console.log(parseDates('Dec 25, 1995'));
// console.log(parseDates('Nov 19 1:12 PM'));
// console.log(parseDates('11 19, 1:12 PM').toJSON());

module.exports = parseDates;
