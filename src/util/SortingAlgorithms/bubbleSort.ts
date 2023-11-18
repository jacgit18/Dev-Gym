// The purpose of the bubbleSort function is to sort the array parameter you pass to it,
// and it does so by modifying the elements in the input array directly. It doesn't produce
// a new sorted array, nor does it return any specific result.

// If you were to return a value from the bubbleSort function, it might be misleading because
// the primary operation of this function is to sort the array rather than produce a meaningful
// return value. Therefore, using void as the return type is a clear indication of the function's behavior.

// // T[] adapts to input or restrict input number[]
// function func<T>(array: T[]): void {

// cant resue vairiable names in different files outside of function may use encapsulation
// const num: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array: number[]): void {
  const length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Swap the numbers
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
}

// bubbleSort(numToSort);
// console.log(numToSort);

class BubbleSort {
  private num: number[]

  constructor(array: number[]) {
    this.num = array
  }

  sort(): void {
    const length = this.num.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.num[j] > this.num[j + 1]) {
          // Swap the numbers
          let temp = this.num[j]
          this.num[j] = this.num[j + 1]
          this.num[j + 1] = temp
        }
      }
    }
  }
}

// Usage
// cant resue vairiable names in different files outside of function may use encapsulation
// const myArrayTwo = [5, 2, 9, 3, 6]
// const sorter = new BubbleSort(myArrayTwo)
// sorter.sort()
// console.log(myArrayTwo) // Sorted array

// Higher Order bubble sort implementing something like this doesnt really make sense

function bubbleSortInPlace(arrayToProcess: number[]): void {
  const length = arrayToProcess.length

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arrayToProcess[j] > arrayToProcess[j + 1]) {
        // Swap the numbers in the original array
        ;[arrayToProcess[j], arrayToProcess[j + 1]] = [arrayToProcess[j + 1], arrayToProcess[j]]
      }
    }
  }
}

function sortArrayInPlace(initArray: number[], sortFunction: (array: number[]) => void): void {
  sortFunction(initArray)
}

// Usage
// const myArrayThree: number[] = [5, 2, 9, 3, 6]
// sortArrayInPlace(myArrayThree, bubbleSortInPlace)
// console.log(myArrayThree) // The original array is now sorted in place
