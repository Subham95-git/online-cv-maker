import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import "./styles/SkillsDetails.css";
import { TiDelete } from "react-icons/ti";

export default function SkillsDetails() {
  const [skill, setSkill] = useState("");
  const [rating, setRating] = useState(0);
  const [dataarray, updateDataarray] = useState([]);

  let skillHandler = (event) => {
    setSkill(event.target.value);
  };

  let ratingHandler = (event) => {
    setRating(event.target.value);
  };

  let adddataHandler = () => {
    updateDataarray((arr) => [...arr, { myskill: skill, myrating: rating }]);
  };

  let deleteDataHandler = () => {
    console.log("Data has been deleted");
  };

  return (
    <div>
      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Label>Skill Name:</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={skillHandler} />
        </Form.Group>
        {[1, 2, 3, 4, 5].map((level) => (
          <Form.Check
            key={level}
            inline
            label={level}
            name="group1"
            type="radio"
            value={level}
            onClick={ratingHandler}
          />
        ))}
      </Form>
      <Button onClick={adddataHandler}>Add</Button>
      <br />
      <br />

      {
        //dataarray.length !== 0 && (
        <Row>
          {dataarray.map((silldata, k) => (
            <Col key={k} xs={12} md={4} lg={3}>
              <TiDelete
                onClick={() => {
                  var arr = [...dataarray];
                  var index = k;
                  if (k !== -1) {
                    arr.splice(index, 1);
                    updateDataarray(arr);
                  }
                }}
                className="crossButton"
              />
              <Card>
                <Card.Body>
                  <Card.Header className="card-header">
                    Skill-{k + 1}
                  </Card.Header>
                  <Card.Title className="card-title">
                    {silldata.myskill}
                  </Card.Title>

                  <Card.Text>Rating:&nbsp;{silldata.myrating}/5</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      }
    </div>
  );
}
