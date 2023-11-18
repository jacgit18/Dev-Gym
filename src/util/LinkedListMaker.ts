export class LinkedListNode {
  val: number
  next: LinkedListNode | null
  constructor(val?: number, next?: LinkedListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

export function createLinkedListFromArray(arr: any[]): LinkedListNode | null {
  if (arr.length === 0) {
    return null
  }

  const head = new LinkedListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    const newNode = new LinkedListNode(arr[i])
    current.next = newNode
    current = newNode
  }

  return head
}

// Example usage:
// const arrayToLinkedList = createLinkedListFromArray([1, 2, 3, 4, 5])
// console.log(arrayToLinkedList)
