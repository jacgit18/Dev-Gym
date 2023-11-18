class NodeHs {
  [key: string]: any
  next: NodeHs | null

  constructor(key: string, value: any) {
    this[key] = value
    this.next = null
  }
}

class List {
  head?: NodeHs
  count: number

  constructor(node?: NodeHs) {
    this.head = node
    this.count = node ? 1 : 0
  }
}

class HashTable {
  storage: List[]
  limit: number
  count: number

  constructor(limit: number) {
    this.storage = new Array(limit).fill(null).map(() => new List())
    this.limit = limit || 50
    this.count = 0
  }

  makeHash(str: string): number {
    let hash = 0
    let limit = this.limit
    let letter: string

    for (let i = 0; i < str.length; i++) {
      letter = str[i]
      hash = (hash << 5) + letter.charCodeAt(0)
      hash = (hash & hash) >>> 0 // Ensure a positive hash value
      hash = hash % limit
    }

    return hash
  }

  insert(key: string, value: any): string {
    let index = this.makeHash(key)
    let bucket = this.storage[index]
    let item = new NodeHs(key, value)

    if (!bucket.head) {
      bucket.head = item
      bucket.count++
      this.count++

      return "New bucket created"
    } else {
      let current = bucket.head

      while (current.next) {
        current = current.next
      }

      current.next = item
      bucket.count++
      this.count++

      return "New item placed in bucket at position " + bucket.count
    }
  }

  update(key: string, value: any, i?: number): string {
    let pos = i || null
    let index = this.makeHash(key)
    let bucket = this.storage[index]
    let item = new NodeHs(key, value)

    if (!bucket.head) {
      bucket.head = item
      bucket.count++
      this.count++

      return "New Bucket created"
    } else if (i && i >= bucket.count) {
      return "Update position is greater than bucket list length"
    } else {
      let current = bucket.head

      if (!i || i === 1) {
        current[key] = value
      } else {
        let n = 1

        while (n < pos!) {
          // Use non-null assertion here
          current = current.next!
          n++
        }

        current[key] = value

        return "Item updated at position " + pos
      }

      // Add a default return statement
      return "Update completed" // Change this based on your logic
    }
  }

  retrieve(key: string, i?: number): any {
    let pos = i || null
    let index = this.makeHash(key)
    let bucket = this.storage[index]

    if (!bucket.head) {
      return "Item not found"
    }

    if (pos && pos > bucket.count) {
      return "Retrieval position is greater than bucket length"
    }

    if (!pos || pos === 1) {
      return bucket.head[key] // Return the value only, can be modified
    }

    let n = 1
    let current = bucket.head

    while (n < pos) {
      current = current.next!
      n++
    }

    return current[key]
  }

  remove(key: string, i?: number): string {
    let pos = i || null
    let index = this.makeHash(key)
    let bucket = this.storage[index]

    if (!bucket.head) {
      return "Bucket not found"
    }

    if (pos && pos < bucket.count) {
      return "Position argument is longer than the length of the bucket"
    }

    let current = bucket.head
    let previous: NodeHs | null = null // Initialize 'previous' to null

    if (!pos || pos === 1) {
      if (bucket.count === 1) {
        this.storage.splice(index, 1)
        this.count--

        return "Hash table spliced at hash index"
      }

      bucket.head = current.next!
      bucket.count--
      this.count--

      return "Linked list head repositioned"
    }

    let n = 1

    while (n < pos) {
      previous = current
      current = current.next!
      n++
    }

    if (previous) {
      previous.next = current.next!
      bucket.count--
      this.count--

      return "Linked list item removed at position " + pos
    } else {
      // Handle the case where 'previous' is still null
      return "Linked list item not removed"
    }
  }
}

/* Examples */
// const hash = new HashTable(50)

// hash.insert("James Hamann", 30)
// hash.insert("James Hamann", 35)

// console.log(hash.retrieve("James Hamann"))
