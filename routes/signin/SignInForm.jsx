import React, { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { loginUser } from "../../redux/actions/user.action";
import axios from "../../axios/axiosInstance";
import { useRouter } from "next/router";
import { Input, Button } from "../../components";

const SigninForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (user.isAuth) {
      router.push("/offer-listings");
    }
  }, [user.isAuth]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //dismiss all toasts
    toast.dismiss();

    setLoading(true);

    try {
      const { email, password } = form;

      const body = {
        email,
        password,
      };

      const request = await axios({
        method: "post",
        url: "auth/login",
        data: body,
      });

      setLoading(false);

      if (request.status === 200) {
        dispatch(loginUser(request.data.data, request.data.access_token));
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "Registeration failed!", {
        position: "top-right",
        style: {
          marginTop: 10,
        },
      });
    }
  };
  return (
    <section className="signup signin">
      <h3>Welcome Back</h3>
      <p>Log back into your account and continue trading</p>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          onChange={handleChange}
          label="Email address"
          placeholder="Input email here"
          value={form.email}
        />
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          label="Set your password"
          value={form.password}
        />
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
      <footer>
        Do not have an account?{" "}
        <Link href="/signup">
          <a>Register here</a>
        </Link>{" "}
      </footer>
    </section>
  );
};

export default SigninForm;
