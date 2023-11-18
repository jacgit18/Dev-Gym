// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

import { TreeNode } from "../../../util/BinaryTreeMaker"

export const levelOrderTraversal = (root: TreeNode | null): number[][] => {
  return [[0]]
}

// Example usage:
const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

// console.log(levelOrderTraversal(tree)) // Output: [[3],[9,20],[15,7]]
