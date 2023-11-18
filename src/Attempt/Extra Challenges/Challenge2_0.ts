function spaceEater(food: string[][]): void {
  for (let consumptionStart = 0; consumptionStart < food.length; ++consumptionStart) {
    console.log(food[consumptionStart])
    if (food[consumptionStart][1] === "" || food[consumptionStart][1] === " ") {
      food[consumptionStart].splice(1, 1)
    }
  }
}

// good problem made me think
export const solution = (queries: string[][]): string[] => {
  let action = {
    1: "APPEND",
    2: "BACKSPACE",
    3: "MOVE",
  }

  let sanitized: void = spaceEater(queries)
  let res: string[] = []

  for (let i = 0; i < queries.length; ++i) {
    for (let j = 0; j < queries[i].length; ++j) {
      let word = queries[j][1]

      if (queries[i][0] === action[1]) {
        if (res.length < 1) {
          res.push(queries[i][1])
        } else {
          let word2 = word + queries[1][j]
          res.push(word2)
        }
      }

      if (queries[i][0] === action[2]) {
        // Handle BACKSPACE logic here
      }

      if (queries[i][0] === action[3]) {
        // Handle MOVE logic here
      }
    }
  }

  return res
}

const queries = [
  ["APPEND", "Hey"],
  ["APPEND", " you"],
  ["APPEND", ", don't"],
  ["APPEND", " "],
  ["APPEND", "let me down"],
]

// console.log(solution(queries))

/**
 * 
 * [
  [ 'APPEND', 'Hey' ],
  [ 'APPEND', ' you' ],
  [ 'APPEND', ", don't" ],
  [ 'APPEND', ' ' ],
  [ 'APPEND', 'let me down' ]
]

["Hey", 
 "Hey you", 
 "Hey you, don't", 
 "Hey you, don't ", 
 "Hey you, don't let me down"]

switch case 
check row first index for Apppend, Move, Backspace


 store value after apppend
unshift first index value or replace with empty space 
then replace next append with stored value

and concat to the next string 
update store 
then rm append and concat again 


if num dont concat replace with previous store


iterate through first index of matrix and push to empty array 

 */
