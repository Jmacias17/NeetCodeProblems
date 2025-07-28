import React, { useState } from 'react';
import ProblemSelector from './components/ProblemSelector';
import OutputDisplay from './components/OutputDisplay';
import problemRegistry from './problemRegistry';
import { Card, Button, Stack, Form } from 'react-bootstrap';

export default function App() {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [output, setOutput] = useState('');
  const [arrayInput, setArrayInput] = useState('');
  const [targetInput, setTargetInput] = useState('');

  // 👇 define which problems need extra input
  const problemsRequiringInput = ['twoSum']; // add more keys as needed

  const runSolution = async () => {
    if (!selectedProblem) return;
  
    const { tester } = problemRegistry[selectedProblem];
  
    if (!tester) {
      setOutput('❌ No test cases available.');
      return;
    }
  
    const { allPassed, results } = tester();
  
    const summary = allPassed
      ? '✅ All test cases passed!\n'
      : `❌ Some test cases failed\n`;
  
    const details = results
      .map(
        (r) =>
          `Test ${r.index}:\nInput: ${JSON.stringify(r.input)}\nExpected: ${JSON.stringify(
            r.expected
          )}\nActual: ${JSON.stringify(r.actual)}\nResult: ${r.passed ? '✅ Passed' : '❌ Failed'}\n`
      )
      .join('\n');
  
    setOutput(summary + details);
  };
  

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Stack gap={4} className="col-md-8 mx-auto">
        {/* Title */}
        <h1 className="text-center fw-bold display-4">
          Neetcode Solutions Runner
        </h1>

        {/* Card */}
        <Card className="shadow-lg">
          <Card.Body className="p-4">
            <Card.Title className="mb-3 fs-4 text-center">
              Select a problem and run the solution
            </Card.Title>

            <ProblemSelector
              problems={Object.keys(problemRegistry)}
              onSelect={setSelectedProblem}
            />

            <div className="mt-4 d-grid">
              <Button variant="primary" size="lg" onClick={runSolution}>
                🚀 Run Solution
              </Button>
            </div>

            <div className="mt-4">
              <OutputDisplay output={output} />
            </div>
          </Card.Body>
        </Card>
      </Stack>
    </div>
  );
}
