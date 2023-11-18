// Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree.

// We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.

// Example 1:

// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
// Output: true
// Explanation:
// The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure).
// Other valid sequences are:
// 0 -> 1 -> 1 -> 0
// 0 -> 0 -> 0

// Example 2:

// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
// Output: false
// Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.

// Example 3:

// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
// Output: false
// Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.

// Constraints:

// 1 <= arr.length <= 5000
// 0 <= arr[i] <= 9
// Each node's value is between [0 - 9].

import { TreeNode } from "../../../util/BinaryTreeMaker"

export const isValidSequence = (root: TreeNode | null, arr: number[]): boolean => {
  return true
}

// Example usage:
const root1 = new TreeNode(
  0,
  new TreeNode(
    1,
    new TreeNode(0, null, new TreeNode(1)),
    new TreeNode(1, new TreeNode(0), new TreeNode(0)),
  ),
  new TreeNode(0, null, new TreeNode(0)),
)

const arr1 = [0, 1, 0, 1]

const root2 = new TreeNode(
  0,
  new TreeNode(
    1,
    new TreeNode(0, null, new TreeNode(1)),
    new TreeNode(1, new TreeNode(0), new TreeNode(0)),
  ),
  new TreeNode(0, null, new TreeNode(0)),
)

const arr2 = [0, 0, 1]

const root3 = new TreeNode(
  0,
  new TreeNode(
    1,
    new TreeNode(0, null, new TreeNode(1)),
    new TreeNode(1, new TreeNode(0), new TreeNode(0)),
  ),
  new TreeNode(0, null, new TreeNode(0)),
)

const arr3 = [0, 1, 1]

// console.log(isValidSequence(root1, arr1)) // Output: true
// console.log(isValidSequence(root2, arr2)) // Output: false
// console.log(isValidSequence(root3, arr3)) // Output: false
