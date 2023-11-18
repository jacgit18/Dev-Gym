// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

export const longest_substring_with_k_distinct = (str: string, k: number): number => {
  let windowStart = 0
  let maxLength = 0
  const charFrequency: Record<string, number> = {}

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]

    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0
    }

    charFrequency[rightChar] += 1

    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart]
      charFrequency[leftChar] -= 1

      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar]
      }

      windowStart += 1
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength
}

// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "araaci",
//     2
//   )}`
// );

// eceba, 2 output 3
// aa, 1 output 2

// console.log(longest_substring_with_k_distinct("araaci",2))

// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     'araaci',
//     1
//   )}`
// );
// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     'cbbebi',
//     3
//   )}`
// );
