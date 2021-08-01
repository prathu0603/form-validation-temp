import React from "react";
import formImg from "../Assets/form.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const validate = Yup.object().shape({
    name: Yup.string()
      .max(15, "Must Be 15 Characters Or Less")
      .required("Required"),
    email: Yup.string().email("Enter A Valid Email").required("Required"),
    password: Yup.string()
      .max(6, "Must Be 6 Characters Or More")
      .required("Required"),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password Must Match")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: validate,
  });

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <form method="POST" onSubmit={formik.handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Rahul"
              className="form-control shadow-none"
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="form-control shadow-none"
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="form-control shadow-none"
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              value={formik.values.cpassword}
              onChange={formik.handleChange}
              className="form-control shadow-none"
            />
            <button type="submit" className="btn btn-dark mt-3">
              Register
            </button>
          </form>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={formImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
