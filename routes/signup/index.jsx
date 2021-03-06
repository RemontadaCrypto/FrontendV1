import React from 'react'
import { Layout } from "../../components"
import SignUpForm from "./SignUpForm"

const signup = () => {
    return (
        <Layout text="Login" url="/signin">
            <SignUpForm />
        </Layout>
    )
}

export default signup
