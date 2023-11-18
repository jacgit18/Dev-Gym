// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

// https://leetcode.com/problems/game-of-life/

// Example 1:

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:

// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.

export const gameOfLife = (board: number[][]): void => {
  const m = board.length
  const n = board[0].length

  function countLiveNeighbors(row: number, col: number): number {
    let count = 0

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newRow = row + i
        const newCol = col + j

        if (i === 0 && j === 0) continue // Skip the current cell
        if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
          count += board[newRow][newCol] & 1
        }
      }
    }

    return count
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const liveNeighbors = countLiveNeighbors(i, j)

      if (board[i][j] === 1) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          board[i][j] = 1 | 2 // Set the second bit to 1 to represent a live cell becoming dead
        }
      } else {
        if (liveNeighbors === 3) {
          board[i][j] = 2 // Set the second bit to 1 to represent a dead cell becoming live
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1 // Update the board based on the second bit
    }
  }
}

// Example usage:
// const board1 = [
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 1, 1],
//   [0, 0, 0],
// ]
// gameOfLife(board1)
// console.log(board1)

// const board2 = [
//   [1, 1],
//   [1, 0],
// ]
// gameOfLife(board2)
// console.log(board2)
