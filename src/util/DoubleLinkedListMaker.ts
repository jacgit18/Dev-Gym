export class DoublyLinkedListNode {
  val: number
  next: DoublyLinkedListNode | null
  prev: DoublyLinkedListNode | null

  constructor(
    val?: number,
    next?: DoublyLinkedListNode | null,
    prev?: DoublyLinkedListNode | null,
  ) {
    this.val = val ?? 0
    this.next = next ?? null
    this.prev = prev ?? null
  }
}

export function createDoublyLinkedListFromArray(arr: any[]): DoublyLinkedListNode | null {
  if (arr.length === 0) {
    return null
  }

  const head = new DoublyLinkedListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    const newNode = new DoublyLinkedListNode(arr[i])
    newNode.prev = current
    current.next = newNode
    current = newNode
  }

  return head
}

// Example usage:
// const arrayToDoublyLinkedList = createDoublyLinkedListFromArray([1, 2, 3, 4, 5])
// console.log(arrayToDoublyLinkedList)
