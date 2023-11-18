const numbersToSortNow: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSorter(array: number[]): void {
  const length: number = array.length
  for (let i: number = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // Move the number to the first position
      array.unshift(array.splice(i, 1)[0])
    } else {
      // Only sort numbers smaller than the number on the left of it.
      // This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        // Find where the number should go
        for (let j: number = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            // Move the number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0])
          }
        }
      }
    }
  }
}

// insertionSorter(numbersToSortNow)
// console.log(numbersToSortNow)
