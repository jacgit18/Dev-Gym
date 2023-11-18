// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

export const rob = (): ((nums: number[], i: number) => number) => {
  let cache: { [key: number]: number } = {}

  let myrobDP: (nums: number[], i: number) => number

  return (myrobDP = (nums: number[], i: number): number => {
    // test cases
    if (i in cache) {
      return cache[i]
    } else {
      // base case
      if (i < 0) return 0
      else {
        cache[i] = Math.max(myrobDP(nums, i - 2) + nums[i], myrobDP(nums, i - 1))
        return cache[i]
      }
    }
  })
}

let price: number[] = [1, 2, 3, 1]

// acts as a private method or variable
// const myrobObj = rob()

// if this function took a param it would look like this

// Closure is used here
// const newFunction = myrob('out'); first param
// console.log(newFunction);
// console.log(newFunction(price, price.length - 1)); return function second param

// console.log(myrobObj(price, price.length - 1)) // using currying here
// newFunction('out')(price, price.length - 1) // alternatively you can curry like this

// console.log(rob(price))

// console.log(`\n ------- Edge Case -------- `)

// console.log(` Case 01  ${myrobObj(price, price.length - 1)}`)
