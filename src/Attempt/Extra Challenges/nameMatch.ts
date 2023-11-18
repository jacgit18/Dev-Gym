/******************
 * Name Matching
 *
 * At Checkr, one of the most important aspects of our work is accurately matching records
 * to candidates. One of the ways that we do this is by comparing the name on a given record
 * to a list of known aliases for the candidate. In this exercise, we will implement a
 * `nameMatch` method that accepts the list of known aliases as well as the name returned
 * on a record. It should return true if the name matches any of the aliases and false otherwise.
 *
 * The nameMatch method will be required to pass the following tests:
 *
 * 1. Exact match
 *
 * knownAliases = ["Alphonse Gabriel Capone", "Al Capone", "Mary Francis Capone"]
 * nameMatch(knownAliases, "Alphonse Gabriel Capone") => true
 * nameMatch(knownAliases, "Al Capone") => true
 * nameMatch(knownAliases, "Alphonse Francis Capone") => false
 * nameMatch(knownAliases, "Alphonse Gabriel Smith") => false
 * nameMatch(knownAliases, "Mary Gabriel Capone") => false
 *
 *
 * 2. Middle name missing (on alias)
 *
 * knownAliases = ["Alphonse Capone"]
 * nameMatch(knownAliases, "Alphonse Gabriel Capone") => true
 * nameMatch(knownAliases, "Alphonse Francis Capone") => true
 * nameMatch(knownAliases, "Alexander Capone") => false
 *
 *
 * 3. Middle name missing (on record name)
 *
 * knownAliases = ["Alphonse Gabriel Capone"]
 * nameMatch(knownAliases, "Alphonse Capone") => true
 * nameMatch(knownAliases, "Alphonse Francis Capone") => false
 * nameMatch(knownAliases, "Alexander Capone") => false
 *
 *
 * 4. More middle name tests
 * These serve as a sanity check of your implementation of cases 2 and 3
 *
 * knownAliases = ["Alphonse Gabriel Capone", "Alphonse Francis Capone"]
 * nameMatch(knownAliases, "Alphonse Gabriel Capone") => true
 * nameMatch(knownAliases, "Alphonse Francis Capone") => true
 * nameMatch(knownAliases, "Alphonse Edward Capone") => false
 *
 *
 * 5. Middle initial matches middle name
 *
 * knownAliases = ["Alphonse Gabriel Capone", "Alphonse F Capone"]
 * nameMatch(knownAliases, "Alphonse G Capone") => true
 * nameMatch(knownAliases, "Alphonse Francis Capone") => true
 * nameMatch(knownAliases, "Alphonse E Capone") => false
 * nameMatch(knownAliases, "Alphonse Edward Capone") => false
 * nameMatch(knownAliases, "Alphonse Gregory Capone") => false
 */

export const nameMatch = (knownAliases: string[], recordName: string): boolean => {
  return true
}

/** Tests **/

function assertEqual(expected: boolean, result: boolean, errorMessage: string): void {
  if (result !== expected) {
    // console.log(errorMessage)
    // console.log(`expected: ${expected}`)
    // console.log(`actual: ${result}`)
    // console.log("")
  }
}

function testRun(): void {
  let knownAliases: string[]

  knownAliases = ["Alphonse Gabriel Capone", "Al Capone", "Mary Francis Capone"]
  assertEqual(true, nameMatch(knownAliases, "Alphonse Gabriel Capone"), "error 1.1")
  assertEqual(true, nameMatch(knownAliases, "Al Capone"), "error 1.2")
  assertEqual(false, nameMatch(knownAliases, "Alphonse Francis Capone"), "error 1.3")
  assertEqual(false, nameMatch(knownAliases, "Alphonse Gabriel Smith"), "error 1.4")
  assertEqual(false, nameMatch(knownAliases, "Mary Gabriel Capone"), "error 1.5")

  knownAliases = ["Alphonse Capone"]
  assertEqual(true, nameMatch(knownAliases, "Alphonse Gabriel Capone"), "error 2.1")
  assertEqual(true, nameMatch(knownAliases, "Alphonse Francis Capone"), "error 2.2")
  assertEqual(false, nameMatch(knownAliases, "Alexander Capone"), "error 2.3")

  knownAliases = ["Alphonse Gabriel Capone"]
  assertEqual(true, nameMatch(knownAliases, "Alphonse Capone"), "error 3.1")
  assertEqual(false, nameMatch(knownAliases, "Alphonse Francis Capone"), "error 3.2")
  assertEqual(false, nameMatch(knownAliases, "Alphonse Edward Capone"), "error 3.3")

  knownAliases = ["Alphonse Gabriel Capone", "Alphonse Francis Capone"]
  assertEqual(true, nameMatch(knownAliases, "Alphonse Gabriel Capone"), "error 4.1")
  assertEqual(true, nameMatch(knownAliases, "Alphonse Francis Capone"), "error 4.2")
  assertEqual(false, nameMatch(knownAliases, "Alphonse Edward Capone"), "error 4.3")

  knownAliases = ["Alphonse Gabriel Capone", "Alphonse F Capone"]
  assertEqual(true, nameMatch(knownAliases, "Alphonse G Capone"), "error 5.1")
  assertEqual(true, nameMatch(knownAliases, "Alphonse Francis Capone"), "error 5.2")
  assertEqual(false, nameMatch(knownAliases, "Alphonse E Capone"), "error 5.3")
  assertEqual(false, nameMatch(knownAliases, "Alphonse Edward Capone"), "error 5.4")
  assertEqual(false, nameMatch(knownAliases, "Alphonse Gregory Capone"), "error 5.5")

  // console.log("Test run finished")
}

// testRun()
