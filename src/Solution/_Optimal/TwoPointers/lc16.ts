// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

export const threeSumClosest = (nums: number[], target: number): number => {
  nums.sort((a, b) => a - b)
  let closestSum = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right]
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum
      }

      if (currentSum < target) {
        left++
      } else {
        right--
      }
    }
  }

  return closestSum
}

// Example usage:
// const nums1 = [-1, 2, 1, -4]
// const target1 = 1
// const result1 = threeSumClosest(nums1, target1)
// console.log(result1)

// const nums2 = [0, 0, 0]
// const target2 = 1
// const result2 = threeSumClosest(nums2, target2)
// console.log(result2)
