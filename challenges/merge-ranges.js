/**
 * Write a function mergeRanges that takes an array of meeting time
 * ranges and returns an array of condensed ranges.
 *
 * Example:
 *
 *
 * Do not assume the ranges are in order
 */

var times = [[9, 10], [3, 5], [4, 8], [10, 12], [0, 1]]
console.log(mergeRanges(times));// -> [[0, 1], [3, 8], [9, 12]]

function mergeRanges(array) {
  meetings = {};
  let meetingsArray = [];

  // return if array is null
  if(!array.length) return;

  // go through array and create start times
  for (let i = 0; i < array.length; i++) {
    // sort the inner arrays just to be sure
    array = array.sort((a, b) => a - b);
    let startTime = array[i][0];
    let saved = false;

    let endTime  = array[i][1];
    console.log('startTime', startTime, 'endTime', endTime);

    for(let time in meetings) {
      let savedMeetingStart = time;
      let savedMeetingEnd = meetings[time];

      // see if we have overlap
      if (startTime <= savedMeetingEnd && endTime >= savedMeetingStart) {
        let newStart = Math.min(startTime,savedMeetingStart);
        let newEnd   = Math.max(endTime, savedMeetingEnd);
        console.log('Overlap: savedStart', savedMeetingStart, 'savedEnd', savedMeetingEnd,
        'newStart', newStart, 'newEnd', newEnd);

        // delete what's there and replace with new time
        delete meetings[savedMeetingStart];
        meetings[newStart] = newEnd;
        saved = true;
      }
    }

    if(!saved) {
      // if we didn't save it, just add the meeting for now
      meetings[startTime] = endTime;
    }
  }

  // load up the results
  for (let key in meetings ) {
    let meeting = [key, meetings[key]];
    meetingsArray.push(meeting);
  }

  return meetingsArray;
}

module.exports = mergeRanges;
