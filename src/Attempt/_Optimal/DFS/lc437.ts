// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

// Example 1:

// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.

// Example 2:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3

// Constraints:

// The number of nodes in the tree is in the range [0, 1000].
// -109 <= Node.val <= 109
// -1000 <= targetSum <= 1000

import { TreeNode } from "../../../util/BinaryTreeMaker"

export const pathSum = (root: TreeNode | null, targetSum: number): number => {
  return 0
}

// Example usage:
const root1 = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3, new TreeNode(3), new TreeNode(-2)), null),
  new TreeNode(-3, null, new TreeNode(11)),
)

const targetSum1 = 8

const root2 = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))),
)

const targetSum2 = 22

// console.log(pathSum(root1, targetSum1)) // Output: 3
// console.log(pathSum(root2, targetSum2)) // Output: 3
