// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Example 1:

// Input: root = [1,2,3,4,5,null,7]
// Output: [1,#,2,3,#,4,5,7,#]
// Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// Example 2:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 6000].
// -100 <= Node.val <= 100

class NodeDiff {
  val: number
  left: NodeDiff | null
  right: NodeDiff | null
  next: NodeDiff | null

  constructor(
    val: number,
    left: NodeDiff | null = null,
    right: NodeDiff | null = null,
    next: NodeDiff | null = null,
  ) {
    this.val = val
    this.left = left
    this.right = right
    this.next = next
  }
}

export const connect = (root: NodeDiff | null): NodeDiff | null => {
  if (!root) {
    return null
  }

  let queue: NodeDiff[] = [root]

  while (queue.length > 0) {
    let levelSize = queue.length

    for (let i = 0; i < levelSize; i++) {
      let current = queue.shift()!

      if (i < levelSize - 1) {
        current.next = queue[0]
      }

      if (current.left) {
        queue.push(current.left)
      }

      if (current.right) {
        queue.push(current.right)
      }
    }
  }

  return root
}

// Example usage:
// const rootNEW = new NodeDiff(
//   1,
//   new NodeDiff(2, new NodeDiff(4), new NodeDiff(5)),
//   new NodeDiff(3, null, new NodeDiff(7)),
// )

// const connectedRoot = connect(rootNEW)

// Access connected nodes through the 'next' pointers.
