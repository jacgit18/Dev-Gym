const numbersortMerge: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283]

export function mergeSort(array: number[]): number[] {
  if (array.length === 1) {
    return array
  }
  // Split Array into right and left
  const length: number = array.length
  const middle: number = Math.floor(length / 2)
  const left: number[] = array.slice(0, middle)
  const right: number[] = array.slice(middle)

  return mergeHelper(mergeSort(left), mergeSort(right))
}

function mergeHelper(left: number[], right: number[]): number[] {
  const result: number[] = []
  let leftIndex: number = 0
  let rightIndex: number = 0
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// console.time("mergeHelper")
// console.log(mergeSort(numbersortMerge))
// console.timeEnd("mergeHelper")
