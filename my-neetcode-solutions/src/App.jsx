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
    const solutionFn = problemRegistry[selectedProblem];

    if (!solutionFn) {
      setOutput('No solution found');
      return;
    }

    let result;
    if (problemsRequiringInput.includes(selectedProblem)) {
      // parse the input fields
      const nums = arrayInput
        .split(',')
        .map(n => parseInt(n.trim(), 10))
        .filter(n => !isNaN(n));
      const target = parseInt(targetInput.trim(), 10);
      result = await solutionFn(nums, target);
    } else {
      // problems that require no extra input
      result = await solutionFn();
    }

    setOutput(JSON.stringify(result));
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

            {/* 👇 Conditionally render fields */}
            {selectedProblem && problemsRequiringInput.includes(selectedProblem) && (
              <Form className="mt-4">
                <Form.Group className="mb-3">
                  <Form.Label>Array (comma separated)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g. 2,7,11,15"
                    value={arrayInput}
                    onChange={(e) => setArrayInput(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Target</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g. 9"
                    value={targetInput}
                    onChange={(e) => setTargetInput(e.target.value)}
                  />
                </Form.Group>
              </Form>
            )}

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
