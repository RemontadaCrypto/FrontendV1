import React from 'react'
import { Card } from "../../components"

const SellerEscrow = () => {
    const cards = [
        {
            tab: "Stage 1", title: "Coin in escrow", info: "Waiting for seller to approve trade offer request", time: "1hr 45minutes", active: true
        },
        {
            tab: "Stage 2", title: "Transaction successful", info: "Transaction successful, coin has been transferred to buyer. Please close trade."
        },
    ]
    return (
        <section className="seller-escrow">
            <header>Trade #mnxhs921</header>
            <h3>Trade status</h3>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    tab={card.tab}
                    title={card.title}
                    info={card.info}
                    time={card.time && card.time}
                    active={card.active} />
            ))}
        </section>
    )
}

export default SellerEscrow
