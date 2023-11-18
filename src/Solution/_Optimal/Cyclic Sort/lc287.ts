// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.

export const findDuplicate = (nums: number[]): number => {
  let index = 0
  const n = nums.length - 1

  while (index <= n) {
    const currentSubarray = nums[index] - 1

    if (nums[index] !== nums[currentSubarray]) {
      ;[nums[index], nums[currentSubarray]] = [nums[currentSubarray], nums[index]] // swap indices
    } else {
      index++
    }
  }

  for (let i = 0; i <= n; i++) {
    if (nums[i] !== i + 1) {
      return nums[i]
    }
  }

  // This return statement is added to satisfy TypeScript's strict null checks.
  // In practice, this case should not be reached given the problem constraints.
  return -1
}

// Example usage:
// console.log(findDuplicate([1, 3, 4, 2, 2])) // Output: 2
// console.log(findDuplicate([3, 1, 3, 4, 2])) // Output: 3
