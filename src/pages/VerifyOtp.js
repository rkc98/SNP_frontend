import { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import VerifyOtpUI from "../components/OTP/VerifyOtpUI";
import { Fragment } from "react";
import Swal from "sweetalert2";
import Axios from "axios";
import AuthContext from "../context/auth-context";

const VerifyOtp = () => {
  const [verifyotp, setverifyotp] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const location = useLocation();
  const mobileNumber = location.state.mobile;
  const type = location.state.type;

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const otpVal = otp.join("");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const clearHandler = (e) => {
    setOtp([...otp.map((v) => "")]);
  };

  const verifyOtpHandler = (event) => {
    event.preventDefault();

    if (otpVal.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Enter OTP",
        text: "Please enter OTP.",
      });
    } else if (otpVal.length !== 4) {
      Swal.fire({
        icon: "warning",
        title: "Invalid OTP",
        text: "Please enter valid OTP.",
      });
    } else {
      //api call

      if (type === "email") {
        console.log("verify email");
      } else {
        Axios.get(
          `/OtpApi/checkotp?username=KuruvilaT&password=Sqxl4Y13&msisdn=${mobileNumber}&otp=${otpVal}&entityid=1601486162497274041&tempid=1607100000000137652`
        )
          .then((response) => {
            console.log(response);
            setverifyotp(response.data.otp);
            console.log(verifyotp);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      setOtp(["", "", "", ""]);
      Swal.fire({
        icon: "success",
        title: "Valid OTP",
        text: "OTP Validated Successfully!",
      });

      history.push({ pathname: "/admin" });
    }
  };

  authCtx.onLogin(mobileNumber);

  return (
    <Fragment>
      <VerifyOtpUI
        otp={otp}
        handleChange={handleChange}
        verifyOtpHandler={verifyOtpHandler}
        clearHandler={clearHandler}
        mobileNumber={mobileNumber}
        type={type}
      />
    </Fragment>
  );
};

export default VerifyOtp;
