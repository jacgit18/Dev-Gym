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

let head: LinkedListNode | null
head = new LinkedListNode(2)
head.next = new LinkedListNode(4)
head.next.next = new LinkedListNode(6)
head.next.next.next = new LinkedListNode(8)
head.next.next.next.next = new LinkedListNode(10)

let array1 = [1, 5, 7, 10]
let linkedList = createLinkedListFromArray(array1)

export const reverseList = function (
  head: LinkedListNode | null,
  prev: LinkedListNode | null = null,
): LinkedListNode | null {
  return null
}
