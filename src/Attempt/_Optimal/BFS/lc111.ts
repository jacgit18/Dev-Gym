// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

import { TreeNode } from "../../../util/BinaryTreeMaker"

export const minDepth = (root: TreeNode | null): number => {
  return 0
}

// Example usage:
// const root1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
// console.log(minDepth(root1)) // Output: 2

// const root2 = new TreeNode(
//   2,
//   null,
//   new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))),
// )
// console.log(minDepth(root2)) // Output: 5
