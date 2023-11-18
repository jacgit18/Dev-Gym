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

export const pair_with_target_sum = (arr: number[], targetSum: number): number[] => {
  return [0]
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6))

// console.log(pair_with_target_sum([2, 5, 9, 11], 11));

// console.log(`\n ------- Edge Case -------- `)
// console.log(`Edge 1: [${pair_with_target_sum([], 6)}]`);
// console.log(`Edge 1: [${pair_with_target_sum([3], 6)}]`);
