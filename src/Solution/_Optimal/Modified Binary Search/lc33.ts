// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

export const searchRanger = (nums: number[], target: number): number[] => {
  const findFirst = (target: number): number => {
    let left = 0
    let right = nums.length - 1
    let result = -1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] >= target) {
        right = mid - 1
        result = mid // Update result but continue searching in the left half
      } else {
        left = mid + 1
      }
    }

    return result
  }

  const findLast = (target: number): number => {
    let left = 0
    let right = nums.length - 1
    let result = -1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] <= target) {
        left = mid + 1
        result = mid // Update result but continue searching in the right half
      } else {
        right = mid - 1
      }
    }

    return result
  }

  const firstIndex = findFirst(target)
  const lastIndex = findLast(target)

  return [firstIndex, lastIndex]
}

// Example usage:
// const example1 = searchRanger([5, 7, 7, 8, 8, 10], 8)
// console.log(example1)

// const example2 = searchRanger([5, 7, 7, 8, 8, 10], 6)
// console.log(example2)

// const example3 = searchRanger([], 0)
// console.log(example3)
