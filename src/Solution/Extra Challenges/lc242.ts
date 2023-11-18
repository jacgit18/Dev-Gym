// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

export const isAnagram = (s: string, t: string): boolean => {
  let hash: { [key: string]: number } = {}

  for (let char of s) {
    hash[char] = (hash[char] || 0) + 1
  }

  for (let char of t) {
    if (!hash[char]) return false
    hash[char]--
    if (hash[char] === 0) delete hash[char]
  }

  return Object.keys(hash).length === 0
}

// console.log(isAnagram("anagram", "nagaram")) // returns true
