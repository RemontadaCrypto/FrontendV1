import React, { useState } from 'react'
import Link from "next/link"
import { Input, Button } from "../../components"

const SignupForm = () => {
    const [form, setForm] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }

    return (
        <section className="signup signin">
            <h3>Welcome Back</h3>
            <p>Log back into your account and continue trading</p>
            <form onSubmit={handleSubmit} >
                <Input name="email" onChange={handleChange} label="Email address" placeholder="Input email here" value={form.email} />
                <Input type="password" name="password" onChange={handleChange} label="Set your password" value={form.password} />
                <div className="form-button">
                    <Button text="Login" type="submit" btnClass="btn btn--primary" />
                </div>
            </form>
            <footer>Do not have an account? <Link href="/signup"><a>Register here</a></Link> </footer>
        </section>
    )
}

export default SignupForm
