import React from 'react';
import { Form } from 'react-bootstrap';

export default function ProblemSelector({ problems, onSelect }) {
  return (
    <Form.Group>
      <Form.Label>Select Problem</Form.Label>
      <Form.Select onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Choose a problem --</option>
        {problems.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}
