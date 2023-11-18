// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

import { TreeNode } from "../../../util/BinaryTreeMaker"

export const isSymmetric = (root: TreeNode | null): boolean => {
  return true
}

// Example usage:
const tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(2)
tree1.left.left = new TreeNode(3)
tree1.left.right = new TreeNode(4)
tree1.right.left = new TreeNode(4)
tree1.right.right = new TreeNode(3)

// console.log(isSymmetric(tree1)) // Output: true

const tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(2)
tree2.left.right = new TreeNode(3)
tree2.right.right = new TreeNode(3)

// console.log(isSymmetric(tree2)) // Output: false
