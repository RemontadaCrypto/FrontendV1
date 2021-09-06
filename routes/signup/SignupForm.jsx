import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { Input, Button } from "../../components";
import axios from "../../axios/axiosInstance";



const SignupForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const formRef = React.useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit =  async (e) => {
    e.preventDefault();

       //dismiss all toasts
      toast.dismiss();

     try {
       const {email, username, password} = form;

       const body = {
         name: username,
         email,
         password
       };

      await axios({
        method: 'post',
        url: 'auth/register',
        data: body
      });

       setForm({ email: '', username: '', password: ''});

       toast.success(
         'You have been successfully registered. Check your email for confirmation link', {
          position: 'top-center'
           });
    }catch(error) {
       toast.error(
         error.message || 'Registeration failed!', {
          position: 'top-center'
         });
    }
  };

  return (
    <section className='signup'>
      <h3>Create new account</h3>
      <p>
        Create an account and start trading cryptocurrencies with very little
        hassles
      </p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name='email'
          onChange={handleChange}
          label='Email address'
          placeholder='Input email here'
          value={form.email}
        />
        <Input
          name='username'
          onChange={handleChange}
          label='Username'
          placeholder='Input username here'
          value={form.username}
        />
        <Input
          type='password'
          name='password'
          onChange={handleChange}
          label='Set your password'
          value={form.password}
        />
        <div className='form-button'>
          <Button text='Register' type='submit' btnClass='btn btn--primary' />
        </div>
      </form>
      <footer>
        Already have an account?{" "}
        <Link href='/signin'>
          <a>Login here</a>
        </Link>{" "}
      </footer>
    </section>
  );
};

export default SignupForm;
