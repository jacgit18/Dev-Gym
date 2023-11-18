// Sudoku is a classic puzzle game where the goal is to fill a 9x9 grid with digits from 1 to 9, such that each row, each column, and each of the nine 3x3 subgrids that compose the grid (also called "boxes", "blocks", or "regions") contain all of the digits from 1 to 9 without repetition.

// Your task is to implement a Sudoku solver that can take an incomplete Sudoku grid as input and return a solved grid if a solution exists. If no solution exists, the solver should return the original input grid.

// Input:

// The input parameter board is a 9x9 array representing the Sudoku grid.
// Each cell in the grid contains an integer from 0 to 9.
// The value 0 represents an empty cell.

// Output:

// The function should return a 9x9 array representing the solved Sudoku grid if a solution exists.
// If no solution exists, return the original input grid.

// Constraints:

// The input Sudoku grid is a valid puzzle with a unique solution.
// The input array board will always be a 9x9 array.
// Each digit in the grid will be an integer from 0 to 9.

// Note:

// The provided example illustrates a partially filled Sudoku grid with the numbers already filled in.

// The solution should correctly fill in the empty cells while adhering to Sudoku rules.

export const sudokuSolver = (board: number[][]): number[][] => {
  return [[0]]
}

const inputBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
]

// console.log("Edge case one", sudokuSolver(inputBoard))
