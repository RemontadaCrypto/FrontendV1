import React, { useState } from 'react'
import { useRouter } from "next/router"
import { AnimatePresence } from "framer-motion"
import { Button, Modal } from "./index"

const BuyerCard = ({ url, user, coin, worth, username, completed, price, tradetype, limits }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [buyer, setBuyer] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <section className="buyer-card">
            <div className="buyer-card__left">
                <div className="section">
                    <h4>{username}</h4>
                    <p>{completed} trades completed</p>
                </div>

                <div className="section">
                    <h4>{price}</h4>
                    <p>{tradetype}</p>
                </div>
            </div>
            <div className="buyer-card__right">
                <div className="flex-ac">
                    <h4>Trade limits : </h4>
                    <p>{limits}</p>
                </div>
                <Button onClick={() => { buyer ? router.push(url) : setOpen(true) }} text="Buy" btnClass="btn btn--primary" />
            </div>

            <AnimatePresence>
                {open &&
                    <Modal handleClose={handleClose}>
                        <h3>Trade request</h3>

                        <p>You have a new trade request from <strong>{user}</strong> to buy <strong>{worth}</strong> worth of <strong>{coin}</strong></p>
                        <div className="btn-group">
                            <Button onClick={handleClose} text="Decline Offer" btnClass="btn btn--secondary" />
                            <Button onClick={() => { router.push("/seller-escrow") }} text="Accept offer" btnClass="btn btn--primary" />
                        </div>
                    </Modal>
                }
            </AnimatePresence>
        </section>
    )
}

export default BuyerCard
