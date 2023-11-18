function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
  return arr
}

function bucketSort(arr: number[]): number[] {
  const bucketSize = 5 // Set the size of each bucket
  const max = Math.max(...arr)
  const min = Math.min(...arr)

  const bucketCount = Math.floor((max - min) / bucketSize) + 1
  const buckets: number[][] = new Array(bucketCount).fill([]).map(() => [])

  // Place elements into buckets
  for (const num of arr) {
    const index = Math.floor((num - min) / bucketSize)
    buckets[index].push(num)
  }

  // Sort each bucket and concatenate the results
  const sortedArray: number[] = []
  for (const bucket of buckets) {
    insertionSort(bucket)
    sortedArray.push(...bucket)
  }

  return sortedArray
}

// Example usage
// const unsortedOneArray: number[] = [0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51]
// const sortedOneArray = bucketSort(unsortedOneArray)
// console.log(sortedOneArray) // Output: [0.32, 0.33, 0.37, 0.42, 0.47, 0.51, 0.52]
