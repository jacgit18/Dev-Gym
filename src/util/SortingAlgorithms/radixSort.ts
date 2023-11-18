// Function to find the maximum number in an array
function findMax(arr: number[]): number {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

// Radix Sort function
function radixSorter(arr: number[]): number[] {
  const max = findMax(arr)
  const maxLength = max.toString().length

  for (let digitPlace = 1; digitPlace <= maxLength; digitPlace++) {
    // Initialize 10 buckets (0-9)
    const buckets: number[][] = Array.from({ length: 10 }, () => [])

    // Distribute the elements into buckets based on the current digit place
    for (const num of arr) {
      const digit = Math.floor((num / Math.pow(10, digitPlace - 1)) % 10)
      buckets[digit].push(num)
    }

    // Collect the elements from the buckets in order
    arr = ([] as number[]).concat(...buckets.reduce((acc, bucket) => acc.concat(bucket), []))
  }

  return arr
}

// // Example usage
// const unsortedArray: number[] = [170, 45, 75, 90, 802, 24, 2, 66]
// const sortedArray = radixSorter(unsortedArray)
// console.log(sortedArray) // Output: [2, 24, 45, 66, 75, 90, 170, 802]
