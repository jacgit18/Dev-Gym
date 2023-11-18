// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

/**
 * Input: Starting from the head we have a fast and slow pointer
 *
 * then as we iterate through the linked list we are changing the values of each pointer to the point that they are moving at different rates
 * the fast pointer moves two spots while the slow moves one spot ahead meaning that the fast pointer includes some recursion
 *
 * and as we move towards the end we set the last pointer of the linked list to another part of the linked list
 * specifically where the fast pointer would be meaning if we have for example :
 *
 * 3 2 0 4
 *
 * 3 -> 2 -> 0 -> null
 *
 * slow
 * fast
 * 3 -> 2 -> 0 -> null
 *
 *    slow
 *         fast
 * 3 -> 2 -> 0 -> null
 *
 * fast moves at 2 spot so if loop it should end up a 2 so we pointer at 2
 *
 *         slow
 *               fast
 * 3 -> 2 -> 0 -> |
 *      /\        |
 *      ||        |
 *      ||________|
 *     fast
 *
 * so we can loop through the linked list until fast and slow pointers
 * match position
 *
 *
 * output: and return true if the match else false
 */

import { LinkedListNode } from "../../../util/LinkedListMaker"

export const hasCycle = (head: LinkedListNode | null): boolean => {
  if (!head || !head.next) {
    return false
  }

  let slow: LinkedListNode | null = head
  let fast: LinkedListNode | null = head

  while (fast !== null && fast.next !== null) {
    slow = slow!.next
    fast = fast.next.next

    if (slow === fast) {
      return true // Cycle detected
    }
  }

  return false // No cycle found
}

// // Example usage:
// const example1 = new LinkedListNode(3)
// example1.next = new LinkedListNode(2)
// example1.next.next = new LinkedListNode(0)
// example1.next.next.next = new LinkedListNode(-4)
// example1.next.next.next.next = example1.next // creating a cycle

// console.log(hasCycle(example1)) // Output: true

// const example2 = new LinkedListNode(1)
// example2.next = new LinkedListNode(2)
// example2.next.next = example2 // creating a cycle

// console.log(hasCycle(example2)) // Output: true

// const example3 = new LinkedListNode(1)

// console.log(hasCycle(example3)) // Output: false

// // actual linked list
// const example4 = new LinkedListNode(3)
// example4.next = new LinkedListNode(2)
// example4.next.next = new LinkedListNode(0)
// example4.next.next.next = new LinkedListNode(-4)
// console.log(hasCycle(example4)) // Output: false
