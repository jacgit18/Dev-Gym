class MinBinaryHeap {
  values: number[]

  constructor() {
    this.values = []
  }

  // Helper method that swaps the values at two indexes of an array
  swap(index1: number, index2: number): number[] {
    let temp = this.values[index1]
    this.values[index1] = this.values[index2]
    this.values[index2] = temp
    return this.values
  }

  // Helper method that bubbles up values from the end
  bubbleUp(): void {
    // Get index of the inserted element
    let index = this.values.length - 1

    // Loop while index is not 0 or element no longer needs to bubble
    while (index > 0) {
      // Get parent index via formula
      let parentIndex = Math.ceil((index - 1) / 2)

      // If value is greater than parent, swap the two
      if (this.values[parentIndex] > this.values[index]) {
        // Swap with helper method
        this.swap(index, parentIndex)
        // Change current index to parent index
        index = parentIndex
      } else {
        break
      }
    }
  }

  // Method that pushes a new value onto the end and calls the bubble helper
  insert(value: number): number[] {
    this.values.push(value)
    this.bubbleUp()
    return this.values
  }

  // Bubble down elements to readjust heap after removing the minimum element
  bubbleDown(): void {
    let parentIndex = 0
    const length = this.values.length
    const element = this.values[0]

    while (true) {
      let leftChildIndex = 2 * parentIndex + 1
      let rightChildIndex = 2 * parentIndex + 2
      let leftChild = 0
      let rightChild = 0
      let indexToSwap = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild < element) {
          indexToSwap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]

        if (
          (rightChild < element && indexToSwap === null) ||
          (rightChild < leftChild && indexToSwap !== null)
        ) {
          indexToSwap = rightChildIndex
        }
      }

      if (indexToSwap === null) {
        break
      }

      this.swap(parentIndex, indexToSwap)
      parentIndex = indexToSwap
    }
  }

  removeMin(): number | undefined {
    // Swap first and last element
    this.swap(0, this.values.length - 1)

    // Pop min value off of values
    let poppedValue = this.values.pop()

    // Re-adjust heap if length is greater than 1
    if (this.values.length > 1) {
      this.bubbleDown()
    }

    return poppedValue
  }
}

// const hpOne = new MinBinaryHeap()

// hpOne.insert(652)
// hpOne.insert(335)
// hpOne.insert(466)
// hpOne.insert(532)
// hpOne.insert(2330)
// hpOne.insert(324)
// hpOne.insert(222)
// hpOne.insert(4654)
// hpOne.insert(5432)
// hpOne.insert(43)

// // hp.bubbleDown();

// console.log(hpOne)

// console.log(hpOne.removeMin())
// // hp.bubbleDown();
// console.log(hpOne)
