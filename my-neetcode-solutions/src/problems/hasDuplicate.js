/**
 * Given an integer array nums, return true if any value appears more
 * than once in the array, otherwise return false.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
export default function hasDuplicate(nums) {
    let checker = [];
  
    for (let i = 0; i < nums.length; i++) {
      for (const checkNum of checker) {
        if (checkNum === nums[i]) {
          return true;
        }
      }
      checker.push(nums[i]); // ✅ Always add current number
    }
  
    return false;
  }
  
  
