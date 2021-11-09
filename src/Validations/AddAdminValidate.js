const AddAdminValidate = (inputs) => {
  const errors = {};

  //username error
  if (!inputs.username) {
    errors.username = "Please enter username.";
  } else if (!/^[A-Za-z]+$/.test(inputs.username)) {
    errors.username = "Please enter only alphabets.";
  }
  if (!inputs.empid) {
    //city error
    errors.empid = "Please enter empid.";
  }
  //mobile error
  if (!inputs.mobile) {
    errors.mobile = "Please enter mobile.";
  } else if (!/^[0-9\b]+$/.test(inputs.mobile)) {
    errors.mobile = "Please enter only number.";
  } else if (inputs.mobile.length !== 10) {
    errors.mobile = "Please enter valid mobile number.";
  }
  //Email errors

  if (!inputs.email) {
    errors.email = "Please enter email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default AddAdminValidate;
