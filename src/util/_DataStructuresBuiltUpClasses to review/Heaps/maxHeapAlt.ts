class MaxBinaryHeap {
  private values: number[]

  constructor() {
    this.values = []
  }

  // Helper method that swaps the values at two indexes of an array
  swap(index1: number, index2: number): void {
    const temp = this.values[index1]
    this.values[index1] = this.values[index2]
    this.values[index2] = temp
  }

  // Helper method that bubbles up values from the end
  bubbleUp(): void {
    let index = this.values.length - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)

      if (this.values[parentIndex] < this.values[index]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  // Method that pushes a new value onto the end and calls the bubbleUp helper
  insert(value: number): number[] {
    this.values.push(value)
    this.bubbleUp()
    return this.values
  }

  // Bubble down elements to readjust the heap after removing the max element
  bubbleDown(): void {
    let parentIndex = 0
    const length = this.values.length
    const element = this.values[0]

    while (true) {
      const leftChildIndex = 2 * parentIndex + 1
      const rightChildIndex = 2 * parentIndex + 2
      let leftChild = 0
      let rightChild = 0

      let indexToSwap = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild > element) {
          indexToSwap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]

        if (
          (rightChild > element && indexToSwap === null) ||
          (rightChild > leftChild && indexToSwap !== null)
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

  removeMax(): number | undefined {
    if (this.values.length === 0) {
      return undefined
    }

    this.swap(0, this.values.length - 1)
    const poppedValue = this.values.pop()

    if (this.values.length > 1) {
      this.bubbleDown()
    }

    return poppedValue
  }
}

// const hpTwo = new MaxBinaryHeap()

// hpTwo.insert(652)
// hpTwo.insert(335)
// hpTwo.insert(466)
// hpTwo.insert(532)
// hpTwo.insert(2330)
// hpTwo.insert(324)
// hpTwo.insert(222)
// hpTwo.insert(4654)
// hpTwo.insert(343212)
// hpTwo.insert(43)

// console.log(hpTwo)

// console.log(hpTwo.removeMax())
// hpTwo.bubbleDown()
// console.log(hpTwo)
