import hasDuplicate from '../problems/hasDuplicate.js';

const testCases = [
  {
    input: [[1, 2, 3, 3]],
    expected: true,
    description: '3 appears twice',
  },
  {
    input: [[1, 2, 3, 4]],
    expected: false,
    description: 'all elements are unique',
  },
];

export default function runTests() {
  const results = testCases.map(({ input, expected, description }, index) => {
    const actual = hasDuplicate(...input);
    const passed = actual === expected;
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
