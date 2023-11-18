// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

class MinHeap {
  private heap: number[]

  constructor() {
    this.heap = []
  }

  private swap(i: number, j: number): void {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  private heapifyUp(): void {
    let current = this.heap.length - 1

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2)

      if (this.heap[current] < this.heap[parent]) {
        this.swap(current, parent)
        current = parent
      } else {
        break
      }
    }
  }

  add(value: number): void {
    this.heap.push(value)
    this.heapifyUp()
  }

  pop(): number | undefined {
    if (this.heap.length === 0) return undefined

    const poppedValue = this.heap[0]

    if (this.heap.length === 1) {
      this.heap.pop()
    } else {
      this.heap[0] = this.heap.pop()!
      this.heapifyDown()
    }

    return poppedValue
  }

  private heapifyDown(): void {
    let current = 0

    while (true) {
      const leftChild = 2 * current + 1
      const rightChild = 2 * current + 2
      let smallest = current

      if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild
      }

      if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild
      }

      if (smallest !== current) {
        this.swap(current, smallest)
        current = smallest
      } else {
        break
      }
    }
  }

  peek(): number | undefined {
    return this.heap.length > 0 ? this.heap[0] : undefined
  }

  size(): number {
    return this.heap.length
  }
}

export const findKthLargest = (nums: number[], k: number): number | undefined => {
  const minHeap = new MinHeap()

  for (const num of nums) {
    minHeap.add(num)
    if (minHeap.size() > k) {
      minHeap.pop()
    }
  }

  return minHeap.peek()
}

// Example usage:
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) // Output: 5
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)) // Output: 4
