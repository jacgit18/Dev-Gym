// 1. Using for...in Loop
export function logObjectUsingForIn(obj: Record<string, any>): void {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`)
    }
  }
}

// 2. Using Object.keys()
export function logObjectUsingObjectKeys(obj: Record<string, any>): void {
  const keys = Object.keys(obj)
  keys.forEach((key) => {
    console.log(`${key}: ${obj[key]}`)
  })
}

// 3. Using Object.values()
export function logObjectUsingObjectValues(obj: Record<string, any>): void {
  const values = Object.values(obj)
  values.forEach((value) => {
    console.log(value)
  })
}

// 4. Using Object.entries()
export function logObjectUsingObjectEntries(obj: Record<string, any>): void {
  const entries = Object.entries(obj)
  entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
  })
}

// 5. Using Object.getOwnPropertyNames()
export function logObjectUsingObjectPropertyNames(obj: Record<string, any>): void {
  const propertyNames = Object.getOwnPropertyNames(obj)
  propertyNames.forEach((name) => {
    console.log(`${name}: ${obj[name]}`)
  })
}

// 6. Using a for...of Loop (ES6)
export function logObjectUsingForOf(obj: Record<string, any>): void {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
  }
}

// 7. Using forEach() with Object.keys() or Object.entries() (ES6)
export function logObjectUsingForEach(obj: Record<string, any>): void {
  Object.keys(obj).forEach((key) => {
    console.log(`${key}: ${obj[key]}`)
  })
}

// import * as logObjectFunctions from './logObjectFunctions';

// const obj: Record<string, any> = { /* your object here */ };

// logObjectFunctions.logObjectUsingForIn(obj);
