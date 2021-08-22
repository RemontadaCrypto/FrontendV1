import React from 'react'
import { MainLayout } from "../../components"
import PaymentSuccess from "./PaymentSuccess"

const index = () => {
    return (
        <MainLayout url="dashboard" text="dashboard">
            <PaymentSuccess />
        </MainLayout>
    )
}

export default index
