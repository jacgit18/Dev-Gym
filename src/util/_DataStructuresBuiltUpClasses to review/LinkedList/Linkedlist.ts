class LinkedListNode {
  value: any
  next: LinkedListNode | null

  constructor(value: any, next: LinkedListNode | null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  head: LinkedListNode | null
  length: number

  constructor() {
    this.head = null
    this.length = 0
  }

  insertAtHead(data: any): void {
    const newNode = new LinkedListNode(data, this.head)
    this.head = newNode
    this.length++
  }

  getByIndex(index: number): LinkedListNode | null {
    if (index < 0 || index >= this.length) return null

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current!.next
    }
    return current
  }

  removeHead(): void {
    this.head = this.head!.next
    this.length--
  }

  insertAtIndex(index: number, value: any): void {
    if (index === 0) return this.insertAtHead(value)

    const prev = this.getByIndex(index - 1)
    if (prev === null) return

    prev.next = new LinkedListNode(value, prev.next)
    this.length++
  }

  removeAtIndex(index: number): void {
    if (index === 0) return this.removeHead()

    const prev = this.getByIndex(index - 1)
    if (prev === null) return

    prev.next = prev.next!.next
    this.length--
  }

  removeDuplicates(index: number): void {
    // Implement your removeDuplicates logic here
  }

  print(): void {
    let output = ""
    let current = this.head
    while (current) {
      output = `${output}${current.value} -> `
      current = current.next
    }
    console.log(`${output}null`)
  }
}

// Don't know how to translate LinkedList.fromValues into TypeScript

export default LinkedList
