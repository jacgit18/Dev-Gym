const numbersToSort: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

export function quickSort(array: number[], left: number, right: number): number[] {
  const len: number = array.length
  let pivot: number
  let partitionIndex: number

  if (left < right) {
    pivot = right
    partitionIndex = partition(array, pivot, left, right)

    // Sort left and right
    quickSort(array, left, partitionIndex - 1)
    quickSort(array, partitionIndex + 1, right)
  }
  return array
}

function partition(array: number[], pivot: number, left: number, right: number): number {
  let pivotValue: number = array[pivot]
  let partitionIndex: number = left

  for (let i: number = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(array, right, partitionIndex)
  return partitionIndex
}

function swap(array: number[], firstIndex: number, secondIndex: number): void {
  const temp: number = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

// // Select first and last index as 2nd and 3rd parameters
// console.time("quick")
// console.log(quickSort(numbersToSort, 0, numbersToSort.length - 1))
// console.timeEnd("quick")
