// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

export const checkInclusion = (s1: string, s2: string): boolean => {
  if (s1.length > s2.length) return false

  const s1CharCount: number[] = Array(26).fill(0)
  const window: number[] = Array(26).fill(0)

  for (let char of s1) {
    const idx = char.charCodeAt(0) - 97 // Add 0 as an argument to charCodeAt
    s1CharCount[idx]++
  }

  for (let i = 0; i < s1.length; i++) {
    const idx = s2[i].charCodeAt(0) - 97 // Add 0 as an argument to charCodeAt
    window[idx]++
  }

  let start = 0
  let end = s1.length - 1

  while (end < s2.length) {
    if (window.join("") === s1CharCount.join("")) return true
    end++

    if (end === s2.length) break

    const startIdx = s2[start].charCodeAt(0) - 97 // Add 0 as an argument to charCodeAt
    const endIdx = s2[end].charCodeAt(0) - 97 // Add 0 as an argument to charCodeAt
    window[startIdx]--
    window[endIdx]++
    start++
  }

  return false
}

// let s1 = "ab",
//   s2 = "eidbaooo",
//   s3 = "eidboaoo" // swap a with a for s3 would be false

// console.log(checkInclusion(s1, s2)) // true
// console.log(checkInclusion(s1, s3)) // false
