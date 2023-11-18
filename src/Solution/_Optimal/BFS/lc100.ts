// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

import { TreeNode } from "../../../util/BinaryTreeMaker"

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) {
    return true
  }

  if (!p || !q || p.value !== q.value) {
    return false
  }

  const queueP: (TreeNode | null)[] = [p]
  const queueQ: (TreeNode | null)[] = [q]

  while (queueP.length && queueQ.length) {
    const nodeP = queueP.shift()
    const nodeQ = queueQ.shift()

    if (!nodeP && !nodeQ) {
      continue
    }

    if (!nodeP || !nodeQ || nodeP.value !== nodeQ.value) {
      return false
    }

    queueP.push(nodeP.left, nodeP.right)
    queueQ.push(nodeQ.left, nodeQ.right)
  }

  return true
}

// // Example usage:
// const tree1 = new TreeNode(1)
// tree1.left = new TreeNode(2)
// tree1.right = new TreeNode(3)

// const tree2 = new TreeNode(1)
// tree2.left = new TreeNode(2)
// tree2.right = new TreeNode(3)

// console.log(isSameTree(tree1, tree2)) // Output: true
