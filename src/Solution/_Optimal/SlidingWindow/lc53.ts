// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

export const maxSubArray = (nums: number[]): number => {
  let maxSum = nums[0]
  let currentSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // If the current sum becomes negative, start a new subarray
    currentSum = Math.max(nums[i], currentSum + nums[i])

    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

// Example usage:
// const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// console.log(maxSubArray(nums1)) // Output: 6

// const nums2 = [1]
// console.log(maxSubArray(nums2)) // Output: 1

// const nums3 = [5, 4, -1, 7, 8]
// console.log(maxSubArray(nums3)) // Output: 23
