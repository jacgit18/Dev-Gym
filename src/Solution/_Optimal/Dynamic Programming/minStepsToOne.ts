export const minStepsToOne = (n: number): number => {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer")
  }

  function recurse(curr: number): number {
    if (curr === 1) {
      return 0
    }

    let steps = recurse(curr - 1)

    if (curr % 2 === 0) {
      let divby2 = recurse(curr / 2)
      steps = Math.min(steps, divby2)
    }

    if (curr % 3 === 0) {
      let divby3 = recurse(curr / 3)
      steps = Math.min(steps, divby3)
    }

    return 1 + steps
  }

  let res = recurse(n)
  return res
}

export const minStepsToOneMemo = (n: number): number => {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer")
  }

  let cache: { [key: number]: number } = {}

  function recurse(curr: number): number {
    if (curr === 1) {
      return 0
    }

    if (curr in cache) {
      return cache[curr]
    }

    let steps = recurse(curr - 1)

    if (curr % 2 === 0) {
      let divby2 = recurse(curr / 2)
      steps = Math.min(steps, divby2)
    }

    if (curr % 3 === 0) {
      let divby3 = recurse(curr / 3)
      steps = Math.min(steps, divby3)
    }

    let result = 1 + steps
    cache[curr] = result
    return result
  }

  let res = recurse(n)
  return res
}

export const minStepsToOneTab = (n: number): number => {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer")
  }

  let tab = new Array(n + 1)
  tab[1] = 0

  for (let curr = 2; curr <= n; curr++) {
    let steps = tab[curr - 1]

    if (curr % 2 === 0) {
      let divby2 = tab[curr / 2]
      steps = Math.min(steps, divby2)
    }

    if (curr % 3 === 0) {
      let divby3 = tab[curr / 3]
      steps = Math.min(steps, divby3)
    }

    let result = 1 + steps
    tab[curr] = result
  }

  return tab[n]
}

// console.time("Brute Force Recursion: ")
// console.log(minStepsToOne(10))
// console.timeEnd("Brute Force Recursion: ")

// console.time("Memoization: ")
// console.log(minStepsToOneMemo(5678))
// console.timeEnd("Memoization: ")

// console.time("Tabulation: ")
// console.log(minStepsToOneTab(5678))
// console.timeEnd("Tabulation: ")
