// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

export const longestPalindrome = (s: string): number => {
  const charCount = new Map<string, number>()

  // Count the frequency of each character in the string
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }

  let length = 0
  let hasOddFrequency = false

  // Iterate through the character counts
  for (const count of charCount.values()) {
    // Add even part of the count to the length
    length += Math.floor(count / 2) * 2

    // Check if there is an odd part in the count
    if (count % 2 !== 0) {
      hasOddFrequency = true
    }
  }

  // If there is any character with an odd frequency, add 1 to the length
  if (hasOddFrequency) {
    length += 1
  }

  return length
}

// // Example usage:
// console.log(longestPalindrome("abccccdd")) // Output: 7
// console.log(longestPalindrome("a")) // Output: 1
