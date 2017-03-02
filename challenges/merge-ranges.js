/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  // create a meetingInProgress timeline
  // plot down areas where ranges exist
  // create new ranges
  const meetingInProgress = [];
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = array[i][0]; j < array[i][1]; j += 1) {
        meetingInProgress[j] = true;
    }
  }

  let lastMeetingStart;
  for (let i = 0; i < meetingInProgress.length + 1; i += 1) {
    if (meetingInProgress[i] === true && !lastMeetingStart) {
    lastMeetingStart = i;
    }
    if (!meetingInProgress[i] && lastMeetingStart !== undefined) {
    result.push([lastMeetingStart, i]);
    lastMeetingStart = undefined;
    }
  }

  return result;
}

module.exports = mergeRanges;
