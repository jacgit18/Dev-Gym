// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

export const groupAnagrams = (s: string[]): string[][] => {
  const anagrams = new Map<string, string[]>()

  for (let str of s) {
    const sortedLetters = str.split("").sort().join("")

    if (anagrams.has(sortedLetters)) {
      anagrams.get(sortedLetters)!.push(str)
    } else {
      anagrams.set(sortedLetters, [str])
    }
    console.log(anagrams)
  }

  return Array.from(anagrams.values())
}

// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
