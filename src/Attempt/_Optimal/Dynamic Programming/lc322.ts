// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

export const coinChange = (coins: number[], amount: number): number => {
  const dp: number[] = Array(amount + 1).fill(amount + 1)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
}

// Example usage:
// const coins1 = [1, 2, 5]
// const amount1 = 11
// console.log(coinChange(coins1, amount1)) // Output: 3

// const coins2 = [2]
// const amount2 = 3
// console.log(coinChange(coins2, amount2)) // Output: -1

// const coins3 = [1]
// const amount3 = 0
// console.log(coinChange(coins3, amount3)) // Output: 0
