import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../../api/index";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";
import { useMutation } from "react-query";

const EditBox = () => {
  const [details, setDetails] = useState({});
  const [form, setForm] = useState({
    noRegis: "",
    pemilik: "",
    alamat: "",
    merk: "",
    tahun: "",
    silinder: "",
    warna: "",
    bahanBakar: "",
  });

  let navigate = useNavigate();
  let { id } = useParams();

  let { data: detail } = useQuery("detailCache", async () => {
    const response = await API.get("/Data/" + id);
    return response.data.data;
  });

  useEffect(() => {
    if (detail) {
      setForm({
        ...form,
        noRegis: detail.noRegis.toString(),
        pemilik: detail.pemilik,
        alamat: detail.alamat,
        merk: detail.merk,
        tahun: parseInt(detail.tahun),
        silinder: parseInt(detail.silinder),
        warna: detail.warna,
        bahanBakar: detail.bahanBakar,
      });
      setDetails(detail);
    }
  }, [detail]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = {
        noRegis: form.noRegis.toString(),
        pemilik: form.pemilik,
        alamat: form.alamat,
        merk: form.merk,
        tahun: parseInt(form.tahun),
        silinder: parseInt(form.silinder),
        warna: form.warna,
        bahanBakar: form.bahanBakar,
      };

      const response = await API.patch("/Data/" + detail.id, formData);
      console.log(response.data);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Container fluid className="bg-light mb-1 p-4 rounded shadow-sm">
        <Row>
          <Container>
            <Row>
              <Form autoComplete="off" onSubmit={(e) => handleSubmit.mutate(e)}>
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
                          maxLength={11}
                          style={{ textTransform: "uppercase" }}
                          name="noRegis"
                          type="text"
                          value={form.noRegis}
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
                        value={form.pemilik}
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
                        value={form.merk}
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
                        name="alamat"
                        value={form.alamat}
                        onChange={handleChange}
                        style={{ resize: "none" }}
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
                        value={form.tahun}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Kapasitas Silinder</Form.Label>
                      <Form.Select
                        name="silinder"
                        value={form.silinder}
                        onChange={handleChange}
                      >
                        <option>--Pilih Kapasitas Silinder--</option>
                        <option value="125">125 cc</option>
                        <option value="250">250 cc</option>
                        <option value="400">400 cc</option>
                        <option value="500">500 cc</option>
                        <option value="1200">1200 cc</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Warna Kendaraan</Form.Label>
                      <Form.Select
                        name="warna"
                        value={form.warna}
                        onChange={handleChange}
                      >
                        <option>--Pilih Warna--</option>
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
                      <Form.Select
                        name="bahanBakar"
                        value={form.bahanBakar}
                        onChange={handleChange}
                      >
                        <option>--Pilih Bahan Bakar--</option>
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
                <div className="d-flex flex-row-reverse">
                  <Button
                    className="ms-2 justify-content-end"
                    variant="secondary"
                  >
                    <Link to={"/"} className="text-decoration-none text-reset">
                      Kembali
                    </Link>
                  </Button>
                  <Button
                    className="mx-0 justify-content-end"
                    variant="primary"
                    type="submit"
                  >
                    {handleSubmit.isLoading ? "Mengupdate Data..." : "Update"}
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

export default EditBox;
