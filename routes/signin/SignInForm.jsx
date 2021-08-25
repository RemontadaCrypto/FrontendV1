import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        setBuyer(false)
    }, [buyer])

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
