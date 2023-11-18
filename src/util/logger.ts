export const customLog = (
  type: "log" | "info" | "warn" | "error" | "table",
  pre: string = "",
  arg: string = "",
  post: string = "",
  ...context: any[]
): void => {
  const logMessage = `${pre} ${arg} ${post}`

  context.forEach((item, index) => {
    console.log(`Context ${index + 1}:`)
    console.log(item)
  })

  switch (type) {
    case "log":
      console.log(logMessage)
      break
    case "info":
      console.info(logMessage)
      break
    case "warn":
      console.warn(logMessage)
      break
    case "error":
      console.error(logMessage)
      break
    case "table":
      console.table(logMessage)
      break
    default:
      console.log(logMessage) // Default to log if an invalid type is provided
      break
  }
}

// Usage examples:
customLog("log", "Before:", "Hello", "After", "Additional Context")
customLog('info', 'Info:', 'Some Information', 'Details', 'More Context');
customLog('error', 'Error:', 'Something went wrong', 'Details', 'Error Context');
