// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.

export const findDuplicates = (nums: number[]): number[] => {
  const duplicates: number[] = []

  let index = 0
  const n = nums.length

  while (index < n) {
    const currentNum = nums[index]
    const correctIndex = currentNum - 1

    if (nums[index] !== nums[correctIndex]) {
      ;[nums[index], nums[correctIndex]] = [nums[correctIndex], nums[index]] // swap indices
    } else {
      index++
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      duplicates.push(nums[i])
    }
  }

  return duplicates
}

// // Example usage:
// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])) // Output: [2, 3]
// console.log(findDuplicates([1, 1, 2])) // Output: [1]
// console.log(findDuplicates([1])) // Output: []
