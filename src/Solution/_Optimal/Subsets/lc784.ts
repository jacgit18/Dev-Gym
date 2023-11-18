// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]

// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]

// Constraints:

// 1 <= s.length <= 12
// s consists of lowercase English letters, uppercase English letters, and digits.

export const letterCasePermutation = (s: string): string[] => {
  const result: string[] = []

  const backtrack = (current: string[], index: number) => {
    if (index === s.length) {
      result.push(current.join(""))
      return
    }

    const char = s[index]

    // Include the current character as lowercase
    current.push(char.toLowerCase())
    backtrack(current, index + 1)
    current.pop()

    // Include the current character as uppercase if it's a letter
    if (char.toLowerCase() !== char.toUpperCase()) {
      current.push(char.toUpperCase())
      backtrack(current, index + 1)
      current.pop()
    }
  }

  backtrack([], 0)

  return result
}

// // Example usage:
// const example1 = letterCasePermutation("a1b2")
// console.log(example1)

// const example2 = letterCasePermutation("3z4")
// console.log(example2)
