# 💻 NeetCodeProblems — JavaScript Problem Runner

This is a React-based project designed to run and view results of **NeetCode-style algorithm problems** interactively. It features a lightweight UI that allows you to select problems, automatically test them against curated test cases, and view pass/fail results directly on-screen. Used to master data structures

---

## 📌 Project Overview

The application is structured around modular components and organized directories:

### 1. `/problems/`
This folder contains JavaScript implementations of algorithm problems such as:
- `twoSum.js`
- `hasDuplicate.js`
- `isAnagram.js`
- `groupAnagrams.js`

Each file exports a function that solves a specific NeetCode-style problem.

### 2. `/testcases/`
Each problem has a corresponding test file (e.g. `twoSumTester.js`) that:
- Defines an array of test cases (inputs, expected outputs, and descriptions)
- Automatically runs those cases against the problem's function
- Returns a summary of which passed and failed

### 3. `App.jsx`
This is the **main UI entry point**. It:
- Lets the user select a problem from a dropdown
- Automatically runs test cases upon clicking “Run Solution”
- Displays output and test results in a formatted card

---

## 🎯 Features

- Clean React UI with Bootstrap styling
- Dynamic dropdown to choose problems
- Built-in test runners for each problem
- Visual output with clear pass/fail feedback
- Easy to add new problems and test cases

---

## 🧠 How It Works

1. The user selects a problem from the dropdown (e.g. `twoSum` or `groupAnagrams`)
2. When they click **Run Solution**:
   - The corresponding test runner (e.g. `twoSumTester.js`) is invoked
   - It runs a series of test cases using the problem’s solution function
   - Results are compared using strict equality or normalized structures
3. The output shows:
   - Whether **all test cases passed**
   - Detailed breakdown of inputs, expected vs. actual results, and pass/fail status

---

## 💻 Example Output Snippet
✅ All test cases passed!

Test 1:
Input: [2,7,11,15], Target: 9
Expected: [0,1]
Actual: [0,1]
Result: ✅ Passed

Test 2:
Input: [3,2,4], Target: 6
Expected: [1,2]
Actual: [1,2]
Result: ✅ Passed

---

## 📁 Files Included

| File/Folder         | Description |
|---------------------|-------------|
| `/problems/`        | JavaScript functions solving individual coding problems |
| `/testcases/`       | Paired test files that run and evaluate each problem |
| `App.jsx`           | React component to control UI, problem selection, and test running |
| `OutputDisplay.jsx` | Displays the results after executing test cases |
| `ProblemSelector.jsx` | Dropdown for selecting a problem |
| `problemRegistry.js`| Registers each problem and its associated test function |

---

## 📜 License

MIT License © 2024 Jesus Macias  
This is a personal learning project inspired by the NeetCode problem set — feel free to fork or adapt it to build your own interactive coding sandbox.

---

## 🙏 Acknowledgment

Huge thanks to [NeetCode](https://neetcode.io/) for providing a world-class collection of algorithm problems. This tool helps reinforce concepts through active problem-solving and automated testing.
