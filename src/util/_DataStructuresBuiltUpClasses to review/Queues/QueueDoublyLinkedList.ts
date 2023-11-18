class QNode {
  data: any
  next: QNode | null
  prev: QNode | null

  constructor(data: any, prev: QNode | null) {
    this.data = data
    this.next = null
    this.prev = prev
  }
}

class MyQueue {
  front: QNode | null
  back: QNode | null
  size: number

  constructor() {
    this.front = null
    this.back = null
    this.size = 0
  }

  // Add a node into the queue
  enqueue(data: any): void {
    const node = new QNode(data, this.back)
    if (this.front === null) {
      this.front = node
      this.size = 1
    } else {
      this.back!.next = node
      this.size++
    }
    this.back = node
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  // Get the front element of the queue
  peek(): any {
    if (this.isEmpty()) {
      console.log("\n Empty Queue")
      return -1
    } else {
      return this.front!.data
    }
  }

  isSize(): number {
    return this.size
  }

  // Remove the front node of the queue
  dequeue(): any {
    if (this.size === 0) {
      return -1
    } else {
      const data = this.front!.data
      if (this.front === this.back) {
        this.back = null
        this.front = null
      } else {
        this.front = this.front!.next
        if (this.front) {
          this.front.prev = null
        }
      }
      this.size--
      return data
    }
  }

  // Print elements of the queue
  printQdata(): void {
    let node = this.front
    console.log("\n Queue Element")
    while (node !== null) {
      process.stdout.write(" " + node.data)
      node = node.next
    }
    console.log()
  }
}

const q = new MyQueue()

// Add queue elements
q.enqueue("joy")
q.enqueue("matt")
q.enqueue("pavel")
q.dequeue()

console.log(q)

// Uncomment the following lines to test the main function
// function main() {
//   const q = new MyQueue();
//   q.enqueue(1);
//   q.enqueue(2);
//   q.enqueue(3);
//   q.enqueue(4);
//   q.enqueue(5);
//   q.printQdata();
//   console.log(q);
//   process.stdout.write(" Size : " + q.isSize());
//   process.stdout.write("\n Dequeue Node : " + q.dequeue());
//   process.stdout.write("\n Dequeue Node : " + q.dequeue());
//   process.stdout.write("\n Dequeue Node : " + q.dequeue());
//   q.printQdata();
//   process.stdout.write(" Size : " + q.isSize());
// }
// main();
