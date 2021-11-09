import classes from "../Login/LoginUI.module.css";
import otpClasses from "./VerifyOtpUI.module.css";

const VerifyOtpUI = (props) => {
  let codeInfo;

  if (props.type === "email") {
    codeInfo = props.mobileNumber;
  } else {
    let mobile = props.mobileNumber.split("");
    mobile = mobile.fill("*", 0, 7).join("");
    codeInfo = "+91" + mobile;
  }

  return (
    <div className={otpClasses.container}>
      <div className="container-fluid px-4 py-5 mx-auto">
        <div className={`card card0 ${classes.card} ${classes.card0}`}>
          <div
            className="d-flex flex-lg-row flex-column-reverse"
            style={{ minHeight: "85vh" }}
          >
            <div className={`card card1 ${classes.card} ${classes.card1}`}>
              <div className="row justify-content-center my-auto">
                <div className="col-md-8 col-10 my-5">
                  <h1 className="text-2xl font-bold text-center">
                    OTP Verification
                  </h1>
                  <div className="flex flex-col mt-4 text-center">
                    {" "}
                    <span className={otpClasses["mobile-text"]}>
                      Enter the OTP you received at
                    </span>{" "}
                    <span>
                      <b>{codeInfo}</b>
                    </span>{" "}
                  </div>

                  <div className="d-flex flex-row mt-5">
                    {props.otp.map((data, index) => {
                      return (
                        <input
                          className={` form-control text-center ${otpClasses["form-control"]} ${classes["custom-select"]}`}
                          type="text"
                          name="otp"
                          maxLength="1"
                          key={index}
                          value={data}
                          onChange={(e) => props.handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                        />
                      );
                    })}
                  </div>

                  <div className="text-center mt-5">
                    <span className="d-block mobile-text">
                      Don't receive the code?
                    </span>
                    <span className="font-weight-bold text-danger cursor">
                      Resend
                    </span>
                  </div>

                  <br />

                  <div className="row text-center">
                    <div className="col-6 md-5">
                      <button
                        className={`${otpClasses.btn} btn-secondary`}
                        onClick={props.clearHandler}
                      >
                        Clear
                      </button>
                    </div>
                    <div className="col-6 md-5">
                      <button
                        className={`${otpClasses.btn} btn-block ${otpClasses["btn-otp"]}`}
                        onClick={props.verifyOtpHandler}
                      >
                        Verify OTP
                        {/* onClick={(e) => alert("Entered OTP is " + otp.join("")) */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`card card2 ${classes.card} ${otpClasses.card2}`}>
              <div className="my-auto mx-md-5 px-md-5 right">
                <br />
                <h5 className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpUI;
