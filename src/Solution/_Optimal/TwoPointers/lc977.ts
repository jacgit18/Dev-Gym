// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

export const sortedSquares = (arr: number[]): number[] => {
  let result: number[] = []
  let left: number = 0
  let right: number = arr.length - 1
  let i: number = right
  let num1: number
  let num2: number

  while (left <= right) {
    num1 = Math.pow(arr[left], 2)
    num2 = Math.pow(arr[right], 2)

    if (num1 > num2) {
      result[i] = num1
      left++
    } else {
      result[i] = num2
      right--
    }

    i--
  }

  return result
}

// Squares: 0,1,4,4,9
// Squares: 0,1,0,4,9

// console.log(`Squares: ${sortedSquares([-2, -1, 0, 2, 3])}`)
// console.log(`Squares: ${sortedSquares([-3, -1, 0, 1, 2])}`)
