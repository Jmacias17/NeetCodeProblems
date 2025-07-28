import twoSum from '../problems/twoSum.js';

const testCases = [
  {
    input: [[3, 4, 5, 6], 7],
    expected: [0, 1],
    description: 'nums[0] + nums[1] == 7',
  },
  {
    input: [[4, 5, 6], 10],
    expected: [0, 2],
    description: 'nums[0] + nums[2] == 10',
  },
  {
    input: [[5, 5], 10],
    expected: [0, 1],
    description: 'nums[0] + nums[1] == 10',
  },
];

export default function runTests() {
  const results = testCases.map(({ input, expected, description }, index) => {
    const actual = twoSum(...input);
    const passed = JSON.stringify(actual) === JSON.stringify(expected);
    return {
      index: index + 1,
      input,
      expected,
      actual,
      passed,
      description,
    };
  });

  const allPassed = results.every((r) => r.passed);

  return {
    allPassed,
    results,
  };
}
