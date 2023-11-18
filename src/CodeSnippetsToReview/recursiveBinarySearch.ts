export const searchBin = (nums: number[], target: number): number => {
  let startIndex = 0
  let endIndex = nums.length - 1

  const recursiveSearch = (
    nums: number[],
    target: number,
    startIndex: number,
    endIndex: number,
  ): number => {
    let midIndex = Math.floor((startIndex + endIndex) / 2)
    let midValue = nums[midIndex]

    if (startIndex === endIndex) {
      if (midValue === target) {
        return midIndex
      } else {
        return -1
      }
    } else if (target > midValue) {
      return recursiveSearch(nums, target, midIndex + 1, endIndex)
    } else if (target < midValue) {
      return recursiveSearch(nums, target, startIndex, midIndex)
    } else {
      return midIndex
    }
  }

  return recursiveSearch(nums, target, startIndex, endIndex)
}

// console.log(searchBin([-1, 0, 3, 5, 9, 12], 9))
