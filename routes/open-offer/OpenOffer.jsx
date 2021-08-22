import React, { useState } from 'react'
import { useRouter } from "next/router"
import { AnimatePresence } from "framer-motion"
import { Button, Info, Modal } from "../../components"

const OpenOffer = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const infoArray = [
        "Please click on message link above to say hello and handle transactions information with buyer"
    ]

    const modalArray = [
        "Please note that if a trade offer is not accepted within two(2) hours of initiation, the trade will be cancelled.", "Please click on message link above to say hello and handle transactions information with buyer"
    ]

    return (
        <section className="open-offer">
            <h3>Trade #mnxhs921</h3>
            <div className="flex-ac">
                <p>
                    <strong>1 BTC = 25,000,000</strong>
                </p>
                <p>
                    <strong>Trade limits :</strong>
                    <span>₦ 50,000 - ₦ 1,000,000</span>
                </p>
            </div>

            <div className="create-offer__trades">
                <div className="trades">
                    <label>Amount in Naira</label>
                    <div className="input-field">
                        <input type="number" placeholder="₦ 50,000" />
                        <span>NGN</span>
                    </div>
                </div>
                <div className="trades">
                    <label>Amount in BTC</label>
                    <div className="input-field">
                        <input type="number" placeholder="0.000153" />
                        <span>BTC</span>
                    </div>
                </div>
            </div>

            <p>
                <strong>Send seller a message here</strong>
                <a href="">wkgfksialhishcichjcqaigu</a>
            </p>

            <Info array={infoArray} />

            <Button onClick={() => { setOpen(true) }} text="Primary" btnClass="btn btn--primary" />

            <AnimatePresence>
                {open &&
                    <Modal handleClose={handleClose}>
                        <h3>Confirm Trade</h3>
                        <h4>Trade details</h4>

                        <div className="detail-table">
                            <div className="detail-table__item">
                                <strong>You will pay</strong>
                                <span>₦ 50,000</span>
                            </div>
                            <div className="detail-table__item">
                                <strong>Seller will transfer</strong>
                                <span>0.000023 <strong>BTC</strong></span>
                            </div>
                            <div className="detail-table__item">
                                <strong>Escrow fee</strong>
                                <span>0.000003 <strong>BTC</strong></span>
                            </div>
                            <div className="detail-table__item">
                                <strong>You will Receive</strong>
                                <span>0.000021 <strong>BTC</strong></span>
                            </div>
                        </div>
                        <p>
                            <strong>Send seller a message here</strong>
                            <a href="">wkgfksialhishcichjcqaigu</a>
                        </p>
                        <Info array={modalArray} />
                        <div className="btn-group">
                            <Button onClick={handleClose} text="Cancel" btnClass="btn btn--secondary" />
                            <Button onClick={() => { router.push("/pending") }} text="Confirm Trade" btnClass="btn btn--primary" />
                        </div>
                    </Modal>
                }
            </AnimatePresence>
        </section>
    )
}

export default OpenOffer
