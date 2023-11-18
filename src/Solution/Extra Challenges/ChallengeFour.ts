// In this exercise, you're going to decompress a compressed string.

// Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

// The input

// 3[abc]4[ab]c

// Would be output as

// abcabcabcababababc

// Other rules
// Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa

// One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab

// Characters allowed as input include digits, small English letters and brackets [ ].

// Digits are only to represent amount of repetitions.

// Letters are just letters.

// Brackets are only part of syntax of writing repeated substring.

// Input is always valid, so no need to check its validity.

// Learning objectives
// This question gives you the chance to practice with strings, recursion, algorithm, compilers, automata, and loops. It’s also an opportunity to work on coding with better efficiency.

export const decompressString = (s: string): string => {
  let i = 0

  const decompress = (): string => {
    let result = ""
    let num = ""

    while (i < s.length) {
      const char = s[i]

      if (char === "[") {
        i++
        const innerResult = decompress()
        result += num.repeat(Number(innerResult))
        num = ""
      } else if (char === "]") {
        i++
        return result
      } else if (char >= "0" && char <= "9") {
        num += char
        i++
      } else {
        result += char
        i++
      }
    }

    return result
  }

  return decompress()
}

// Example usage:
// const compressedString = "3[abc]4[ab]c"
// const decompressedString = decompressString(compressedString)
// console.log(decompressedString) // Output: 'abcabcabcababababc'
