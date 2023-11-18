class Noderrrr {
  value: any
  next: Noderrrr | null

  constructor(value: any) {
    this.value = value
    this.next = null
  }
}

class Queue {
  front: Noderrrr | null
  back: Noderrrr | null
  length: number

  constructor() {
    this.front = null
    this.back = null
    this.length = 0
  }

  peek(): void {
    console.log(this.front)
  }

  enqueue(value: any): Queue {
    const newNode = new Noderrrr(value)
    if (this.length === 0) {
      this.front = newNode
      this.back = newNode
    } else {
      this.back!.next = newNode
      this.back = newNode
    }
    this.length++
    return this
  }

  dequeue(): Queue | null {
    if (!this.front) {
      return null
    }
    if (this.front === this.back) {
      this.back = null
    }
    this.front = this.front.next
    this.length--
    return this
  }
}

const myQueueOne = new Queue()
myQueueOne.enqueue("Joy")
myQueueOne.peek()
myQueueOne.enqueue("Matt")
myQueueOne.peek()
myQueueOne.enqueue("Pavel")
myQueueOne.peek()
myQueueOne.dequeue()
myQueueOne.dequeue()
myQueueOne.peek()
console.log(myQueueOne)

// Manual modification
myQueueOne.front = new Noderrrr("chad")
myQueueOne.front.next = myQueueOne.back
console.log(myQueueOne)
