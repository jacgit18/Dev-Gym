// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

export const longestOnes = (nums: number[], k: number): number => {
  let left = 0
  let right = 0
  let maxOnes = 0
  let zeroCount = 0

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--
      }
      left++
    }

    maxOnes = Math.max(maxOnes, right - left + 1)

    right++
  }

  return maxOnes
}

// Example usage:
// const nums1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
// const k1 = 2
// console.log(longestOnes(nums1, k1)) // Output: 6

// const nums2 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
// const k2 = 3
// console.log(longestOnes(nums2, k2)) // Output: 10
