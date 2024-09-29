const validateForm = (values) => {
    const errors = {};
  
    // Username validation: cannot be empty and must be an email
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (!/^[a-zA-Z0-9_-]{3,16}$/.test(values.username)) {
      errors.username = "*Username must be a valid!";
    }
  
    // Password validation: cannot be empty and must be at least 6 characters
    if (!values.password) {
      errors.password = "*Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "*Password must be at least 6 characters!";
    }
    else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(values.password)){
        errors.password = "*Password is invalid";
    }
  
    return errors;
  };

  export default validateForm;
