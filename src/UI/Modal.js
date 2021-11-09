import { Modal, Button } from "react-bootstrap";
import "./Modal.css";

const CustomModal = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        className="modal"
        dialogClassName="modal-dialog"
      >
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleSubmit}>
            {props.btnTitle}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
