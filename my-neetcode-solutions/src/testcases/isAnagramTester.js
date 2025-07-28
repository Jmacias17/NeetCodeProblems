import isAnagram from '../problems/isAnagram.js';

const testCases = [
  {
    input: ['racecar', 'carrace'],
    expected: true,
    description: '"racecar" and "carrace" are anagrams',
  },
  {
    input: ['jar', 'jam'],
    expected: false,
    description: '"jar" and "jam" are not anagrams',
  },
  {
    input: ['aabbcc', 'abcabc'],
    expected: true,
    description: 'matching frequency of characters',
  },
  {
    input: ['rat', 'car'],
    expected: false,
    description: 'different characters',
  },
];

export default function runTests() {
  const results = testCases.map(({ input, expected, description }, index) => {
    const actual = isAnagram(...input);
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

  const allPassed = results.every(r => r.passed);

  return { allPassed, results };
}
