// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

export const lengthOfLIS = (nums: number[]): number => {
  const n = nums.length
  if (n === 0) return 0

  const tails: number[] = [nums[0]]

  for (let i = 1; i < n; i++) {
    if (nums[i] < tails[0]) {
      tails[0] = nums[i]
    } else if (nums[i] > tails[tails.length - 1]) {
      tails.push(nums[i])
    } else {
      // Binary search to find the smallest tail greater than or equal to nums[i]
      let left = 0
      let right = tails.length - 1
      while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (tails[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      tails[left] = nums[i]
    }
  }

  return tails.length
}

// Example usage:
// const nums1 = [10, 9, 2, 5, 3, 7, 101, 18]
// console.log(lengthOfLIS(nums1)) // Output: 4

// const nums2 = [0, 1, 0, 3, 2, 3]
// console.log(lengthOfLIS(nums2)) // Output: 4

// const nums3 = [7, 7, 7, 7, 7, 7, 7]
// console.log(lengthOfLIS(nums3)) // Output: 1
