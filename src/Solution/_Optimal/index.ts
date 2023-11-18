// Primative type
import { revString } from "./PrimativeType/lc344"

// Two Pointer
// Dynamic Importing: Instead of importing all functions at once,
// you can dynamically import only the functions you need at runtime.
// This can reduce the initial loading time.
// const { pair_with_target_sum_Two_Pointer, pair_with_target_sum_map } = await import("./TwoPointers/lc1");
import { pair_with_target_sum_Two_Pointer, pair_with_target_sum_map } from "./TwoPointers/lc1"
import { maxArea } from "./TwoPointers/lc11"
import { maxProfit } from "./TwoPointers/lc121"
import { isPalindrome } from "./TwoPointers/lc125"
import { threeSum } from "./TwoPointers/lc15"
import { threeSumClosest } from "./TwoPointers/lc16"
import { fourSum } from "./TwoPointers/lc18"
import { threeSumSmaller } from "./TwoPointers/lc259"
import { removeDuplicates } from "./TwoPointers/lc26"
import { characterReplacement } from "./TwoPointers/lc424"
import { findUnsortedSubarray } from "./TwoPointers/lc581"
import { numSubarrayProductLessThanK } from "./TwoPointers/lc713"
import { sortColors } from "./TwoPointers/lc75"
import { backspaceCompare } from "./TwoPointers/lc844"
import { sortedSquares } from "./TwoPointers/lc977"

// Sliding Window
import { longestOnes } from "./SlidingWindow/lc1004"
import {
  smallestSubarrayWithGivenSum,
  smallest_subarray_with_given_sumAlt,
} from "./SlidingWindow/lc209"
import { lengthOfLongestSubstring } from "./SlidingWindow/lc3"
import { findSubstring } from "./SlidingWindow/lc30"
import { longest_substring_with_k_distinct } from "./SlidingWindow/lc340"
import { findAnagrams, findAnagramsTwoPointer } from "./SlidingWindow/lc438"
import { maxSubArray } from "./SlidingWindow/lc53"
import { checkInclusion } from "./SlidingWindow/lc567"
import { minWindow } from "./SlidingWindow/lc76"
import { totalFruit } from "./SlidingWindow/lc904"

// Merge Interval
import { canAttendMeetings } from "./Merge Intervals/lc252"
import { minMeetingRooms } from "./Merge Intervals/lc253"
import { merge } from "./Merge Intervals/lc56"
import { insertInterval } from "./Merge Intervals/lc57"
import { leastInterval } from "./Merge Intervals/lc621"
import { intervalIntersection } from "./Merge Intervals/lc986"

// Subset/ Backtracking pattern
import { robotPaths } from "./Subsets/BacktrackMatrix"
import { matrix } from "./Subsets/MockIntMatrix"
import { sudokuSolver } from "./Subsets/SudokuSolverSolution"
import { letterCombinationsBackTrack } from "./Subsets/lc17"
import { diffWaysToCompute } from "./Subsets/lc241"
import { gameOfLife } from "./Subsets/lc289"
import { combinationSum } from "./Subsets/lc39"
import { findDuplicatesBackTrack, findDuplicatesCyclic } from "./Subsets/lc442"
import { permute } from "./Subsets/lc46"
import { subsets } from "./Subsets/lc78"
import { letterCasePermutation } from "./Subsets/lc784"
import { subsetsWithDup } from "./Subsets/lc90"

// Modified Binary Search
import { findMin } from "./Modified Binary Search/lc153"
import { lengthOfLIS } from "./Modified Binary Search/lc300"
import { searchRanger } from "./Modified Binary Search/lc33"
import { searchRange } from "./Modified Binary Search/lc34"
import { searchInsert } from "./Modified Binary Search/lc35"
import { findClosestElements } from "./Modified Binary Search/lc658"
import { searchInArrayReader } from "./Modified Binary Search/lc702"
import { searchBin } from "./Modified Binary Search/lc704"
import { nextGreatestLetter } from "./Modified Binary Search/lc744"
import { search } from "./Modified Binary Search/lc81"

// Cyclic Sort
import { cyclic_sort } from "./Cyclic Sort/cyclicSortEasy"
import { findKthPositive } from "./Cyclic Sort/lc1539"
import { find_missing_number } from "./Cyclic Sort/lc268"
import { findDuplicate } from "./Cyclic Sort/lc287"
import { firstMissingPositive } from "./Cyclic Sort/lc41"
import { findDuplicates } from "./Cyclic Sort/lc442"
import { findDisappearedNumbers } from "./Cyclic Sort/lc448"
import { findErrorNums } from "./Cyclic Sort/lc645"

// Reverse Linked List
import { reverseList } from "./LinkedList Revesal/lc206"
import { reverse_sub_list } from "./LinkedList Revesal/lc92"

// Fast Slow  Pointer
import { hasCycle } from "./Fast Slow(LinkedList)/lc141CyclicLL"
import { isDoublyCyclic } from "./Fast Slow(LinkedList)/lc141DoubleVer"
import { isHappy } from "./Fast Slow(LinkedList)/lc202"

// BFS
import { isSameTree } from "./BFS/lc100"
import { isSymmetric } from "./BFS/lc101"
import { levelOrderTraversal, levelOrderTraversalRec } from "./BFS/lc102VistAllLevelPureBFS"
import { zigzagLevelOrder } from "./BFS/lc103"
import { maxDepth } from "./BFS/lc104"
import { RecursiveBFSFunc } from "./BFS/lc107"
import { minDepth } from "./BFS/lc111"
import { connect } from "./BFS/lc117"
import { averageOfLevels } from "./BFS/lc637"

// DFS
import { binaryTreePaths } from "./DFS/LC257"
import { hasPathSum } from "./DFS/lc112"
import { pathSumTwo } from "./DFS/lc113"
import { sumNumbers } from "./DFS/lc129"
import { isValidSequence } from "./DFS/lc1430"
import { inorderSuccessor } from "./DFS/lc285"
import { pathSum } from "./DFS/lc437"

// Topological Sort
import { cloneGrapher } from "./Topological Sort Graphs/lc133"

// Dynamic
import { rob } from "./Dynamic Programming/lc198"
import { coinChange } from "./Dynamic Programming/lc322"
import { longestPalindrome } from "./Dynamic Programming/lc5"

// Top K Elements
import { findKthLargest } from "./Top K Elements/lc215"

// K-way Merge
import { mergeKLists } from "./K-way Merge Dynamic Programing/lc23"

// Knapsack
import { findMaxForm } from "./Knapsack Dynamic Programing/lc474"

// Bitwise XOR
import { singleNumber } from "./Bitwise XOR/lc136"

const OptimalPrimatives = {
  lc344: revString.revString1,
}

const OptimalTwoPointerSolution = {
  lc1: pair_with_target_sum_Two_Pointer,
  lc1Alt: pair_with_target_sum_map,
  lc11: maxArea,
  lc15: threeSum,
  lc16: threeSumClosest,
  lc18: fourSum,
  lc26: removeDuplicates,
  lc75: sortColors,
  lc121: maxProfit,
  lc125: isPalindrome,
  lc259: threeSumSmaller,
  lc424: characterReplacement,
  lc581: findUnsortedSubarray,
  lc713: numSubarrayProductLessThanK,
  lc844: backspaceCompare,
  lc977: sortedSquares,
}

const OptimalSlidingWindSolution = {
  lc3: lengthOfLongestSubstring,
  lc30: findSubstring,
  lc53: maxSubArray,
  lc76: minWindow,
  lc209: smallestSubarrayWithGivenSum,
  lc209alt: smallest_subarray_with_given_sumAlt,
  lc340: longest_substring_with_k_distinct,
  lc438: findAnagramsTwoPointer,
  lc438Alt: findAnagrams,
  ls567: checkInclusion,
  lc904: totalFruit,
  lc1004: longestOnes,
}

const MergeInterval = {
  lc56: merge,
  lc57: insertInterval,
  lc252: canAttendMeetings,
  lc253: minMeetingRooms,
  lc621: leastInterval,
  lc986: intervalIntersection,
}

const OptimalSubset = {
  backtrackOne: matrix,
  backtrackTwo: robotPaths,
  sudoku: sudokuSolver,
  lc17: letterCombinationsBackTrack,
  lc39: combinationSum,
  lc46: permute,
  lc78: subsets,
  lc90: subsetsWithDup,
  lc241: diffWaysToCompute,
  lc289: gameOfLife,
  lc442: findDuplicatesBackTrack,
  lc442Alt: findDuplicatesCyclic,
  lc784: letterCasePermutation,
}

const OptimalModifiedBinarySearch = {
  lc33: searchRanger,
  lc34: searchRange,
  lc35: searchInsert,
  lc81: search,
  lc153: findMin,
  lc300: lengthOfLIS,
  lc658: findClosestElements,
  lc702: searchInArrayReader,
  lc704: searchBin,
  lc744: nextGreatestLetter,
}

const OptimalCycSort = {
  sort: cyclic_sort,
  lc41: firstMissingPositive,
  lc268: find_missing_number,
  lc287: findDuplicate,
  lc442: findDuplicates,
  lc448: findDisappearedNumbers,
  lc645: findErrorNums,
  lc1539: findKthPositive,
}

const OptimalRevLinkedList = {
  lc92: reverse_sub_list,
  lc206: reverseList,
}

const OptimalFastSlowPointers = {
  lc141: hasCycle,
  lc141Double: isDoublyCyclic,
  lc202: isHappy,
}

const OptimalBFS = {
  lc100: isSameTree,
  lc101: isSymmetric,
  lc102Iter: levelOrderTraversal,
  lc102Rec: levelOrderTraversalRec,
  lc103: zigzagLevelOrder,
  lc104: maxDepth,
  lc107: RecursiveBFSFunc.levelOrderBottom,
  lc111: minDepth,
  lc117: connect,
  lc637: averageOfLevels,
}

const OptimalDFS = {
  lc112: hasPathSum,
  lc113: pathSumTwo,
  lc129: sumNumbers,
  lc257: binaryTreePaths,
  lc285: inorderSuccessor,
  lc437: pathSum,
  lc1430: isValidSequence,
}

const OptimalTopologicalSort = {
  lc133: cloneGrapher,
}

const OptimalDynamic = {
  lc322: coinChange,
  lc198: rob,
  lc5: longestPalindrome,
}

const OptimalTop_K_Elements = {
  lc215: findKthLargest,
}

const Optimal_KwayMerge = {
  lc23: mergeKLists,
}

const OptimalKnapSack = {
  lc474: findMaxForm,
}

const OptimalBitWiseXOR = {
  lc136: singleNumber,
}

export const combinedOptimalSolutionExports = {
  OptimalPrimatives,
  OptimalTwoPointerSolution,
  OptimalSlidingWindSolution,
  MergeInterval,
  OptimalSubset,
  OptimalModifiedBinarySearch,
  OptimalCycSort,
  OptimalRevLinkedList,
  OptimalFastSlowPointers,
  OptimalBFS,
  OptimalDFS,
  OptimalTopologicalSort,
  OptimalDynamic,
  OptimalTop_K_Elements,
  Optimal_KwayMerge,
  OptimalKnapSack,
  OptimalBitWiseXOR,
}
