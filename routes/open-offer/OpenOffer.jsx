import React from 'react'
import { useRouter } from "next/router"
import { Button, Info } from "../../components"

const OpenOffer = () => {
    const router = useRouter()
    const infoArray = [
        "Please click on message link above to say hello and handle transactions information with buyer"
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

            <Button onClick={() => { router.push("/payment-success") }} text="Primary" btnClass="btn btn--primary" />
        </section>
    )
}

export default OpenOffer
