/**
 * Given an array of integers nums and an integer target, return the indices i and j
 * such that nums[i] + nums[j] == target and i != j.
 *
 * You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
 * Return the answer with the smaller index first.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(nums, target) {
    let result = null;
  
    nums.forEach((value, index) => {
      nums.forEach((value2, index2) => {
        // ✅ we need different indices and a sum match
        if (index !== index2 && value + value2 === target) {
          // ensure smaller index first
          result = index < index2 ? [index, index2] : [index2, index];
        }
      });
    });
  
    return result !== null ? result : 'No solution';
  }
  
