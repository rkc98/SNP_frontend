import CustomModal from "../../../UI/Modal";

const DeleteModal = (props) => {
  return (
    <CustomModal
      show={props.show}
      handleClose={props.handleClose}
      title="Delete"
      btnTitle="Submit"
      handleSubmit={handleSubmit}
    ></CustomModal>
  );
};

export default DeleteModal;
