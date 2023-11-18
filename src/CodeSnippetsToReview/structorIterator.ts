export function logAllValues(data: any, depth: number = 0) {
  const indent = "  ".repeat(depth) // Indentation for nested structures

  if (Array.isArray(data)) {
    // Iterate through arrays
    for (let i = 0; i < data.length; i++) {
      console.log(`${indent}[${i}]: ${data[i]}`)
      if (typeof data[i] === "object") {
        logAllValues(data[i], depth + 1) // Recursively log nested structures
      }
    }
  } else if (typeof data === "object" && data !== null) {
    // Iterate through objects
    for (const key in data) {
      console.log(`${indent}${key}: ${data[key]}`)
      if (typeof data[key] === "object") {
        logAllValues(data[key], depth + 1) // Recursively log nested structures
      }
    }
  } else {
    // For primitive types (numbers, strings, booleans, etc.)
    console.log(`${indent}${data}`)
  }
}

// Example usage:
const dataToIterate = {
  name: "John",
  age: 30,
  hobbies: ["Reading", "Gardening"],
  address: {
    street: "123 Main St",
    city: "Exampleville",
  },
}

// logAllValues(dataToIterate)
