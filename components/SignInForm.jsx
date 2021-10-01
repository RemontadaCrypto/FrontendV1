import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { loginUser } from "../redux/actions/user.action";
import axios from "../axios/axiosInstance";
import { useRouter } from "next/router";
import { Input, Button } from ".";
import { ErrorHandler } from "../utils/errorHandler";
import BackdropSpinner from "./UI/BackdropSpinner";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Please Enter your password"),
});

const SigninForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: SigninSchema,
    onSubmit: (values, { resetForm }) => {
      _handleSubmit(values, resetForm);
    },
  });

  const _handleSubmit = async (values, resetForm) => {
    //dismiss all toasts
    toast.dismiss();

    setLoading(true);

    try {
      const request = await axios({
        method: "post",
        url: "auth/login",
        data: values,
      });

      setLoading(false);

      if (request.status === 200) {
        dispatch(loginUser(request.data.data, request.data.access_token));
        router.push("/offer-listings");
        resetForm();
      }
    } catch (e) {
      setLoading(false);
      const error = ErrorHandler(e);
      toast.error(error || "Unable to login", {
        duration: 6000,
        position: "top-center",
      });
    }
  };

  return (
    <>
      {loading && <BackdropSpinner />}
      <section className="signup signin">
        <h3>Welcome Back</h3>
        <p>Log back into your account and continue trading</p>
        <form onSubmit={formik.handleSubmit}>
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
              text="Login"
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
    </>
  );
};

export default SigninForm;
