import LoginUI from "../components/Login/LoginUI";
import useForm from "../hooks/use-Form";
import LoginValidate from "../Validations/LoginValidate";
import Swal from "sweetalert2";
import { Fragment, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { inputs, handleInputChange, handleSubmit, errors, isValidForm } =
    useForm({ email: "", userType: "DEFAULT" }, LoginValidate);

  const [otp, setotp] = useState("");

  let type = "";

  const history = useHistory();

  if (isValidForm) {
    //check user exists in db

    if (inputs.email.includes("@")) {
      type = "email";
      //call send email api
    } else {
      type = "mobile";

      Axios.get(
        `/OtpApi/otpgenerate?username=KuruvilaT&password=Sqxl4Y13&msisdn=${inputs.email}&msg=Your OTP to access KBPOIL is %25m.It will be valid for 3 minutes.&source=KBPOIL&otplen=4&exptime=600&tagname=test&entityid=1601486162497274041&tempid=1607100000000137652`
      )
        .then((response) => {
          console.log(response);

          setotp(response.data.msisdn);
          //setotp(response.config.msisdn);
          console.log(otp);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    <div class="alert alert-success">
      <strong>Success!</strong> Indicates a successful or positive action.
    </div>;

    Swal.fire({
      confirmButtonColor: "#174ea6",
      icon: "success",
      title: "Valid user",
      text: "OTP has been sent to your " + type + ".",
      width: 450,
      padding: "3em",
      background: "#fff ",
      backdrop: `
    rgba(0,0,123,0.4)
    
    left top
    no-repeat
  `,
    });

    history.push({
      pathname: "/otp",
      state: {
        mobile: inputs.email,
        type: type,
      },
    });
  }

  return (
    <Fragment>
      <LoginUI
        inputs={inputs}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </Fragment>
  );
};

export default Login;
