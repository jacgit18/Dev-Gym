const Morenumbers: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(array: number[]): number[] {
  const length: number = array.length
  for (let i: number = 0; i < length; i++) {
    // Set the current index as the minimum
    let min: number = i
    let temp: number = array[i]
    for (let j: number = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // Update the minimum if the current element is lower than what we had previously
        min = j
      }
    }
    array[i] = array[min]
    array[min] = temp
  }
  return array
}

// selectionSort(Morenumbers)
// console.log(Morenumbers)
