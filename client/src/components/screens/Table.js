import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../../api/index";
import ConfirmDelete from "../common/Delete.modal";
import { useMutation } from "react-query";

const TableData = () => {
  // delete state
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { data: dataData, refetch } = useQuery("dataDataCache", async () => {
    const response = await API.get("/Data");
    return response.data.data;
  });

  const handleDelete = (id) => {
    setIdDelete(id);
    handleShow();
  };

  const deleteById = useMutation(async (id) => {
    try {
      await API.delete("/Data/" + id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    if (confirmDelete) {
      handleClose();
      deleteById.mutate(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

  return (
    <>
      <Table striped bordered hover className="shadow-sm">
        <thead>
          <tr>
            <th>No</th>
            <th>No Registrasi</th>
            <th>Nama Pemilik</th>
            <th>Merk Kendaraan</th>
            <th>Tahun Pembuatan</th>
            <th>Kapasitas</th>
            <th>Warna</th>
            <th>Bahan Bakar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping */}
          {dataData?.map((item, index) => (
            <tr>
              <td align="center">{index + 1}</td>
              <td align="center">{item.noRegis}</td>
              <td>{item.pemilik}</td>
              <td>{item.merk}</td>
              <td>{item.tahun}</td>
              <td>
                {item.silinder}
                {" cc"}
              </td>
              <td>{item.warna}</td>
              <td>{item.bahanBakar}</td>
              <td className="d-flex justify-content-around">
                <Link
                  to={`/detail/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button className="text-warning fw-bold bg-transparent me-2 rounded border border-0">
                    Detail
                  </Button>
                </Link>
                <Link
                  to={`/edit/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button className="text-primary fw-bold bg-transparent me-2 rounded border border-0">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className="text-danger fw-bold bg-transparent rounded border border-0"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ConfirmDelete
        setConfirmDelete={setConfirmDelete}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

export default TableData;
