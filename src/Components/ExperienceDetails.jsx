import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./styles/ExperienceDetails.css";

export default function ExperienceDetails() {
  return (
    <div>
      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Label>Company Name:</Form.Label>
          <Form.Control type="text" placeholder="Company Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Job Title:</Form.Label>
          <Form.Control type="text" placeholder="Designation" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>From Date:</Form.Label>
              <Form.Control type="text" placeholder="January,2018" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>To Date:</Form.Label>
              <Form.Control type="text" placeholder="January,2018" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Work Details:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}
