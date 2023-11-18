// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

export const isValid = (s: string): boolean => {
  const stack: string[] = []

  // Mapping of open and close brackets
  const bracketMap: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  // Iterate through each character in the string
  for (const char of s) {
    if (bracketMap[char]) {
      // If the character is an open bracket, push it onto the stack
      stack.push(char)
    } else {
      // If the character is a close bracket, pop the last element from the stack
      const lastBracket = stack.pop()

      // Check if the popped open bracket matches the corresponding close bracket
      if (bracketMap[lastBracket!] !== char) {
        return false
      }
    }
  }

  // If the stack is empty, all brackets have been matched
  return stack.length === 0
}

// Example usage:
// const example1 = "()"
// console.log(isValid(example1)) // Output: true

// const example2 = "()[]{}"
// console.log(isValid(example2)) // Output: true

// const example3 = "(]"
// console.log(isValid(example3)) // Output: false
