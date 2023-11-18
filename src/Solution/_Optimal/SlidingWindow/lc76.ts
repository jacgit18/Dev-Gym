// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

export const minWindow = (s: string, t: string): string => {
  const targetMap: Map<string, number> = new Map()
  let requiredCharacters = t.length

  for (const char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1)
  }

  let left = 0
  let right = 0
  let minWindow = ""
  let minLength = Infinity

  while (right < s.length) {
    const charRight = s[right]
    if (targetMap.has(charRight)) {
      if (targetMap.get(charRight)! > 0) {
        requiredCharacters--
      }
      targetMap.set(charRight, targetMap.get(charRight)! - 1)
    }

    while (requiredCharacters === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1
        minWindow = s.substring(left, right + 1)
      }

      const charLeft = s[left]
      if (targetMap.has(charLeft)) {
        targetMap.set(charLeft, targetMap.get(charLeft)! + 1)
        if (targetMap.get(charLeft)! > 0) {
          requiredCharacters++
        }
      }

      left++
    }

    right++
  }

  return minWindow
}

// Example usage:
// const s1 = "ADOBECODEBANC"
// const t1 = "ABC"
// console.log(minWindow(s1, t1)) // Output: "BANC"

// const s2 = "a"
// const t2 = "a"
// console.log(minWindow(s2, t2)) // Output: "a"

// const s3 = "a"
// const t3 = "aa"
// console.log(minWindow(s3, t3)) // Output: ""
