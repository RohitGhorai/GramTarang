import React from "react";
import Table from "../Table";
import { Container, Row, Col } from "react-bootstrap";

const table1 = [
  { title: "Training Partner Name", disabled: true, value: "Project ID" },
  {
    title: "import './LeftToRightAnimation.css';",
    disabled: true,
    value: "AAA51515",
  },
  { title: "PRN No", disabled: true, value: "Amasy ID" },
  { title: "5684568548", disabled: true, value: "" },
];
const ViewAllProjects = () => {
  return (
    <div
      className="card w-100 h-100 mt-3 d-flex flex-column"
      style={{
        borderColor: "#fff",
        alignItems: "center",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <span className="fs-4 fw-bold m-3">Your Projects</span>
      <div
        className="card w-100 h-100 mt-3 d-flex flex-column"
        style={{
          borderColor: "#fff",
          alignItems: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 54px 55px, rgba(0, 0, 0, 0.05) 0px -12px 30px, rgba(0, 0, 0, 0.05) 0px 4px 6px, rgba(0, 0, 0, 0.06) 0px 12px 13px, rgba(0, 0, 0, 0.02) 0px -3px 5px",
        }}
      >
        <span className="fs-4 m-2 mb-5 fw-bold">
          Particulars of the All Projects
        </span>
        <Container
          style={{
            width: "90%",
            hight: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          <Row className="fw-bold bg-warning text-light p-3 w-100 flex-start">
            <Col className="border-end border-light">Training Partner Name</Col>
            <Col className="border-end border-light">
              {"Example"}
            </Col>
          </Row>
          <Row className="fw-bold bg-warning text-light p-3 w-100 flex-start border-start border-3">
            <Col className="border-1 border-end border-light">PRN No.</Col>
            <Col>{45451548}</Col>
          </Row>
        </Container>
        <Container
          style={{
            width: "90%",
            hight: "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            overflow: "hidden",
            border: "1px solid rgba(0, 0, 0, 0.2)",
          }}
        >
          <Row className="fw-bold bg-light text-secondary p-3 w-100">
            <Col className="border-end border-secondary">Project ID</Col>
            <Col className="border-end border-secondary">{"ex-abcd"}</Col>
          </Row>
          <Row className="fw-bold bg-light text-secondary p-3 w-100 border-start border-3 border-secondary">
            <Col className="border-1 border-end border-secondary">Amasy ID</Col>
            <Col>{45451548}</Col>
          </Row>
        </Container>
        <Container
          style={{
            width: "90%",
            hight: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          <Row className="fw-bold bg-warning text-light p-3 w-100">
            <Col>Project ID</Col>
          </Row>
          <Row className="fw-bold bg-warning text-light p-3 w-100 border-start border-3 border-light">
            <Col>{"ex-abc def ghi jk dr grgr dvx vdvs dlm no"}</Col>
          </Row>
        </Container>
        <Container style={{
            width: "90%",
            hight: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "end"
          }}>
            <Row className="fw-bold bg-light text-secondary p-3 w-100 border border-rgba(0, 0, 0, 0.2)">
                <Col className="border-end border-secondary w-100">Center Name</Col>
                <Col className="border-end border-secondary w-100">Center ID</Col>
                <Col>Affiliation / Accreditation</Col>
            </Row>
            <Row className="fw-normal bg-light text-secondary p-3 w-100 border-bottom border-rgba(0, 0, 0, 0.1)">
                <Col className="border-end border-secondary w-100">Example</Col>
                <Col className="border-end border-secondary w-100">Example</Col>
                <Col>Example</Col>
            </Row>
            <Row className="fw-normal bg-light text-secondary p-3 w-100 border-bottom border-rgba(0, 0, 0, 0.1)">
                <Col className="border-end border-secondary w-100">Example</Col>
                <Col className="border-end border-secondary w-100">Example</Col>
                <Col>Example</Col>
            </Row>
        </Container>
      </div>
    </div>
  );
};

export default ViewAllProjects;
