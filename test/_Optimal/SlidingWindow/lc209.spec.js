// import { OptimalSlidingWindow as OptimalSlidingWindowAttempt } from "../../../src/routers/OptimalAttempt";
import "mocha";
import { beforeEach } from "mocha";
import chai from "chai";
import {smallest_subarray_with_given_sumAlt} from "../../../src/Solution/_Optimal/SlidingWindow/lc209"

const expect = chai.expect;

/**
 * Type definition for the test function.
 * @typedef {(k: any, arr: any[]) => any} TestFunction
 */

/**
 * Generates test cases for max_subarray_size_k function.
 * @param {TestFunction} maxSubarrayFunction - The max_subarray_size_k function to test.
 * @param {number} k - The value of k.
 * @param {number[]} arr - The input array.
 * @param {string} testName - The name of the test case.
 * @param {number} expected - The expected result.
 */
const generateTestCases = (
  maxSubarrayFunction,
  k,
  arr,
  testName,
  expected
) => {
  describe(`max_subarray_size_k ${testName}`, () => {
    let maxSubFn;

    beforeEach(() => {
      maxSubFn = maxSubarrayFunction;
    });

    it(`should return ${expected} for k = ${k} and arr = [${arr}]`, () => {
      const result = maxSubFn(k, arr);
      console.time(`maxSubarray${testName}`);
      expect(result).equal(expected);
      console.timeEnd(`maxSubarray${testName}`);
    });
  });
};

/**
 * Runs the test cases.
 */
const runTestCases = () => {
  const testCases = [
    { k: 3, arr: [2, 3, 4, 1, 5], expect: 10 },

    // Add more test cases here
  ];

  testCases.forEach((testCase, index) => {
    // generateTestCases(
    //   OptimalSlidingWindowAttempt.lc53,
    //   testCase.k,
    //   testCase.arr,
    //   `Test Case ${index + 1}`,
    //   testCase.expect
    // );

    generateTestCases(
      smallest_subarray_with_given_sumAlt,
      testCase.k,
      testCase.arr,
      `Test Case ${index + 1}`,
      testCase.expect
    );
  });
};

runTestCases();
