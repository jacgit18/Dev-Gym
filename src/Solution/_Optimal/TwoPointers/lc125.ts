// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

export const isPalindrome = (s: string): boolean => {
  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "")

  let left = 0
  let right = cleanString.length - 1

  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

// Example usage:
// const example1 = "A man, a plan, a canal: Panama"
// console.log(isPalindrome(example1)) // Output: true

// const example2 = "race a car"
// console.log(isPalindrome(example2)) // Output: false

// const example3 = " "
// console.log(isPalindrome(example3)) // Output: true
