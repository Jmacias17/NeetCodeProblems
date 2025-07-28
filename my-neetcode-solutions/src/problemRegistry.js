import twoSum from './problems/twoSum';
import hasDuplicate from './problems/hasDuplicate';


import runTwoSumTests from './testcases/twoSumTester';
import runHasDuplicateTests from './testcases/hasDuplicateTester'

const problemRegistry = {
  twoSum: {
    solution: twoSum,
    tester: runTwoSumTests,
  },
  hasDuplicate: {
    solution: hasDuplicate,
    tester: runHasDuplicateTests,
  }
};

export default problemRegistry;
