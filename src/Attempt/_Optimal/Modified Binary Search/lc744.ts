// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

// Constraints:

// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

export const nextGreatestLetter = (letters: string[], target: string): string => {
  return " "
}

// Example usage:
// const letters1 = ["c", "f", "j"]
// const target1 = "a"
// console.log(nextGreatestLetter(letters1, target1)) // Output: "c"

// const letters2 = ["c", "f", "j"]
// const target2 = "c"
// console.log(nextGreatestLetter(letters2, target2)) // Output: "f"

// const letters3 = ["x", "x", "y", "y"]
// const target3 = "z"
// console.log(nextGreatestLetter(letters3, target3)) // Output: "x"
