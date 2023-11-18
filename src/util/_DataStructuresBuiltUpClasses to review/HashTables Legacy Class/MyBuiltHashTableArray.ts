class MyHashTable {
  private buckets: Array<{ key: string; value: any }[]>
  private collisions: number

  constructor(initialCapacity: number = 2) {
    this.buckets = new Array(initialCapacity)
    this.collisions = 0
  }

  set(key: string, value: any): MyHashTable {
    const bucketIndex = this.getIndex(key)

    if (this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({ key, value })

      if (this.buckets[bucketIndex].length > 1) {
        this.collisions++
      }
    } else {
      this.buckets[bucketIndex] = [{ key, value }]
    }

    return this
  }

  get(key: string): any | undefined {
    const bucketIndex = this.getIndex(key)

    if (this.buckets[bucketIndex]) {
      for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
        const entry = this.buckets[bucketIndex][arrayIndex]

        if (entry.key === key) {
          return entry.value
        }
      }
    }

    return undefined
  }

  hash(key: string): number {
    let hashValue = 0
    const stringTypeKey = `${key}${typeof key}`

    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index)
      hashValue += charCode << (index * 8)
    }

    return hashValue
  }

  getIndex(key: string): number {
    const indexHash = this.hash(key)
    const index = indexHash % this.buckets.length
    return index
  }
}

// // Create an object of type hash table
// const ht = new MyHashTable()

// try {
//   console.log(ht.set("grapes", 10000))
//   console.log(ht.set("pear", 4))
//   console.log(ht.get("grapes"))
//   console.log(ht.getIndex("grapes"))
//   console.log(ht.hash("grapes"))
// } catch (error) {
//   // Handle errors if needed
// }
