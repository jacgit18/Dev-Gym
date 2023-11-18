// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.

export const backspaceCompare = (s: string, t: string): boolean => {
  // replace # with \b
  const regexExp = /#/g
  const sWithoutHash = s.replace(regexExp, "")

  const tWithoutHash = t.replace(regexExp, "")

  return sWithoutHash === tWithoutHash
}

// console.log(backspaceCompare("ab#c", "ad#c")) // true

// console.log(backspaceCompare("ab##", "c#d#")); // true
// console.log(backspaceCompare("a#c", "b")); // false
// console.log("Hello, Java!".match(/\bJava\b/))
// console.log( "Breakfast at 09:00 in the room 123:456.".match( /\b\d\d:\d\d\b/ ) )// 09:00

let regex: RegExp = /[a-z]/
const fill: RegExp[] = new Array(26).fill(regex)

// console.log( fill)

// console.log(`c\bd\b`)
// console.log(`ab\b\b`)
