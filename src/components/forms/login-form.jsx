import React from "react";
import { useFormik } from "formik";
import ErrorMsg from "./error-msg";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  number: Yup.string().required().min(6).label("Phone"),
});

const initialValues = { name: "", number: "" };

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

const LoginForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="current-log-email">Ismingizni kiriting*</label>
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="name"
          placeholder="Ismingiz"
        />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>

      <div className="form-group">
        <label htmlFor="current-log-password">Phone number*</label>
        <input
          value={values.number}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="number"
          placeholder="Phone number"
        />
      </div>
      {touched.number && <ErrorMsg error={errors.number} />}

      {/* <div className="form-group chekbox-area">
        <div className="edu-form-check">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <a
          href="#"
          onClick={() => handleResetPass(values.email)}
          className="password-reset">
          Lost your password?
        </a>
      </div> */}

      <div className="form-group">
        <button type="submit" className="edu-btn btn-medium">
          So'rov qoldirish <i className="icon-4"></i>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
