import twoSum from './problems/twoSum';
import hasDuplicate from './problems/hasDuplicate';
import isAnagram from './problems/isAnagram';


import runTwoSumTests from './testcases/twoSumTester';
import runHasDuplicateTests from './testcases/hasDuplicateTester'
import runIsAnagramTests from './testcases/isAnagramTester';


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
  }
};

export default problemRegistry;
