// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104

export const smallest_subarray_with_given_sumAlt = (target: number, nums: number[]): number => {
  let start = 0
  let end = 0
  let sum = nums[0]
  let flag = false
  const length = nums.length
  let minLength = length

  while (end < length) {
    if (sum >= target) {
      if (end - start + 1 < minLength) {
        minLength = end - start + 1 // Corrected condition here
      }
      sum -= nums[start]
      flag = true
      start++
    } else {
      end++
      if (end < length) {
        sum += nums[end]
      }
    }
  }

  if (!flag) {
    return 0
  }

  return minLength // Return the count of elements in the subarray
}

export const smallestSubarrayWithGivenSum = (s: number, arr: number[]): number => {
  let winSum = 0
  let minLength = Infinity
  let windowSizeStart = 0
  let counter = 0
  let subCounter = 0

  for (let start = 0; start < arr.length; start++) {
    winSum += arr[start]

    while (winSum >= s) {
      let windowResize = start - windowSizeStart + 1
      minLength = Math.min(minLength, windowResize)

      winSum -= arr[windowSizeStart]
      windowSizeStart++
      subCounter++
    }

    counter++
  }

  if (minLength === Infinity) {
    return 0
  }
  return minLength
  // return 0;
}

// console.log(smallestSubarrayWithGivenSum(3, [4, 6, 6, 8]))
