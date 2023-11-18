class CrazyQueue {
  first: any[]
  last: any[]

  constructor() {
    this.first = []
    this.last = []
  }

  enqueue(value: any): CrazyQueue {
    const length = this.first.length
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop())
    }
    this.last.push(value)
    return this
  }

  dequeue(): CrazyQueue {
    const length = this.last.length
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop())
    }
    this.first.pop()
    return this
  }

  peek(): any {
    if (this.last.length > 0) {
      return this.last[0]
    }
    return this.first[this.first.length - 1]
  }
}

const myQueue = new CrazyQueue()
myQueue.enqueue("Joy")
myQueue.enqueue("Matt")
myQueue.enqueue("Pavel")
console.log(myQueue)

myQueue.dequeue()
console.log(myQueue)
