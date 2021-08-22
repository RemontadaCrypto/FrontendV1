import React from 'react'
import { MainLayout } from "../../components"
import SellerEscrow from "./SellerEscrow"

const index = () => {
    return (
        <MainLayout url="dashboard" text="dashboard">
            <SellerEscrow />
        </MainLayout>
    )
}

export default index
