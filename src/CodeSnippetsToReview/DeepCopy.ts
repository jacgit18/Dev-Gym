export const deepClone = (obj: any): any => {
  if (typeof obj !== "object" || obj === null) return obj

  // create array or object to hold values
  const newObj: any = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    const value = obj[key]
    // recursive call for nested objects & arrays
    newObj[key] = deepClone(value)
  }
  return newObj
}

// let testArray: number[] = [44, 22]
// const newA: number[] = deepClone(testArray)
// console.log(testArray === newA) // false (reference equality)

// testArray.push(1)
// newA.push(8)
// console.log(newA)
// console.log(testArray === newA) // false (reference equality)
// console.log(testArray)

// let testObj: any = {
//   first: 44,
//   sec: 12,
//   third: { a: 1, b: 2 },
// }
// const objay: any = deepClone(testObj)
// console.log(objay === testObj) // false (reference equality)

// const arr: number[] = Array.from(Array(10).keys())
// console.log(arr)
