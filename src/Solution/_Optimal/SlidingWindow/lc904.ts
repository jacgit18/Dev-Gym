// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.

// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].

// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].

// Constraints:

// 1 <= fruits.length <= 105
// 0 <= fruits[i] < fruits.length

export const totalFruit = (fruits: number[]): number => {
  let maxFruits = 0
  let left = 0
  const fruitMap: Map<number, number> = new Map()

  for (let right = 0; right < fruits.length; right++) {
    const currentFruit = fruits[right]
    fruitMap.set(currentFruit, (fruitMap.get(currentFruit) || 0) + 1)

    while (fruitMap.size > 2) {
      const leftFruit = fruits[left]
      fruitMap.set(leftFruit, fruitMap.get(leftFruit)! - 1)
      if (fruitMap.get(leftFruit) === 0) {
        fruitMap.delete(leftFruit)
      }
      left++
    }

    maxFruits = Math.max(maxFruits, right - left + 1)
  }

  return maxFruits
}

// Example usage:
// const fruits1 = [1, 2, 1]
// console.log(totalFruit(fruits1)) // Output: 3

// const fruits2 = [0, 1, 2, 2]
// console.log(totalFruit(fruits2)) // Output: 3

// const fruits3 = [1, 2, 3, 2, 2]
// console.log(totalFruit(fruits3)) // Output: 4
