// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

export const longestPalindrome = (s: string): string => {
  const n = s.length
  let start = 0
  let maxLength = 1

  // Create a 2D array to track if substring s[i...j] is a palindrome
  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false))

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true
  }

  // Check substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true
      start = i
      maxLength = 2
    }
  }

  // Check substrings of length 3 or more
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1

      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true
        start = i
        maxLength = len
      }
    }
  }

  return s.substring(start, start + maxLength)
}

// Example usage:
// const input1 = "babad"
// console.log(longestPalindrome(input1)) // Output: "bab" or "aba"

// const input2 = "cbbd"
// console.log(longestPalindrome(input2)) // Output: "bb"
