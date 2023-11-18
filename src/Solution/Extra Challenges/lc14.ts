// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

export const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) {
    return ""
  }

  // Iterate through characters of the first string
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]

    // Check if the character matches in all other strings
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== char) {
        // Stop when a mismatch is found or the end of a string is reached
        return strs[0].substring(0, i)
      }
    }
  }

  // If no mismatch is found, the entire first string is the common prefix
  return strs[0]
}

// Example usage:
// const example1 = ["flower", "flow", "flight"]
// console.log(longestCommonPrefix(example1)) // Output: "fl"

// const example2 = ["dog", "racecar", "car"]
// console.log(longestCommonPrefix(example2)) // Output: ""
