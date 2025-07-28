import groupAnagrams from '../problems/groupAnagrams.js';

const testCases = [
  {
    input: [["act", "pots", "tops", "cat", "stop", "hat"]],
    expected: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]],
    description: 'Grouped anagrams from six words',
  },
  {
    input: [["x"]],
    expected: [["x"]],
    description: 'Single character input',
  },
  {
    input: [[""]],
    expected: [[""]],
    description: 'Empty string input',
  },
];

// ✅ safely sort inner arrays and outer array
function normalize(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map(group => Array.isArray(group) ? group.slice().sort() : [])
    .sort((a, b) => (a[0] || '').localeCompare(b[0] || ''));
}

export default function runTests() {
  const results = testCases.map(({ input, expected, description }, index) => {
    const actual = groupAnagrams(...input);
    const passed = JSON.stringify(normalize(actual)) === JSON.stringify(normalize(expected));

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
