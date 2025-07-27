import React from 'react';
import { Card } from 'react-bootstrap';

export default function OutputDisplay({ output }) {
  if (!output) return null;

  return (
    <Card
      className="mt-3 shadow-sm border-0 bg-warning"
    >
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted text-start">Output</Card.Subtitle>
        <pre
          className="text-start mb-0"
          style={{
            fontSize: '1.1rem',
            background: '#fff',
            padding: '1rem',
            borderRadius: '0.5rem',
            overflowX: 'auto'
          }}
        >
          {output}
        </pre>
      </Card.Body>
    </Card>
  );
}
