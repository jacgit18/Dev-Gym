interface DoublyNode {
  value: any
  next: DoublyNode | null
  previous: DoublyNode | null
}

function createNode(value: any): DoublyNode {
  return {
    value: value,
    next: null,
    previous: null,
  }
}

class DoublyLinkedList {
  head: DoublyNode | null
  tail: DoublyNode | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  insert(value: any): DoublyNode {
    this.length++
    const newNode = createNode(value)

    if (this.tail) {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
      return newNode
    }

    this.head = this.tail = newNode
    return newNode
  }

  remove(): DoublyNode | undefined {
    if (this.tail) {
      this.length--

      const removedTail = this.tail
      const beforeTail = this.tail.previous

      this.tail = beforeTail
      if (this.tail) {
        this.tail.next = null
      } else {
        this.head = null
      }

      return removedTail
    }
    return undefined
  }

  print(): void {
    let current = this.head
    while (current) {
      console.log(`${current.previous?.value} ${current.value} ${current.next?.value}`)
      current = current.next!
    }
  }

  insertHead(value: any): DoublyNode {
    this.length++
    const newNode = createNode(value)

    if (this.head) {
      this.head.previous = newNode
      newNode.next = this.head
      this.head = newNode
      return newNode
    }

    this.head = this.tail = newNode
    return newNode
  }

  removeHead(): DoublyNode | undefined {
    if (this.head) {
      this.length--
      const removedHead = this.head
      this.head = this.head.next
      if (this.head) {
        this.head.previous = null
      } else {
        this.tail = null
      }
      return removedHead
    }
    return undefined
  }

  insertIndex(value: any, index: number): DoublyNode {
    if (index >= this.length) {
      throw new Error("Insert index out of bounds")
    }

    if (index === 0) {
      return this.insertHead(value)
    }

    this.length++
    let currentNode = this.head!
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next!
    }
    const previousNode = currentNode.previous
    const newNode = createNode(value)
    newNode.next = currentNode
    newNode.previous = previousNode
    previousNode!.next = newNode
    currentNode.previous = newNode
    return newNode
  }

  removeIndex(index: number): DoublyNode {
    if (index >= this.length) {
      throw new Error("Remove index out of bounds")
    }

    if (index === 0) {
      return this.removeHead()!
    }

    this.length--
    let currentNode = this.head!
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next!
    }
    const previousNode = currentNode.previous
    const nextNode = currentNode.next!
    previousNode!.next = nextNode
    nextNode.previous = previousNode
    return currentNode
  }
}

// Testing functions

// const dLinkedList = new DoublyLinkedList()

// dLinkedList.insert(7)
// dLinkedList.insert(8)
// dLinkedList.insert(9)
// dLinkedList.insert(69)
// dLinkedList.insert(98)
// dLinkedList.insert(29)

// // dLinkedList.remove();
// // dLinkedList.print();

// console.log(dLinkedList)
