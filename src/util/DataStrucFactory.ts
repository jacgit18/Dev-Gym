// Define your data structure classes and functions
class Stack {
  private stack: any[]

  constructor(stackOfPlates: any[]) {
    this.stack = stackOfPlates.slice()
  }

  push(item: any) {
    this.stack.push(item)
  }

  pop(): any {
    return this.stack.pop()
  }
  // Add other methods as needed
}

class StackLinkedList<T> {
  private top: ListNode<T> | null
  private size: number

  constructor(initialValue: T | null = null) {
    this.top = initialValue ? new ListNode(initialValue) : null
    this.size = initialValue ? 1 : 0
  }

  push(item: T) {
    const newNode = new ListNode(item)
    newNode.next = this.top
    this.top = newNode
    this.size++
  }

  pushMany(items: T[]) {
    for (const item of items) {
      this.push(item)
    }
  }

  pop(): T | null {
    if (!this.top) {
      return null // Stack is empty
    }

    const poppedItem = this.top.value
    this.top = this.top.next
    this.size--

    return poppedItem
  }

  peek(): T | null {
    return this.top ? this.top.value : null
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  getSize(): number {
    return this.size
  }
}

class Queue<T> {
  private front: ListNode<T> | null
  private rear: ListNode<T> | null

  constructor(initialValue: T | null = null) {
    this.front = initialValue ? new ListNode(initialValue) : null
    this.rear = initialValue ? this.front : null
  }

  enqueue(item: T) {
    const newNode = new ListNode(item)

    if (!this.front) {
      this.front = newNode
      this.rear = newNode
    } else {
      this.rear!.next = newNode
      this.rear = newNode
    }
  }

  enqueueMany(items: T[]) {
    for (const item of items) {
      this.enqueue(item)
    }
  }

  dequeue(): T | null {
    if (!this.front) {
      return null // Queue is empty
    }

    const dequeuedItem = this.front.value
    this.front = this.front.next

    if (!this.front) {
      this.rear = null // Queue is now empty
    }

    return dequeuedItem
  }

  isEmpty(): boolean {
    return !this.front
  }
}

class ListNode<T> {
  value: T
  next: ListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }

  arrayToLinkedList<T>(arr: T[]): ListNode<T> | null {
    if (arr.length === 0) {
      return null
    }

    const head = new ListNode(arr[0])
    let current = head

    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i])
      current = current.next
    }

    return head
  }
}

class DoubleLLNode<T> {
  data: T
  previous: DoubleLLNode<T> | null
  next: DoubleLLNode<T> | null

  constructor(
    data: T,
    previous: DoubleLLNode<T> | null = null,
    next: DoubleLLNode<T> | null = null,
  ) {
    this.data = data
    this.previous = previous
    this.next = next
  }
}

class CyclicLinkedList<T> {
  head: ListNode<T> | null

  constructor(values: T[]) {
    this.head = this.createCyclicLinkedList(values)
  }

  private createCyclicLinkedList(values: T[]): ListNode<T> | null {
    if (values.length === 0) {
      return null
    }

    let head: ListNode<T> | null = new ListNode(values[0])
    let current: ListNode<T> | null = head

    for (let i = 1; i < values.length; i++) {
      const newNode: ListNode<T> = new ListNode(values[i])
      current!.next = newNode
      current = newNode
    }

    // Make it cyclic by connecting the last node to the head
    if (head) {
      current!.next = head
    }

    return head
  }
}

class DoublyCyclicLinkedList<T> {
  head: DoubleLLNode<T> | null

  constructor(values: T[]) {
    this.head = this.createDoublyCyclicLinkedList(values)
  }

  private createDoublyCyclicLinkedList(values: T[]): DoubleLLNode<T> | null {
    if (values.length === 0) {
      return null
    }

    let head: DoubleLLNode<T> | null = new DoubleLLNode(values[0])
    let current: DoubleLLNode<T> | null = head
    let prev: DoubleLLNode<T> | null = null

    for (let i = 1; i < values.length; i++) {
      const newNode: DoubleLLNode<T> = new DoubleLLNode(values[i])
      current!.next = newNode
      newNode.previous = current
      current = newNode
    }

    // Make it doubly cyclic by connecting the last node to the head and the head's previous to the last node
    if (head) {
      current!.next = head
      head.previous = current
    }

    return head
  }
}

class TreeNode {
  value: any
  left: TreeNode | null
  right: TreeNode | null

  constructor(value: any) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class GraphNode {
  id: any
  edges: GraphNode[]

  constructor(id: any) {
    this.id = id !== undefined ? id : null
    this.edges = []
  }
}

// Define your tree and graph classes
class BinarySearchTree {
  root: TreeNode | null

  constructor(rootValue: any) {
    this.root = new TreeNode(rootValue)
  }

  // Add methods for tree operations
}

class Graph {
  nodes: { [key: string]: GraphNode }

  constructor(initialNodes: string[] = [], initialEdges: [string, string][] = []) {
    this.nodes = {}

    // Add initial nodes
    for (const id of initialNodes) {
      this.addNode(id)
    }

    // Add initial edges
    for (const [node1, node2] of initialEdges) {
      this.addEdge(node1, node2)
    }
  }

  addNode(id: string) {
    this.nodes[id] = new GraphNode(id)
  }

  addEdge(node1: string, node2: string) {
    this.nodes[node1].edges.push(this.nodes[node2])
    this.nodes[node2].edges.push(this.nodes[node1])
  }

  // Add methods for graph operations
}

class MinHeap {
  heap: number[]

  constructor(isMaxHeap = false) {
    this.heap = []
  }

  insert(value: number) {
    this.heap.push(value)
    this.bubbleUp()
  }

  extract(): number {
    if (this.heap.length === 0) {
      return 0
    }

    if (this.heap.length === 1) {
      const top = this.heap.pop()!
      return top
    }

    const top = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.bubbleDown()

    return top
  }

  size(): number {
    return this.heap.length
  }

  private bubbleUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[index] >= this.heap[parentIndex]) {
        break
      }

      ;[this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
      index = parentIndex
    }
  }

  private bubbleDown() {
    let index = 0
    const length = this.heap.length
    while (true) {
      const leftChildIdx = 2 * index + 1
      const rightChildIdx = 2 * index + 2
      let swap = null

      if (leftChildIdx < length && this.heap[leftChildIdx] < this.heap[index]) {
        swap = leftChildIdx
      }

      if (
        rightChildIdx < length &&
        (swap === null || this.heap[rightChildIdx] < this.heap[leftChildIdx])
      ) {
        swap = rightChildIdx
      }

      if (swap === null) break
      ;[this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]]
      index = swap
    }
  }
}

class MaxHeap {
  heap: number[]

  constructor(isMaxHeap = true) {
    this.heap = []
  }

  insert(value: number) {
    this.heap.push(value)
    this.bubbleUp()
  }

  extract(): number | undefined {
    if (this.heap.length === 0) {
      return undefined
    }

    if (this.heap.length === 1) {
      const top = this.heap.pop()!
      return top
    }

    const top = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.bubbleDown()

    return top
  }

  private bubbleUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[index] <= this.heap[parentIndex]) {
        break
      }

      ;[this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
      index = parentIndex
    }
  }

  private bubbleDown() {
    let index = 0
    const length = this.heap.length
    while (true) {
      const leftChildIdx = 2 * index + 1
      const rightChildIdx = 2 * index + 2
      let swap = null

      if (leftChildIdx < length && this.heap[leftChildIdx] > this.heap[index]) {
        swap = leftChildIdx
      }

      if (
        rightChildIdx < length &&
        (swap === null || this.heap[rightChildIdx] > this.heap[leftChildIdx])
      ) {
        swap = rightChildIdx
      }

      if (swap === null) break
      ;[this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]]
      index = swap
    }
  }
}

// Organize your functions for creating and working with these data structures
class DataStructureFactory {
  static createStack(stackOfPlates: any[]) {
    return new Stack(stackOfPlates)
  }

  static createStackLinkedList(initialValue: any | null = null) {
    return new StackLinkedList(initialValue)
  }

  static createQueue(waitingLine: any[]) {
    return new Queue(waitingLine)
  }

  static createListNode(value: any) {
    return new ListNode(value)
  }

  static createDoubleLLNode(data: any) {
    return new DoubleLLNode(data)
  }

  static createDoublyCyclicLinkedList<T>(values: T[]) {
    return new DoublyCyclicLinkedList(values)
  }

  static createCyclicLinkedList<T>(values: T[]) {
    return new CyclicLinkedList(values)
  }

  static createBinarySearchTree(rootValue: any) {
    return new BinarySearchTree(rootValue)
  }

  static createGraph(initialNodes: string[] = [], initialEdges: [string, string][] = []) {
    return new Graph(initialNodes, initialEdges)
  }

  static createMaxHeap(): MaxHeap {
    return new MaxHeap()
  }

  static createMinHeap(): MinHeap {
    return new MinHeap()
  }
}

// Export the relevant classes or functions

export { DataStructureFactory }

export { BinarySearchTree, Graph, MaxHeap, MinHeap, Queue, Stack, StackLinkedList }

export { DoubleLLNode, GraphNode, ListNode, TreeNode }

//   import * as DataStructures from './your-module';

// // Usage examples
// const stack = new DataStructures.Stack();
// const queue = new DataStructures.Queue();
// const set = new DataStructures.Set();
// const factory = new DataStructures.DataStructureFactory();

// // Import specific items
// import { Stack, Queue, Set, DataStructureFactory } from './your-module';

// // Usage examples
// const stack = new Stack();
// const queue = new Queue();
// const set = new Set();
// const factory = new DataStructureFactory();

// const stackLinkedList = DataStructureFactory.createStackLinkedList();
// stackLinkedList.pushMany([10, 20, 30]); // Push multiple items
// console.log("Stack (LinkedList):", stackLinkedList);

// const queue = DataStructureFactory.createQueue();
// queue.enqueueMany([10, 20, 30]); // Enqueue multiple items
// console.log("Queue:", queue);
