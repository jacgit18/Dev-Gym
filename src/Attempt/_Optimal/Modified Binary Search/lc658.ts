// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104

export const findClosestElements = (arr: number[], k: number, x: number): number[] => {
  return [0]
}

// // Example usage:
// const arr1 = [1, 2, 3, 4, 5]
// const k1 = 4
// const x1 = 3
// console.log(findClosestElements(arr1, k1, x1)) // Output: [1, 2, 3, 4]

// const arr2 = [1, 2, 3, 4, 5]
// const k2 = 4
// const x2 = -1
// console.log(findClosestElements(arr2, k2, x2)) // Output: [1, 2, 3, 4]
