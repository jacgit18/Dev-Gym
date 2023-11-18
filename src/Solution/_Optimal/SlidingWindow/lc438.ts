// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

export const findAnagramsTwoPointer = (s: string, p: string): number[] => {
  const result: number[] = []
  const targetMap: Map<string, number> = new Map()
  const windowMap: Map<string, number> = new Map()

  for (const char of p) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1)
  }

  let left = 0
  let right = 0

  while (right < s.length) {
    const charRight = s[right]
    windowMap.set(charRight, (windowMap.get(charRight) || 0) + 1)

    if (right - left + 1 === p.length) {
      if (mapsAreEqual(targetMap, windowMap)) {
        result.push(left)
      }

      const charLeft = s[left]
      windowMap.set(charLeft, windowMap.get(charLeft)! - 1)
      if (windowMap.get(charLeft) === 0) {
        windowMap.delete(charLeft)
      }

      left++
    }

    right++
  }

  return result
}

function mapsAreEqual(map1: Map<string, number>, map2: Map<string, number>): boolean {
  if (map1.size !== map2.size) {
    return false
  }

  for (const [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false
    }
  }

  return true
}

export const findAnagrams = (s: string, p: string): number[] => {
  const result: number[] = []
  const sMap: Record<string, number> = {}
  const pMap: Record<string, number> = {}

  // Initialize frequency maps for pattern and current window in string s
  for (const char of p) {
    pMap[char] = (pMap[char] || 0) + 1
  }

  let left = 0
  let right = 0

  while (right < s.length) {
    // Expand the window
    sMap[s[right]] = (sMap[s[right]] || 0) + 1
    right++

    // Check if the window size is equal to the pattern size
    if (right - left === p.length) {
      // Compare the frequency maps for the current window and pattern
      if (JSON.stringify(sMap) === JSON.stringify(pMap)) {
        result.push(left)
      }

      // Move the window by removing the leftmost character
      sMap[s[left]]--
      if (sMap[s[left]] === 0) {
        delete sMap[s[left]]
      }
      left++
    }
  }

  return result
}

// // Example usage:
// const example1 = findAnagrams("cbaebabacd", "abc")
// console.log(example1) // Output: [0, 6]

// const example2 = findAnagrams("abab", "ab")
// console.log(example2) // Output: [0, 1, 2]

// const s1 = "cbaebabacd"
// const p1 = "abc"
// console.log(findAnagramsTwoPointer(s1, p1)) // Output: [0, 6]

// const s2 = "abab"
// const p2 = "ab"
// console.log(findAnagramsTwoPointer(s2, p2)) // Output: [0, 1, 2]
