import React, { useState } from 'react';
import ProblemSelector from './components/ProblemSelector';
import OutputDisplay from './components/OutputDisplay';
import problemRegistry from './problemRegistry';
import { Container, Card, Button, Stack } from 'react-bootstrap';

export default function App() {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [output, setOutput] = useState('');

  const runSolution = async () => {
    if (!selectedProblem) return;
    const solutionFn = problemRegistry[selectedProblem];
    if (solutionFn) {
      const result = await solutionFn();
      setOutput(result);
    } else {
      setOutput('No solution found');
    }
  };

  return (
    <Container fluid
      className="justify-content-center align-items-center bg-light"
      style={{ minHeight: '100vh', minWidth: '100vw' }}
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
    </Container>
  );
}
