import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { BsPersonFill } from "react-icons/bs";
import { FaBookOpen, FaSuitcase, FaTools } from "react-icons/fa";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";
import SkillsDetails from "./SkillsDetails";
import "./styles/InputTabs.css";

export default function InputTabs() {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="navItem">
                <Nav.Link eventKey="first">
                  <BsPersonFill />
                  &nbsp; Personal Details
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <FaBookOpen />
                  &nbsp;&nbsp;Education
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  <FaSuitcase />
                  &nbsp;&nbsp;Experience
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">
                  <FaTools />
                  &nbsp;&nbsp;Skills
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h1>Personal Details</h1>
                <br />
                <PersonalDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h1>Education</h1>
                <br />
                <EducationDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h1>Experience</h1>
                <br />
                <ExperienceDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <h1>Skills</h1>
                <br />
                <SkillsDetails />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
