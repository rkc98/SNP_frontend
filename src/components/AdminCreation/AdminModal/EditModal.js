import { useEffect, useState } from "react";
import CustomModal from "../../../UI/Modal";
import AddAdminValidate from "../../../Validations/AddAdminValidate";
import classes from "./AddModal.module.css";
import axios from "axios";
import { SERVICE_BASE_URL } from "../../../Utils/Constant";
import Swal from "sweetalert2";

const EditModal = (props) => {
  const [response, setResponse] = useState({
    id: props.id,
    username: "",
    empid: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    if (props.id !== undefined) {
      axios({
        method: "get",
        url: `${SERVICE_BASE_URL}admin/${props.id}`,
      })
        .then((res) => {
          console.log(res);
          setResponse(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.id]);

  const [inputs = response, setInputs] = useState();
  const [errors, setErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    const validationErrors = AddAdminValidate(inputs);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    if (noErrors) {
      console.log("Authenticated", inputs);
      setIsValidForm(true);
    } else {
      console.log("errors try again", validationErrors);
      setIsValidForm(false);
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const inputData = [
    {
      label: "User Name",
      type: "text",
      name: "username",
      value: response.username,
      error: errors.username,
    },
    {
      label: "Employee ID",
      type: "text",
      name: "empid",
      value: response.empid,
      error: errors.empid,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: response.email,
      error: errors.email,
    },
    {
      label: "Mobile Number ",
      type: "text",
      name: "mobile",
      value: response.mobile,
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

    // update record to db
    axios({
      method: "put",
      url: `${SERVICE_BASE_URL}admin/${response.id}`,
      data: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          Swal.fire("Updated!", "Admin has been updated.", "success");
          window.location.reload();
        } else {
          Swal.fire("Oops!", "Something went wrong.", "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <CustomModal
        show={props.show}
        handleClose={props.handleClose}
        title="Edit Admin"
        btnTitle="Update"
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
                  defaultValue={data.value}
                  name={data.name}
                  onChange={handleInputChange}
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

export default EditModal;
