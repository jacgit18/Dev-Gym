// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

export const subsets = (nums: number[]): number[][] => {
  const result: number[][] = []

  const backtrack = (start: number, currentSubset: number[]) => {
    result.push([...currentSubset])

    for (let i = start; i < nums.length; i++) {
      currentSubset.push(nums[i])
      backtrack(i + 1, currentSubset)
      currentSubset.pop()
    }
  }

  backtrack(0, [])

  return result
}

// // Example usage:
// const example1 = subsets([1, 2, 3])
// console.log(example1)

// const example2 = subsets([0])
// console.log(example2)
