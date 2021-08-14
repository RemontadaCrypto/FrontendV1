import React, { useState } from 'react'
import { Input } from "../../components"

const SignupForm = () => {
    const [form, setForm] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    return (
        <section className="signup">
            <h3>Create new account</h3>
            <p>Create an account and start trading cryptocurrencies with very little hassles</p>
            <form>
                <Input name="email" onChange={handleChange} label="Email address" placeholder="Input email here" value={form.email} />

                <Input type="password" name="password" onChange={handleChange} label="Set your password" value={form.password} />
            </form>
        </section>
    )
}

export default SignupForm
