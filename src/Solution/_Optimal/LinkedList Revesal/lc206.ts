// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:

// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

import { LinkedListNode, createLinkedListFromArray } from "../../../util/LinkedListMaker"

export const reverse = (head: LinkedListNode | null): LinkedListNode | null => {
  if (head == null || head.val < 0) return null
  let current: LinkedListNode | null = head
  let previous: LinkedListNode | null = null

  while (current !== null) {
    let next: LinkedListNode | null = current.next
    current.next = previous
    previous = current // advancing position
    current = next // advancing position
  }

  return previous
}

let head: LinkedListNode | null
head = new LinkedListNode(2)
head.next = new LinkedListNode(4)
head.next.next = new LinkedListNode(6)
head.next.next.next = new LinkedListNode(8)
head.next.next.next.next = new LinkedListNode(10)

let array1 = [1, 5, 7, 10]
let linkedList = createLinkedListFromArray(array1)

export let printFoward = (node: LinkedListNode | null) => {
  let current: LinkedListNode | null = node
  while (current !== null) {
    console.log(current.val)
    current = current.next // equivalent to i++ in a loop
  }
}

export let printFowardRec = (node: LinkedListNode | null): LinkedListNode | null => {
  let current: LinkedListNode | null = node
  if (current !== null) {
    console.log(current.val)
    return printFowardRec(current.next)
  }
  return null // Ensure that you return null at the end of the function if the node is null
}

export const printBackward = (node: LinkedListNode | null) => {
  if (node === null) return
  printBackward(node.next)
  console.log(node.val)
}

export const reverseNoComments = function (head: LinkedListNode | null): LinkedListNode | null {
  if (head == null || head.val < 0) return null
  let current: LinkedListNode | null = head
  let previous: LinkedListNode | null = null

  while (current !== null) {
    let next: LinkedListNode | null = current.next
    current.next = previous
    previous = current
    current = next
  }
  return previous
}

printFoward(linkedList)
console.log()

printFowardRec(linkedList)

console.log()

export const reverseREc = function (head: LinkedListNode | null): LinkedListNode | null {
  if (!head) return null

  function reverse(currNode: LinkedListNode, prev: LinkedListNode | null): LinkedListNode | null {
    const next: LinkedListNode | null = currNode.next
    currNode.next = prev
    if (!next) return currNode
    return reverse(next, currNode)
  }
  return reverse(head, null)
}

export const reverseList = function (
  head: LinkedListNode | null,
  prev: LinkedListNode | null = null,
): LinkedListNode | null {
  if (!head) {
    return prev
  }
  let current: LinkedListNode | null = head
  let next: LinkedListNode | null = current.next
  current.next = prev
  prev = current
  return reverseList(next, prev)
}

// console.log(reverseREc(linkedList))
