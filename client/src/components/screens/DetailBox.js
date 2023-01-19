import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../../api/index";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";

const DetailBox = () => {
  let { id } = useParams();

  let { data: detail } = useQuery("detailCache", async () => {
    const response = await API.get("/Data/" + id);
    return response.data.data;
  });

  return (
    <>
      <Container fluid className="bg-light mb-1 p-4 rounded shadow-sm">
        <Row>
          <Container>
            <Row>
              <Form>
                <Row>
                  {/* Left */}
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>No. Registrasi Kendaraan</Form.Label>
                      <InputGroup>
                        <Form.Control
                          name="noRegis"
                          type="text"
                          placeholder="BCD"
                          value={detail?.noRegis}
                          disabled
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Nama Pemilik</Form.Label>
                      <Form.Control
                        name="pemilik"
                        type="text"
                        disabled
                        value={detail?.pemilik}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Merk Kendaraan</Form.Label>
                      <Form.Control
                        name="merk"
                        type="text"
                        disabled
                        value={detail?.merk}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                      disabled
                    >
                      <Form.Label>Alamat Pemilik Kendaraan</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="alamat"
                        value={detail?.alamat}
                        style={{ resize: "none" }}
                        disabled
                      />
                    </Form.Group>
                  </Col>

                  {/* Right */}
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Tahun Pembuatan</Form.Label>
                      <Form.Control
                        type="number"
                        name="tahun"
                        value={detail?.tahun}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Kapasitas Silinder</Form.Label>
                      <Form.Control
                        name="silinder"
                        type="number"
                        disabled
                        value={detail?.silinder}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Warna Kendaraan</Form.Label>
                      <Form.Control
                        name="warna"
                        type="text"
                        value={detail?.warna}
                        disabled
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Bahan Bakar</Form.Label>
                      <Form.Control
                        name="bahanBakar"
                        type="text"
                        placeholder="Bensin"
                        value={detail?.bahanBakar}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex flex-row-reverse">
                  <Button
                    className="mx-0 justify-content-end"
                    variant="secondary"
                  >
                    <Link to={"/"} className="text-decoration-none text-reset">
                      Kembali
                    </Link>
                  </Button>
                </div>
              </Form>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default DetailBox;
