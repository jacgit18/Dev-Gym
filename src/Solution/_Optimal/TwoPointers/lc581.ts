// Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.

// Return the shortest such subarray and output its length.

// Example 1:

// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0

// Example 3:

// Input: nums = [1]
// Output: 0

// Constraints:

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105

export const findUnsortedSubarray = (nums: number[]): number => {
  const n = nums.length

  // Find the left bound of the unsorted subarray
  let left = 0
  while (left < n - 1 && nums[left] <= nums[left + 1]) {
    left += 1
  }

  // If the array is already sorted, return 0
  if (left === n - 1) {
    return 0
  }

  // Find the right bound of the unsorted subarray
  let right = n - 1
  while (right > 0 && nums[right] >= nums[right - 1]) {
    right -= 1
  }

  // Find the minimum and maximum values within the potential unsorted subarray
  let minInRange = Math.min(...nums.slice(left, right + 1))
  let maxInRange = Math.max(...nums.slice(left, right + 1))

  // Expand the left bound to include elements less than the minimum value
  while (left > 0 && nums[left - 1] > minInRange) {
    left -= 1
  }

  // Expand the right bound to include elements greater than the maximum value
  while (right < n - 1 && nums[right + 1] < maxInRange) {
    right += 1
  }

  // Calculate the length of the unsorted subarray
  const length = right - left + 1

  return length
}

// console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])) // 5
// console.log(findUnsortedSubarray([1, 2, 3, 4])) // 0
// console.log(findUnsortedSubarray([1])) // 0
