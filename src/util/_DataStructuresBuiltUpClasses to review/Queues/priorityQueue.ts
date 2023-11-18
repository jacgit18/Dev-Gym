class Noder {
  val: number
  priority: number

  constructor(val: number, priority: number) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueuer {
  values: Noder[]

  constructor() {
    this.values = []
  }

  enqueue(val: number, priority: number): void {
    let newNode = new Noder(val, priority)
    this.values.push(newNode)
    let index = this.values.length - 1
    this.bubbleUp(index)
  }

  dequeue(): Noder | undefined {
    const max = this.values[0]
    const end = this.values.pop()

    if (end !== undefined) {
      this.values[0] = end
      this.bubbleDown(0)
      return max
    }
  }

  getFirst(): Noder | undefined {
    return this.values[0]
  }

  printQueue(): void {
    console.log(this.values)
  }

  swapValues(index1: number, index2: number): void {
    ;[this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]]
  }

  bubbleUp(index: number): void {
    const current = this.values[index]

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]

      if (parent.priority <= current.priority) {
        this.swapValues(index, parentIndex)
        index = parentIndex
      } else break
    }
  }

  bubbleDown(index: number): void {
    const length = this.values.length
    const current = this.values[index]

    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild: Noder | undefined, rightChild: Noder | undefined
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild !== undefined && leftChild.priority > current.priority) {
          swap = leftChildIndex
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          rightChild !== undefined &&
          ((swap === null && rightChild.priority > current.priority) ||
            (swap !== null && rightChild.priority > (leftChild as Noder).priority))
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break
      this.swapValues(index, swap)
      index = swap
    }
  }
}

// const treeOne = new PriorityQueuer()
// treeOne.enqueue(3, 2)
// treeOne.enqueue(4, 5)
// treeOne.enqueue(31, 1)
// treeOne.enqueue(6, 3)

// console.log(treeOne.getFirst()) // { val: 4, priority: 5 }
// treeOne.printQueue() // [ { val: 4, priority: 5 }, { val: 3, priority: 2 }, { val: 31, priority: 1 }, { val: 6, priority: 3 } ]
// console.log(treeOne.dequeue()) // { val: 4, priority: 5 }
// console.log(treeOne.dequeue()) // { val: 6, priority: 3 }
// console.log(treeOne.dequeue()) // { val: 3, priority: 2 }
// console.log(treeOne.dequeue()) // { val: 31, priority: 1 }
