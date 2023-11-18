function countingSort(arr: number[]): number[] {
  const max = Math.max(...arr)
  const min = Math.min(...arr)

  // Create a counting array to store the frequency of each value
  const countArray: number[] = new Array(max - min + 1).fill(0)

  // Count the occurrences of each value in the input array
  for (const num of arr) {
    countArray[num - min]++
  }

  // Build the sorted array from the counting array
  const sortedArray: number[] = []
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      sortedArray.push(i + min)
    }
  }

  return sortedArray
}

// Example usage
// const TypeUnsortedArray: number[] = [4, 2, 2, 8, 3, 3, 1]
// const TypedSortedArray = countingSort(TypeUnsortedArray)
// console.log(TypedSortedArray) // Output: [1, 2, 2, 3, 3, 4, 8]
