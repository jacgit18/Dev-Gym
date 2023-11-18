// Given an integer array sorted in ascending order, write a function to searchtargetinnums. Iftargetexists, then return its index, otherwise return-1.However, the array size is unknown to you. You may only access the array using anArrayReader interface, where ArrayReader.get(k)returns the element of the array at indexk (0-indexed).

// You may assume all integers in the array are less than 10000, and if you access the array out of bounds,ArrayReader.getwill return2147483647.

// Example 1:
// Input:
// array = [-1,0,3,5,9,12],
// target = 9

// Output:
//  4

// Explanation:
//  9 exists in nums and its index is 4

//  Example 2:
// Input:
// array = [-1,0,3,5,9,12],
// target = 2

// Output:
//  -1

// Explanation:
//  2 does not exist in nums so return -1

// Note:
// You may assume that all elements in the array are unique.
// The value of each element in the array will be in the range[-9999, 9999].

interface ArrayReader {
  get(index: number): number
}

export const searchInArrayReader = (reader: ArrayReader, target: number): number => {
  let left = 0
  let right = 1

  // Expand the search space until finding a range where target might exist
  while (reader.get(right) < target) {
    left = right
    right *= 2
  }

  // Perform binary search within the identified range
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const midValue = reader.get(mid)

    if (midValue === target) {
      return mid
    } else if (midValue < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1 // Target not found
}

// Example usage:
const arrayReader: ArrayReader = {
  get: (index) => {
    // Simulated implementation for the example
    const array = [-1, 0, 3, 5, 9, 12]
    if (index < array.length) {
      return array[index]
    } else {
      return 2147483647
    }
  },
}

// const target1 = 9
// console.log(searchInArrayReader(arrayReader, target1)) // Output: 4

// const target2 = 2
// console.log(searchInArrayReader(arrayReader, target2)) // Output: -1
