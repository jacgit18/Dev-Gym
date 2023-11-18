// Given an integer array nums that may contain duplicates, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

export const subsetsWithDup = (nums: number[]): number[][] => {
  const result: number[][] = []

  nums.sort((a, b) => a - b) // Sort the array to handle duplicates

  const backtrack = (start: number, currentSubset: number[]) => {
    result.push([...currentSubset])

    for (let i = start; i < nums.length; i++) {
      // Skip duplicates to avoid duplicate subsets
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }

      currentSubset.push(nums[i])
      backtrack(i + 1, currentSubset)
      currentSubset.pop()
    }
  }

  backtrack(0, [])

  return result
}

// Example usage:
// const example1 = subsetsWithDup([1, 2, 2])
// console.log(example1)

// const example2 = subsetsWithDup([0])
// console.log(example2)
