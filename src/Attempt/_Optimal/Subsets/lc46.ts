// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:

// Input: nums = [1]
// Output: [[1]]

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

export const permute = (nums: number[]): number[][] => {
  return [[0]]
}

// Example usage:
// const example1 = permute([1, 2, 3])
// console.log(example1)

// const example2 = permute([0, 1])
// console.log(example2)

// const example3 = permute([1])
// console.log(example3)
