// Problem Statement #

// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

// Example 1:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Explanation: There are two paths whose sum equals targetSum:
// 5 + 4 + 11 + 2 = 22
// 5 + 8 + 4 + 5 = 22

// Example 2:

// Input: root = [1,2,3], targetSum = 5
// Output: []

// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

// Example
// -----
// targetSum = 12
// Output = [ [ 1, 7, 4 ], [ 1, 9, 2 ] ]
//      1
//     / \
//    7   9
//  / |   | \
// 4  5   2  7

import { TreeNode } from "../../../util/BinaryTreeMaker"

export const pathSumTwo = (root: TreeNode | null, targetSum: number): number[][] => {
  return [[0]]
}

// Example usage:
const root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1))),
)

const targetSum1 = 22
const targetSum2 = 5
const targetSum3 = 0

// console.log(pathSumTwo(root, targetSum1)) // Output: [[5,4,11,2],[5,8,4,5]]
// console.log(pathSumTwo(root, targetSum2)) // Output: []
// console.log(pathSumTwo(new TreeNode(1, new TreeNode(2)), targetSum3)) // Output: []
