import React from 'react'
import { MainLayout } from "../../components"
import PendingApproval from "./PendingApproval"

const index = () => {
    return (
        <MainLayout lg url="offer-listings" text="offers">
            <PendingApproval />
        </MainLayout>
    )
}

export default index
