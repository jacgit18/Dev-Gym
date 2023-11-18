function swap(input: number[], index_A: number, index_B: number): void {
  const temp: number = input[index_A]
  input[index_A] = input[index_B]
  input[index_B] = temp
}

function max_heapify(array: number[], index: number, length: number): void {
  let left: number = 2 * index // left child index
  let right: number = 2 * index + 1 // right child index
  let maximum: number

  if (right < length) {
    // Right child exists?
    if (array[left] >= array[right]) {
      // Compare children to find the maximum
      maximum = left
    } else {
      maximum = right
    }
  } else if (left < length) {
    // Left child exists?
    maximum = left
  } else {
    return // No children, return
  }

  if (array[index] < array[maximum]) {
    // Check if the largest child is greater than the parent
    swap(array, index, maximum) // Swap both
    max_heapify(array, maximum, length) // All over again
  }
}

function heap_sort(array: number[]): number[] {
  const length: number = array.length
  for (let i: number = Math.floor(length / 2) - 1; i >= 0; i--) {
    max_heapify(array, i, length) // Build the max heap
  }
  for (let i: number = length - 1; i >= 0; i--) {
    swap(array, 0, i) // Delete the root element
    max_heapify(array, 0, i) // Build max heap again
  }
  return array
}

// const arrayTOWorkOn: number[] = [8, 4, 7, 1, 3, 5]
// console.log(`Array before: ${arrayTOWorkOn}`)
// console.log(`Array after: ${heap_sort(arrayTOWorkOn)}`)
