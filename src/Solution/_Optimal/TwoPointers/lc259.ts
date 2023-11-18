// Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

// Example:

// Input: nums = [-2,0,1,3], and target = 2
// Output: 2
// Explanation: Because there are two triplets which sums are less than 2:
//              [-2,0,1]
//              [-2,0,3]

// Example 2:

// Input: nums = [], and target = 0
// Output: 0

// Example 3:

// Input: nums = [0], and target = 0
// Output: 0

export const threeSumSmaller = (nums: number[], target: number): number => {
  nums.sort((a, b) => a - b)
  let count = 0

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum < target) {
        // If the sum is less than the target, then all pairs (left, right) will satisfy the condition
        count += right - left
        left++
      } else {
        right--
      }
    }
  }

  return count
}

// Example usage:
// const nums1 = [-2, 0, 1, 3]
// const target1 = 2
// const result1 = threeSumSmaller(nums1, target1)
// console.log(result1) // Output: 2

// const nums2: any = []
// const target2 = 0
// const result2 = threeSumSmaller(nums2, target2)
// console.log(result2) // Output: 0

// const nums3 = [0]
// const result3 = threeSumSmaller(nums3, target2)
// console.log(result3) // Output: 0
