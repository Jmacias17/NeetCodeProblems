import twoSum from './problems/twoSum';
import hasDuplicate from './problems/hasDuplicate';
import isAnagram from './problems/isAnagram';
import groupAnagrams from './problems/groupAnagrams.js';


import runTwoSumTests from './testcases/twoSumTester';
import runHasDuplicateTests from './testcases/hasDuplicateTester'
import runIsAnagramTests from './testcases/isAnagramTester';
import runGroupAnagramTests from './testcases/groupAnagramsTester.js';


const problemRegistry = {
  twoSum: {
    solution: twoSum,
    tester: runTwoSumTests,
  },
  hasDuplicate: {
    solution: hasDuplicate,
    tester: runHasDuplicateTests,
  },
  isAnagram: {
    solution: isAnagram,
    tester: runIsAnagramTests,
  },
  groupAnagrams: {
    solution: groupAnagrams,
    tester: runGroupAnagramTests,
  },
};

export default problemRegistry;
