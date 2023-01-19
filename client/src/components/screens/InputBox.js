import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";

const InputBox = () => {
  return (
    <>
    <Container fluid className="bg-light mb-1 p-4 rounded shadow-sm inputBox">
      <Row>
        <Container>
            <Form>
              <Row>
                <Col xs lg="4">
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>No. Registrasi</Form.Label>
                    <Form.Control type="text" placeholder="A-1234-BCD" />
                    <Form.Text className="text-muted">
                      Isikan no registrasi dengan benar.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Nama Pemilik</Form.Label>
                    <Form.Control type="text" placeholder="Elon Musk" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
        </Container>
      </Row>
    </Container>
    </>
  );
};

export default InputBox;
