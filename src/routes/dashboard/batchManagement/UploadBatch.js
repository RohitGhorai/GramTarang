import React from "react";
import { Form, Modal, Button, Container } from "react-bootstrap";

const upload = [
  {
    title: "Amasy UID",
    type: "text",
  },
  {
    title: "ABN No.",
    type: "text",
  },
  {
    title: "Upload Filled Excel file :",
    type: "file",
  },
];
function UploadBatch(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Batch
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          {upload.map((input, index) => (
            <Form.Group className="mb-3 d-flex justify-content-between col-12">
              <Form.Label className="col-3">{input.title}</Form.Label>
              <Form.Control
                key={index}
                type={input.type}
                for={input.title}
                placeholder={`Enter ${input.title}`}
                required
              />
            </Form.Group>
          ))}

          <Container className="text-center">
            <Button type="submit" className="rounded-1" variant="dark">
              Upload
            </Button>
            <Button className="rounded-1" type="reset" variant="danger ms-2">
              Reset
            </Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default UploadBatch;
