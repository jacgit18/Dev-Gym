// Problem Statement

// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...]
// (si < ei), determine if a person could attend all meetings.

// Example 1:
// Input:
// [[0,30],[5,10],[15,20]]
// Output:
//  false

// Example 2:
// Input:
//  [[7,10],[2,4]]

// Output:
//  true

export const canAttendMeetings = (intervals: number[][]): boolean => {
  if (intervals.length <= 1) {
    return true // No overlap if there is 0 or 1 meeting
  }

  // Sort intervals based on their start times
  intervals.sort((a, b) => a[0] - b[0])

  // Check for overlapping meetings
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false // Overlapping meetings
    }
  }

  return true // No overlapping meetings
}

// // Example usage:
// const example1 = canAttendMeetings([
//   [1, 3],
//   [4, 6],
//   [7, 9],
// ])
// console.log(example1) // Output: true

// const example2 = canAttendMeetings([
//   [1, 3],
//   [2, 5],
//   [6, 9],
// ])
// console.log(example2) // Output: false (overlapping meetings)
