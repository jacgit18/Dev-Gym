class Noderr {
  data: number
  left: Noderr | null
  right: Noderr | null

  constructor(data: number, left: Noderr | null = null, right: Noderr | null = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BinaryTree {
  root: Noderr | null

  constructor() {
    this.root = null
  }

  add(data: number): void {
    const node = this.root
    if (node === null) {
      this.root = new Noderr(data)
    } else {
      const searchTree = function (currentNode: Noderr | null): Noderr {
        if (data <= currentNode!.data) {
          if (currentNode!.left === null) {
            currentNode!.left = new Noderr(data)
            return currentNode!
          } else {
            return searchTree(currentNode!.left)
          }
        } else if (data >= currentNode!.data) {
          if (currentNode!.right === null) {
            currentNode!.right = new Noderr(data)
            return currentNode!
          } else {
            return searchTree(currentNode!.right)
          }
        } else {
          return currentNode!
        }
      }
      searchTree(node)
    }
  }

  findMin(): number | null {
    let current: Noderr | null = this.root
    while (current!.left !== null) {
      current = current!.left
    }
    return current !== null ? current.data : null
  }

  findMax(): number | null {
    let current: Noderr | null = this.root
    while (current!.right !== null) {
      current = current!.right
    }
    return current !== null ? current.data : null
  }

  find(data: number): Noderr | null {
    let current: Noderr | null = this.root
    while (current!.data !== data) {
      if (data < current!.data) {
        current = current!.left
      } else {
        current = current!.right
      }
      if (current === null) {
        return null
      }
    }
    return current
  }

  isPresent(data: number): boolean {
    let current: Noderr | null = this.root
    while (current) {
      if (data === current.data) {
        return true
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  remove(data: number): void {
    const removeNode = function (node: Noderr | null, data: number): Noderr | null {
      if (node === null) {
        return null
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null
        }
        if (node.left === null) {
          return node.right
        }
        if (node.right === null) {
          return node.left
        }
        let tempNode: Noderr | null = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }

  isBalanced(): boolean {
    return this.findMinHeight() >= this.findMaxHeight() - 1
  }

  findMinHeight(node: Noderr | null = this.root): number {
    if (node === null) {
      return -1
    }
    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)
    return left < right ? left + 1 : right + 1
  }

  findMaxHeight(node: Noderr | null = this.root): number {
    if (node === null) {
      return -1
    }
    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)
    return left > right ? left + 1 : right + 1
  }

  inOrder(): number[] | null {
    if (this.root === null) {
      return null
    } else {
      const result: number[] = []
      const traverseInOrder = function (node: Noderr | null): void {
        node!.left && traverseInOrder(node!.left)
        result.push(node!.data)
        node!.right && traverseInOrder(node!.right)
      }
      traverseInOrder(this.root)
      return result
    }
  }

  preOrder(): number[] | null {
    if (this.root === null) {
      return null
    } else {
      const result: number[] = []
      const traversePreOrder = function (node: Noderr | null): void {
        result.push(node!.data)
        node!.left && traversePreOrder(node!.left)
        node!.right && traversePreOrder(node!.right)
      }
      traversePreOrder(this.root)
      return result
    }
  }

  postOrder(): number[] | null {
    if (this.root === null) {
      return null
    } else {
      const result: number[] = []
      const traversePostOrder = function (node: Noderr | null): void {
        node!.left && traversePostOrder(node!.left)
        node!.right && traversePostOrder(node!.right)
        result.push(node!.data)
      }
      traversePostOrder(this.root)
      return result
    }
  }

  levelOrder(): number[] | null {
    const result: number[] = []
    const queue: Noderr[] = []

    if (this.root !== null) {
      queue.push(this.root)

      while (queue.length > 0) {
        const node: Noderr = queue.shift()!
        result.push(node.data)

        if (node.left !== null) {
          queue.push(node.left)
        }
        if (node.right !== null) {
          queue.push(node.right)
        }
      }

      return result
    } else {
      return null
    }
  }
}

// const treeTwo = new BinaryTree()
// treeTwo.add(12)
// treeTwo.add(7)
// treeTwo.add(9)
// treeTwo.add(0)
// treeTwo.add(1)
// treeTwo.add(10)
// treeTwo.add(5)
// console.log(treeTwo.levelOrder())
