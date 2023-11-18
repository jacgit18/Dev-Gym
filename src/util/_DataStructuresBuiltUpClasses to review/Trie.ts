class TrieNode {
  value: any
  isEnd: boolean
  arr: (TrieNode | null)[]

  constructor() {
    this.value = undefined
    this.isEnd = false
    this.arr = new Array(26).fill(null)
  }
}

class TrieTree {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string, value: any): void {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      const index = parseInt(word[i], 36) - 10

      if (node.arr[index] === null) {
        const temp = new TrieNode()
        node.arr[index] = temp
        node = temp
      } else {
        node = node.arr[index] as TrieNode
      }
    }
    node.isEnd = true
    node.value = value
  }

  getRoot(): TrieNode {
    return this.root
  }

  startsWith(prefix: string): void {
    const node = this.searchNode(prefix)
    if (node === null) {
      console.log(false)
    } else {
      this.printStrings(node, "")
      console.log(true)
    }
  }

  printStrings(node: TrieNode, prefix: string): void {
    if (node.isEnd) console.log(prefix)
    for (let i = 0; i < node.arr.length; i++) {
      if (node.arr[i] !== null) {
        const character = String.fromCharCode("a".charCodeAt(0) + i)
        this.printStrings(node.arr[i] as TrieNode, prefix + character)
      }
    }
  }

  searchNode(str: string): TrieNode | null {
    let node = this.root
    for (let i = 0; i < str.length; i++) {
      const index = parseInt(str[i], 36) - 10
      if (node.arr[index] !== null) {
        node = node.arr[index] as TrieNode
      } else {
        return null
      }
    }

    if (node === this.root) return null

    return node
  }
}

// const trieTree = new TrieTree()
// trieTree.insert("asdfasdf", 5)
// trieTree.insert("cdfasdfas", 23)
// trieTree.insert("cdfzsvljsdf", 42)

// let answer = trieTree.searchNode("asdfasdf")
// console.log(answer?.value) // 5
// trieTree.startsWith("cdf")
