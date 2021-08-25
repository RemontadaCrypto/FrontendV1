import React, { useState } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import { Input, Button } from "../../components"

const SignupForm = () => {
    const router = useRouter()
    const [buyer, setBuyer] = useState(true)
    const [form, setForm] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        buyer ? router.push("/offer-listings") : router.push("/register")
    }

    return (
        <section className="signup">
            <h3>Create new account</h3>
            <p>Create an account and start trading cryptocurrencies with very little hassles</p>
            <form onSubmit={handleSubmit} >
                <Input name="email" onChange={handleChange} label="Email address" placeholder="Input email here" value={form.email} />
                <Input type="password" name="password" onChange={handleChange} label="Set your password" value={form.password} />
                <div className="form-button">
                    <Button text="Register" type="submit" btnClass="btn btn--primary" />
                </div>
            </form>
            <footer>Already have an account? <Link href="/signin"><a>Login here</a></Link> </footer>
        </section>
    )
}

export default SignupForm
