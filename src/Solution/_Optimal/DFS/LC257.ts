// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Example 1:

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:

// Input: root = [1]
// Output: ["1"]

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

import { TreeNode } from "../../../util/BinaryTreeMaker"

export const binaryTreePaths = (root: TreeNode | null): string[] => {
  const result: string[] = []

  function dfs(node: TreeNode | null, path: string) {
    if (!node) {
      return
    }

    // Construct the current path
    const currentPath = path === "" ? `${node.value}` : `${path}->${node.value}`

    if (!node.left && !node.right) {
      // If leaf node, add the current path to the result
      result.push(currentPath)
      return
    }

    // Recursively explore left and right subtrees with the updated path
    dfs(node.left, currentPath)
    dfs(node.right, currentPath)
  }

  dfs(root, "")
  return result
}

// Example usage:
// const root1 = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3))
// const root2 = new TreeNode(1)

// console.log(binaryTreePaths(root1)) // Output: ["1->2->5", "1->3"]
// console.log(binaryTreePaths(root2)) // Output: ["1"]
