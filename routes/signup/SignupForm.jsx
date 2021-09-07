import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Input, Button } from "../../components";
import axios from "../../axios/axiosInstance";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const formRef = React.useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //dismiss all toasts
    toast.dismiss();

    setLoading(true);

    try {
      const { email, username, password } = form;

      const body = {
        name: username,
        email,
        password,
      };

      await axios({
        method: "post",
        url: "auth/register",
        data: body,
      });

      setForm({ email: "", username: "", password: "" });
      setLoading(false);

      toast.success(
        "You have been successfully registered. Log into your account",
        { duration: 6000, position: "top-center" }
      );
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "Registeration failed!", {
        duration: 6000,
        position: "top-center",
      });
    }
  };

  return (
    <section className="signup">
      <h3>Create new account</h3>
      <p>
        Create an account and start trading cryptocurrencies with very little
        hassles
      </p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          onChange={handleChange}
          label="Email address"
          placeholder="Input email here"
          value={form.email}
        />
        <Input
          name="username"
          onChange={handleChange}
          label="Username"
          placeholder="Input username here"
          value={form.username}
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
      <footer>
        Already have an account?{" "}
        <Link href="/signin">
          <a>Login here</a>
        </Link>{" "}
      </footer>
    </section>
  );
};

export default SignupForm;
