import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

const ModalView = (props) => {
  var date = new Date(props.data.data[0].date_created).toLocaleDateString();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ justifyContent: "center" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.data[0].title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ justifyContent: "center" }}>
        <Image
          thumbnail
          src={props.data.links[0].href}
          style={{ width: "100%", height: "550px" }}
          className="mt-3 mb-3"
        />
        <p style={{ textAlign: "right", paddingRight: "15px" }}>{date}</p>
        <p>{props.data.data[0].description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
