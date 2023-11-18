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
  const prefixSumCount = new Map<number, number>()
  let totalCount = 0

  function dfs(node: TreeNode | null, currentSum: number) {
    if (!node) {
      return
    }

    // Update the current sum
    currentSum += node.value

    // Check if there is a prefix sum (currentSum - targetSum) in the map
    totalCount += prefixSumCount.get(currentSum - targetSum) || 0

    // Update the map with the current prefix sum
    prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1)

    // Recursively explore left and right subtrees
    dfs(node.left, currentSum)
    dfs(node.right, currentSum)

    // Backtrack: remove the current prefix sum as we backtrack to explore other paths
    prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) - 1)
  }

  dfs(root, 0)
  return totalCount
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
