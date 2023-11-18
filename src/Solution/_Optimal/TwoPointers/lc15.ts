// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

export const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue // Skip duplicates
    }

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left++ // Skip duplicates
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right-- // Skip duplicates
        }
        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return result
}

// Example usage:
// const nums1 = [-1, 0, 1, 2, -1, -4]
// const result1 = threeSum(nums1)
// console.log(result1)

// const nums2 = [0, 1, 1]
// const result2 = threeSum(nums2)
// console.log(result2)

// const nums3 = [0, 0, 0]
// const result3 = threeSum(nums3)
// console.log(result3)
