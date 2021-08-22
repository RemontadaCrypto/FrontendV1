import React from 'react'
import { MainLayout } from "../../components"
import OpenOffer from "./OpenOffer"

const index = () => {
    return (
        <MainLayout url="offer-listings" text="offers">
            <OpenOffer />
        </MainLayout>
    )
}

export default index
