import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useMutation } from "react-query";
import {
  Alert,
  Button,
  Modal,
  Form,
  Col,
  Row,
  Container,
  Image,
  InputGroup,
} from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { API } from "../../api/index";

function AddData() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [setSelectedOption] = useState("Merah");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    noRegis1: "",
    noRegis2: "",
    noRegis3: "",
    pemilik: "",
    alamat: "",
    merk: "",
    tahun: "",
    silinder: "",
    warna: "",
    bahanBakar: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setSelectedOption(e.target.value);
  };

  let { data: dataData, refetch: dataRefetch } = useQuery(
    "dataDataCache",
    async () => {
      const response = await API.get("/Data");
      return response.data.data;
    }
  );

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = {
        noRegis:
          form.noRegis1.toString() +
          "-" +
          form.noRegis2.toString() +
          "-" +
          form.noRegis3.toString(),
        pemilik: form.pemilik,
        alamat: form.alamat,
        merk: form.merk,
        tahun: parseInt(form.tahun),
        silinder: parseInt(form.silinder),
        warna: form.warna,
        bahanBakar: form.bahanBakar,
      };

      await API.post("/Data", formData);
      setShowAlert(true);
      dataRefetch();
    } catch (error) {
      setShowAlert(true);
    }
  });

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
        setShow(false);
      }, 1200);
    }
  }, [showAlert]);

  return (
    <>
      <Button variant="primary" style={{ width: "100px" }} onClick={handleShow}>
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        centered
        size="lg"
      >
        <Form autoComplete="off" onSubmit={(e) => handleSubmit.mutate(e)}>
          <Modal.Header closeButton className="mx-3">
            <Image src={Logo} alt="" className="me-3" />
            <Modal.Title>Tambah Data Kendaraan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                      maxLength={2}
                      name="noRegis1"
                      type="text"
                      placeholder="A"
                      onChange={handleChange}
                    />
                    <InputGroup.Text>-</InputGroup.Text>
                    <Form.Control
                      min={1000}
                      max={9999}
                      name="noRegis2"
                      type="number"
                      placeholder="1234"
                      onChange={handleChange}
                    />
                    <InputGroup.Text>-</InputGroup.Text>
                    <Form.Control
                      maxLength={3}
                      name="noRegis3"
                      type="text"
                      placeholder="BCD"
                      onChange={handleChange}
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
                    placeholder="Elon Musk"
                    onChange={handleChange}
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
                    placeholder="Supra X 125"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Alamat Pemilik Kendaraan</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    style={{ resize:"none" }}
                    name="alamat"
                    onChange={handleChange}
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
                    min={2000}
                    max={2023}
                    type="number"
                    name="tahun"
                    placeholder="2018"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Kapasitas Silinder</Form.Label>
                  <Form.Select name="silinder" onChange={handleChange}>
                    <option selected>--Pilih Kapasitas Silinder--</option>
                    <option value="125">125 cc</option>
                    <option value="250">250 cc</option>
                    <option value="400">400 cc</option>
                    <option value="500">500 cc</option>
                    <option value="1200">1200 cc</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Warna Kendaraan</Form.Label>
                  <Form.Select name="warna" onChange={handleChange}>
                    <option selected>--Pilih Warna--</option>
                    <option value="Merah">Merah</option>
                    <option value="Hitam">Hitam</option>
                    <option value="Biru">Biru</option>
                    <option value="Abu-Abu">Abu-Abu</option>
                    <option value="Putih">Putih</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Bahan Bakar</Form.Label>
                  <Form.Select name="bahanBakar" onChange={handleChange}>
                    <option selected>--Pilih Bahan Bakar--</option>
                    <option value="Bensin">Bensin</option>
                    <option value="Biodiesel">Biodiesel</option>
                    <option value="Minyak Solar">Minyak Solar</option>
                    <option value="Minyak Diesel">Minyak Diesel</option>
                    <option value="Avgas">Avgas</option>
                    <option value="Avtur">Avtur</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Container>
            <Row>
              <Modal.Footer className="d-flex justify-content-start">
                <Col md="auto" className="align-middle">
                  <Button className="mx-1" variant="primary" type="submit">
                    {handleSubmit.isLoading ? "Menyimpan..." : "Simpan"}
                  </Button>
                  <Button
                    className="mx-1"
                    variant="secondary"
                    onClick={handleClose}
                  >
                    Kembali
                  </Button>
                </Col>
                <Col>
                  {showAlert && (
                    <Alert
                      variant="success"
                      className="mb-0"
                      onClose={() => setShowAlert(false)}
                      dismissible
                    >
                      Data berhasil ditambahkan!
                    </Alert>
                  )}
                </Col>
              </Modal.Footer>
            </Row>
          </Container>
        </Form>
      </Modal>
    </>
  );
}

export default AddData;
