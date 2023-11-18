// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Example 2:

// Input: nums = [1,1,2]
// Output: [1]

// Example 3:

// Input: nums = [1]
// Output: []

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.

export const findDuplicatesCyclic = (nums: number[]): number[] => {
  const duplicates: number[] = []

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      // Swap nums[i] to its correct position
      ;[nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicates.push(nums[i])
    }
  }

  return duplicates
}

// Example usage:
const example1 = findDuplicatesCyclic([4, 3, 2, 7, 8, 2, 3, 1])
console.log(example1)

const example2 = findDuplicatesCyclic([1, 1, 2])
console.log(example2)

const example3 = findDuplicatesCyclic([1])
console.log(example3)

export const findDuplicatesBackTrack = (nums: number[]): number[] => {
  const duplicates: number[] = []
  const n = nums.length

  const backtrack = (start: number) => {
    if (start === n) {
      // Check for duplicates
      for (let i = 0; i < n; i++) {
        if (nums[Math.abs(nums[i]) - 1] < 0) {
          duplicates.push(Math.abs(nums[i]))
        } else {
          nums[Math.abs(nums[i]) - 1] *= -1
        }
      }
      // Restore the array for subsequent backtracking
      for (let i = 0; i < n; i++) {
        nums[i] = Math.abs(nums[i])
      }
      return
    }

    // Explore choices at the current level
    for (let i = start; i < n; i++) {
      // Swap nums[start] with nums[i]
      ;[nums[start], nums[i]] = [nums[i], nums[start]]
      // Recur to the next level
      backtrack(start + 1)
      // Backtrack by restoring the array
      ;[nums[start], nums[i]] = [nums[i], nums[start]]
    }
  }

  backtrack(0)

  return duplicates
}

// Example usage:
//   const example1 = findDuplicatesBackTrack([4, 3, 2, 7, 8, 2, 3, 1]);
//   console.log(example1);

//   const example2 = findDuplicatesBackTrack([1, 1, 2]);
//   console.log(example2);

//   const example3 = findDuplicatesBackTrack([1]);
//   console.log(example3);
