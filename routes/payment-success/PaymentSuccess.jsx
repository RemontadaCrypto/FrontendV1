import React from 'react'
import { useRouter } from "next/router"
import { Card, Button } from "../../components"

const PaymentSuccess = () => {
    const router = useRouter()
    const cards = [
        {
            tab: "Stage 1", title: "Coin in escrow", info: "Waiting for seller to approve trade offer request", time: "1hr 45minutes"
        },
        {
            tab: "Stage 2", title: "Transaction successful", info: "Transaction successful, coin has been transferred to buyer. Please close trade.", active: true
        },
    ]

    return (
        <section className="seller-escrow complete">
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
            <h3>Transaction complete</h3>
            <p>You have successfully sold <strong>₦50,000</strong> worth of BTC at a rate of <strong>₦700 per Dollar</strong> to <strong>Gabi0987654321</strong></p>

            <Button onClick={() => { console.log("clicked") }} text="Close trade" btnClass="btn btn--primary" />
        </section>
    )
}

export default PaymentSuccess
