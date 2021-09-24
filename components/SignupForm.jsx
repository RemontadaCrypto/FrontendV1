import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Input, Button } from ".";
import axios from "../axios/axiosInstance";
import { ErrorHandler } from "../utils/errorHandler";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Username is Required")
    .min(5, "Username should be minimum of 5 characters."),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One lowercase, a number"
    ),
});

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const formRef = React.useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      _handleSubmit(values, resetForm);
    },
  });

  const _handleSubmit = async (values, resetForm) => {
    //dismiss all toasts
    toast.dismiss();

    setLoading(true);

    try {
      await axios({
        method: "post",
        url: "auth/register",
        data: values,
      });

      setLoading(false);
      resetForm();

      toast.success(
        "You have been successfully registered. Log into your account",
        { duration: 6000, position: "top-center" }
      );
    } catch (e) {
      setLoading(false);
      const error = ErrorHandler(e);
      toast.error(error || "Registeration failed!", {
        duration: 6000,
        position: "top-center",
      });
    }
  };

  return (
    <section className="signup signup-height">
      <h3>Create new account</h3>
      <p>
        Create an account and start trading cryptocurrencies with very little
        hassles
      </p>
      <form ref={formRef} onSubmit={formik.handleSubmit}>
        <Input
          name="email"
          label="Email address"
          placeholder="Input email here"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <span
            className="font-weight-bold text-danger d-block mb-3"
            style={{
              marginTop: "-26px",
            }}
          >
            {formik.errors.email}
          </span>
        ) : null}
        <Input
          name="name"
          label="Username"
          placeholder="Input username here"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <span
            className="font-weight-bold text-danger d-block mb-3"
            style={{
              marginTop: "-26px",
            }}
          >
            {formik.errors.name}
          </span>
        ) : null}
        <Input
          type="password"
          name="password"
          label="Set your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <span
            className="font-weight-bold text-danger d-block mb-3"
            style={{
              marginTop: "-26px",
            }}
          >
            {formik.errors.password}
          </span>
        ) : null}
        <div className="form-button">
          <Button
            text="Register"
            type="submit"
            btnClass="btn btn--primary"
            clicked={loading}
            style={{ opacity: loading ? 0.5 : 1 }}
            icon={
              loading && (
                <AiOutlineLoading3Quarters
                  style={{
                    marginLeft: 10,
                  }}
                />
              )
            }
          />
        </div>
      </form>
    </section>
  );
};

export default SignupForm;
