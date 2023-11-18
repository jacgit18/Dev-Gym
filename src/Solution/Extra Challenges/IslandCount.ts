/*

Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

Example:

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.


*/

export const getNumberOfIslands = (binaryMatrix: number[][]): number => {
  if (!binaryMatrix || binaryMatrix.length === 0 || binaryMatrix[0].length === 0) {
    return 0
  }

  const rows = binaryMatrix.length
  const cols = binaryMatrix[0].length
  let islandsCount = 0

  function dfs(row: number, col: number): void {
    if (row < 0 || row >= rows || col < 0 || col >= cols || binaryMatrix[row][col] === 0) {
      return
    }

    binaryMatrix[row][col] = 0 // Mark the cell as visited

    // Explore neighbors in all four directions
    dfs(row + 1, col) // Down
    dfs(row - 1, col) // Up
    dfs(row, col + 1) // Right
    dfs(row, col - 1) // Left
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (binaryMatrix[row][col] === 1) {
        islandsCount++
        dfs(row, col) // Explore the island and mark its cells as visited
      }
    }
  }

  return islandsCount
}

// Example usage:
const binaryMatrix = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1],
]

// console.log(getNumberOfIslands(binaryMatrix)) // Output: 6
