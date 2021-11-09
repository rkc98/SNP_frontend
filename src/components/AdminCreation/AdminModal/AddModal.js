import CustomModal from "../../../UI/Modal";
import AddAdminValidate from "../../../Validations/AddAdminValidate";
import useForm from "../../../hooks/use-Form";
import classes from "./AddModal.module.css";
import axios from "axios";
import { SERVICE_BASE_URL } from "../../../Utils/Constant";

const AddModal = (props) => {
  const { inputs, handleInputChange, handleSubmit, errors, isValidForm } =
    useForm(
      { userame: "", empid: "", email: "", mobile: "" },
      AddAdminValidate
    );

  const inputData = [
    {
      label: "User Name",
      type: "text",
      name: "username",
      value: inputs.username,
      error: errors.username,
    },
    {
      label: "Employee ID",
      type: "text",
      name: "empid",
      value: inputs.empid,
      error: errors.empid,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: inputs.email,
      error: errors.email,
    },
    {
      label: "Mobile Number ",
      type: "text",
      name: "mobile",
      value: inputs.mobile,
      error: errors.mobile,
    },
  ];

  if (isValidForm) {
    const data = {
      username: inputs.username,
      email: inputs.email,
      empid: inputs.empid,
      mobile: inputs.mobile,
    };

    console.log("data---->" + data);

    // add record to db
    axios({
      method: "post",
      url: `${SERVICE_BASE_URL}admin`,
      data: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    window.location.reload();
  }

  return (
    <>
      <CustomModal
        show={props.show}
        handleClose={props.handleClose}
        title="Add Admin"
        btnTitle="Add"
        handleSubmit={handleSubmit}
      >
        {inputData.map((data, index) => {
          return (
            <div className="form-group row p-1" key={index}>
              <label
                htmlFor={data.name}
                key={index}
                className={`col-sm-4 ${classes.label}`}
              >
                {data.label}
              </label>
              <div className="col-sm-7">
                <input
                  type={data.type}
                  className={`form-control ${classes["custom-input"]}`}
                  name={data.name}
                  value={data.value}
                  onChange={handleInputChange}
                  required
                />
                {data.error && <p className={classes.invalid}>{data.error}</p>}
              </div>
            </div>
          );
        })}
      </CustomModal>
    </>
  );
};

export default AddModal;
