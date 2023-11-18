export const matrix = (matrix: number[][]): void => {
  // Object to store counts of each value in the matrix
  let counts: { [key: number]: number } = {}

  // Iterate through each row in the matrix
  for (let outerIndex = 0; outerIndex < matrix.length; outerIndex++) {
    // Iterate through each element in the row
    for (let innerIndex = 0; innerIndex < matrix[outerIndex].length; innerIndex++) {
      const currentPosition = matrix[outerIndex][innerIndex]

      // Get the next row and column positions
      const nextRowPosition =
        outerIndex + 1 < matrix.length ? matrix[outerIndex + 1][innerIndex] : undefined
      const nextColPosition =
        innerIndex + 1 < matrix[outerIndex].length ? matrix[outerIndex][innerIndex + 1] : undefined

      // If the current position is not in counts, add it with an initial count of 0
      if (!(currentPosition in counts)) {
        counts[currentPosition] = 0
      }

      // Increment the count for the current position
      counts[currentPosition] += 1

      // Your logic for comparing positions goes here
      // For example:
      if (outerIndex + 1 === matrix.length) {
        break
      } else {
        if (currentPosition === nextRowPosition) {
          // Your logic for handling equality between positions
          // let maxCluster = Math.max();
        }
      }
    }
  }
}

// Example matrix
let matrixVal: number[][] = [
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [1, 1, 0, 0],
  [1, 0, 0, 0],
]

// Call the matrix function
// matrix(matrixVal)
