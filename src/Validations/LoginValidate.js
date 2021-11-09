const LoginValidate = (inputs) => {
  //Email errors
  const errors = {};
  if (!inputs.email) {
    errors.email = "Please enter email/mobile";
  } else if (!/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(inputs.email)) {
    errors.email = "Please enter valid email / mobile";
  }

  //UserType Errors
  if (inputs.userType === "DEFAULT") {
    errors.userType = "Please select user type.";
  }

  return errors;
};

export default LoginValidate;
