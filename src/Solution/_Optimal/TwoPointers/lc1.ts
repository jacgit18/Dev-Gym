// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

export const pair_with_target_sum_map = (nums: number[], target: number): number[] => {
  let map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    console.log(map)

    let complement = target - nums[i]
    if (map.has(complement)) {
      map.set(nums[i], i)

      return [map.get(complement)!, i]
    }
    map.set(nums[i], i)
  }

  return [-1, -1]
}

// console.time("Pair time map")
// console.log(pair_with_target_sum_map([1, 2, 3, 4, 6], 6))
// console.timeEnd("Pair time map")

export const pair_with_target_sum_Two_Pointer = (arr: number[], targetSum: number): number[] => {
  let left = 0,
    right = arr.length - 1
  // console.log(right)
  while (left < right) {
    const currentSum = arr[left] + arr[right]
    if (currentSum === targetSum) {
      return [left, right]
    }

    if (targetSum > currentSum) {
      left += 1 // we need a pair with a bigger sum
    } else {
      right -= 1 // we need a pair with a smaller sum
    }
  }

  return [-1, -1]
}

// console.time("Pair time")
// console.log(pair_with_target_sum_Two_Pointer([1, 2, 3, 4, 6], 6))
// console.timeEnd("Pair time")

// console.log(pair_with_target_sum([2, 5, 9, 11], 11));

// console.log(`\n ------- Edge Case -------- `)
// console.log(`Edge 1: [${pair_with_target_sum([], 6)}]`);
// console.log(`Edge 1: [${pair_with_target_sum([3], 6)}]`);
