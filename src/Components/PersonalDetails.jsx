import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./styles/PersonalDetails.css";

export default function PersonalDetails() {
  return (
    <div>
      <Form className="form">
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="abc@xyz.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Linkedin Profile:</Form.Label>
          <Form.Control type="text" placeholder="Linkedin" />
        </Form.Group>
        <Button variant="success">Save</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="danger">Reset</Button>
      </Form>
    </div>
  );
}
