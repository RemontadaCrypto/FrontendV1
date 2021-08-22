import React from 'react'
import { useRouter } from "next/router"
import { Card, Info, Button } from "../../components"

const SellerEscrow = () => {
    const router = useRouter()
    const cards = [
        {
            tab: "Stage 1", title: "Coin in escrow", info: "Waiting for seller to approve trade offer request", time: "1hr 45minutes", active: true
        },
        {
            tab: "Stage 2", title: "Transaction successful", info: "Transaction successful, coin has been transferred to buyer. Please close trade."
        },
    ]

    const infoArray = [
        "Please ensure to send your correct account credentials to the seller to avoid miscommunications during trade.", "You must confirm that payment has been made by the buyer in order to release your coin to the buyer", "Also note that this trade is timed and will expire when it gets to the time limit."
    ]

    return (
        <section className="seller-escrow">
            <header>Trade #mnxhs921</header>
            <h3>Trade status</h3>
            <div className="seller-escrow__cards">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        tab={card.tab}
                        title={card.title}
                        info={card.info}
                        time={card.time && card.time}
                        active={card.active} />
                ))}
            </div>

            <div className="seller-escrow__prices">
                <div className="flex-ac-jb">
                    <h4>Amount in escrow</h4>
                    <p>0.000153 <strong>BTC</strong></p>
                </div>
                <div className="flex-ac-jb">
                    <h4>Escrow fee</h4>
                    <p>0.000153 <strong>BTC</strong></p>
                </div>
                <div className="flex-ac-jb">
                    <h4>You will recieve</h4>
                    <p>₦ 50,000</p>
                </div>
            </div>

            <div className="flex-ac">
                <h4>Message buyer here</h4>
                <a href="/">wkgfksialhishcichjcqaigu</a>
            </div>

            <Info array={infoArray} />

            <div className="btn-group">
                <Button onClick={() => { console.log("clicked") }} text="Report Buyer" btnClass="btn btn--secondary" />
                <Button onClick={() => { router.push("/payment-success") }} text="Confirm payment" btnClass="btn btn--primary" />
            </div>
        </section>
    )
}

export default SellerEscrow
