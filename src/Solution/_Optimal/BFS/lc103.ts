// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

import { TreeNode } from "../../../util/BinaryTreeMaker"

export const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return []

  const result: number[][] = []
  let level: number[] = []
  let queue: TreeNode[] = [root]
  let reverseOrder = false

  while (queue.length > 0) {
    const levelSize = queue.length

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()!

      if (reverseOrder) {
        level.unshift(currentNode.value)
      } else {
        level.push(currentNode.value)
      }

      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }

    result.push(level)
    level = []
    reverseOrder = !reverseOrder
  }

  return result
}

// Example usage:
// const root1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
// console.log(zigzagLevelOrder(root1)) // Output: [[3], [20, 9], [15, 7]]

// const root2 = new TreeNode(1)
// console.log(zigzagLevelOrder(root2)) // Output: [[1]]

// const root3 = null
// console.log(zigzagLevelOrder(root3)) // Output: []
