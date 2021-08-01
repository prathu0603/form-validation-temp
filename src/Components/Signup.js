import React from "react";
import formImg from "../Assets/form.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must Be 15 Characters Or Less")
      .required("Required"),
    email: Yup.string().email("Enter A Valid Email").required("Required"),
    password: Yup.string()
      .min(6, "Password Must Be Atleast 6 Character Long")
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
      console.log(values.name);
    },
    validationSchema: validate,
  });

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5">
          <form
            method="POST"
            onSubmit={formik.handleSubmit}
            onReset={formik.resetForm}
          >
            <label>First Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Rahul"
              className={`form-control shadow-none ${
                formik.touched.name && formik.errors.name && "is-invalid"
              }`}
              onBlur={formik.handleBlur}
            />
            <div className="text-danger  mb-2 ">
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""}
            </div>

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`form-control shadow-none ${
                formik.touched.email && formik.errors.email && "is-invalid"
              }`}
              onBlur={formik.handleBlur}
            />
            <div className="text-danger mb-2">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className={`form-control shadow-none ${
                formik.touched.password &&
                formik.errors.password &&
                "is-invalid"
              }`}
              onBlur={formik.handleBlur}
            />
            <div className="text-danger mb-2">
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              value={formik.values.cpassword}
              onChange={formik.handleChange}
              className={`form-control shadow-none ${
                formik.touched.cpassword &&
                formik.errors.cpassword &&
                "is-invalid"
              }`}
              onBlur={formik.handleBlur}
            />
            <div className="text-danger mb-2">
              {formik.touched.cpassword && formik.errors.cpassword
                ? formik.errors.cpassword
                : ""}
            </div>
            <button type="submit" className="btn btn-dark mt-3">
              Register
            </button>
            <button className="btn btn-danger mt-3 mx-5" type="reset">
              Reset
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
