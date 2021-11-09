import classes from "./LoginUI.module.css";
import { Fragment } from "react";

const LoginUI = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className="container-fluid px-4 py-5 mx-auto">
          <div className={`card card0 ${classes.card} ${classes.card0}`}>
            <div
              className="d-flex flex-lg-row flex-column-reverse"
              style={{ minHeight: "85vh" }}
            >
              <div className={`card card1 ${classes.card} ${classes.card1}`}>
                <div className="row justify-content-center my-auto">
                  <div className="col-md-8 col-10 my-5">
                    <div className="row justify-content-center px-3 mb-3">
                      <h3
                        className={`mb-5 ${classes.heading} ${classes["anim-topToBottom "]}`}
                      >
                        Welcome To ShopNPay
                      </h3>
                    </div>

                    <h6 className={classes["msg-info"]}>
                      Please login to your account
                    </h6>

                    <form onSubmit={props.handleSubmit}>
                      <div className="form-group">
                        <select
                          className={`form-select ${classes["custom-select"]}`}
                          id="userType"
                          name="userType"
                          onChange={props.handleInputChange}
                          value={props.inputs.userType}
                        >
                          <option value="DEFAULT">Choose user</option>
                          <option value="super-admin">Super Admin</option>
                          <option value="admin">Admin</option>
                          <option value="other user">Other User</option>
                        </select>
                        {props.errors.userType && (
                          <p className={classes.invalid}>
                            {props.errors.userType}
                          </p>
                        )}
                      </div>
                      <br />
                      <div className="form-group">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Phone no or email id"
                          className={`form-control ${classes["custom-input"]}`}
                          value={props.inputs.email}
                          onChange={props.handleInputChange}
                        />
                        {props.errors.email && (
                          <p className={classes.invalid}>
                            {props.errors.email}
                          </p>
                        )}
                      </div>

                      <div className="row justify-content-center my-3 px-3">
                        <button className={`btn-block ${classes["btn-color"]}`}>
                          Send OTP
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className={`card card2 ${classes.card} ${classes.card2}`}>
                <div className="my-auto mx-md-5 px-md-5 right">
                  <h1 className={`text-white ${classes["anim-left"]}`}>
                    We are more than just a company
                  </h1>
                  <br />

                  <h5 className={`text-white ${classes["anim-right"]}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginUI;
