const dict: FlattenObject = require("./dict")

interface FlattenObject {
  [key: string]: number | string | boolean | FlattenObject | FlattenObject[]
}

export const flattenObject = (obj: FlattenObject): FlattenObject => {
  return { 0: " " }
}

// const flattenedObject = flattenObject(dict)
// console.log(flattenedObject)
