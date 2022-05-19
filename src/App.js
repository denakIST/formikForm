import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";
import validator from 'validator';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },

    validate: values => {
      const errors = {};
      if (!values.emailField) errors.emailField = "Field required";
      if (!values.pswField) errors.pswField = "Field required";
      if (values.emailField && !validator.isEmail(values.emailField)) errors.emailField = "Username should be an email";
      //if (values.email && values.password && validator.isEmail(values.email)) alert = "Login Successfull";
      return errors;
    },

    notify: () => {
      msg = '';
      if (!values.errors) msg = "Login Successful";
      return msg;
    }


  })
  
  return (
    <div>
        //The app is ready! You can proceed with the task instructions. TODO:
        //build you form here.
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id='emailField' type='text' onChange={formik.handleChange} value={formik.values.emailField} />
        {formik.errors.emailField ? <div id='emailError' style={{ color: 'red' }}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input id='pswField' type='text' onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div id='pswError' style={{ color: 'red' }}>{formik.errors.pswField}</div> : null}
        <button id='submitBtn' type='submit'>Submit</button>
        
      </form>
    </div>
  );
}

export default App;
