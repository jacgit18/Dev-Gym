const dict: FlattenObject = require("./dict")

interface FlattenObject {
  [key: string]: number | string | boolean | FlattenObject | FlattenObject[]
}

export const flattenObject = (obj: FlattenObject): FlattenObject => {
  let result: FlattenObject = {}

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (Array.isArray(obj[key])) {
        // Flatten array items
        const arrayItems = obj[key] as FlattenObject[]
        arrayItems.forEach((item, index) => {
          result[`${key}.${index}`] = item
        })
      } else {
        // Handle nested objects
        const flattenedSubObject = flattenObject(obj[key] as FlattenObject)
        for (const subKey in flattenedSubObject) {
          result[`${key}.${subKey}`] = flattenedSubObject[subKey]
        }
      }
    } else {
      // Handle primitive types
      result[key] = obj[key]
    }
  }

  return result
}

// const flattenedObject = flattenObject(dict)
// console.log(flattenedObject)
