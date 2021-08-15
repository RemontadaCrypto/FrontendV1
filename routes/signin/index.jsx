import React from 'react'
import { Layout } from "../../components"
import SignInForm from "./SignInForm"

const signup = () => {
    return (
        <Layout text="Register" url="/signup">
            <SignInForm />
        </Layout>
    )
}

export default signup
