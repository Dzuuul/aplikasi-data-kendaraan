import React  from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmDelete = ({ show, handleClose, setConfirmDelete }) => {

  const handleDelete = () => {
    setConfirmDelete(true);
  };
  
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          Anda yakin menghapus data ... ?
          <div className="d-flex justify-content-end mt-3">
            <Button
              variant="primary"
              className="me-2"
              onClick={handleDelete}
            >
              OK
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmDelete;
