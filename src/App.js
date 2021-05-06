import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import TableComponent from "./Components/TableComponent";

import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <Button variant="primary" onClick={handleShow}>
        Show Component
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        dialogClassName="modal-xl"
      >
        <Modal.Header closeButton>
          <TableComponent />
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default App;
