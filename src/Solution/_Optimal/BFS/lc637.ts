// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].

// Example 2:

// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

import { TreeNode } from "../../../util/BinaryTreeMaker"

export const averageOfLevels = (root: TreeNode | null): number[] => {
  if (!root) {
    return []
  }

  let result: number[] = []
  let queue: TreeNode[] = [root]

  while (queue.length > 0) {
    let levelSize = queue.length
    let levelSum = 0

    for (let i = 0; i < levelSize; i++) {
      let current = queue.shift()!
      levelSum += current.value

      if (current.left) {
        queue.push(current.left)
      }

      if (current.right) {
        queue.push(current.right)
      }
    }

    result.push(levelSum / levelSize)
  }

  return result
}

// Example usage:
// const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

// const averages = averageOfLevels(root)
// averages will be [3, 14.5, 11]
