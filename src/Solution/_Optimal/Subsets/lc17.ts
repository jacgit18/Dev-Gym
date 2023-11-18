// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:

// Input: digits = ""
// Output: []

// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

export const letterCombinationsBackTrack = (digits: string): string[] => {
  const digitToLetters: { [key: string]: string[] } = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  }

  const result: string[] = []

  function generateCombinations(currentIndex: number, currentCombination: string) {
    if (currentIndex === digits.length) {
      if (currentCombination.length > 0) {
        result.push(currentCombination)
      }
      return
    }

    const currentDigit = digits[currentIndex]
    const letters = digitToLetters[currentDigit] || []

    for (const letter of letters) {
      generateCombinations(currentIndex + 1, currentCombination + letter)
    }
  }

  generateCombinations(0, "")

  return result
}

// Example usage:
// console.log(letterCombinationsBackTrack("23")) // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinationsBackTrack("")) // Output: []
// console.log(letterCombinationsBackTrack("2")) // Output: ["a","b","c"]

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return []
  }

  const digitToLetters: { [key: string]: string[] } = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  }

  const result: string[] = []
  const queue: string[] = [""]

  for (let i = 0; i < digits.length; i++) {
    const currentDigit = digits[i]
    const letters = digitToLetters[currentDigit] || []

    while (queue[0].length === i) {
      const currentCombination = queue.shift()!

      for (const letter of letters) {
        queue.push(currentCombination + letter)
      }
    }
  }

  return queue
}

// Example usage:
// console.log(letterCombinations("23")) // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations("")) // Output: []
// console.log(letterCombinations("2")) // Output: ["a","b","c"]
