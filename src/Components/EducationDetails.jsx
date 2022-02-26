import React from "react";
import { Form } from "react-bootstrap";
import "./styles/EducationDetails.css";

export default function EducationDetails() {
  return (
    <div>
      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Label>Course/Degree:</Form.Label>
          <Form.Control type="text" placeholder="Bachelor in Science" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>School/Univercity:</Form.Label>
          <Form.Control type="text" placeholder="IIT Delhi" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Grade/Score:</Form.Label>
          <Form.Control type="number" placeholder="10.00" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year:</Form.Label>
          <Form.Control type="text" placeholder="2013-2017" />
        </Form.Group>
      </Form>
    </div>
  );
}
