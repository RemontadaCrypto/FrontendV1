import React, { useState } from 'react'
import { useRouter } from "next/router"
import { Button, Info, Card } from "../../components"

const PendingApproval = () => {
    const router = useRouter()
    const infoArray = [
        "Please do not to send any funds to seller until the system updates to show that funds have been put in escrow"
    ]
    const cards = [
        {
            tab: "Stage 1", title: "Pending Approval", info: "Waiting for seller to approve trade offer request", time: "1hr 45minutes", active: true
        },
        {
            tab: "Stage 2", title: "Coin in escrow", info: "Coin has been placed in escrow, to proceed confirm payment to seller."
        },
        {
            tab: "Stage 3", title: "Successful transaction", info: "Transaction successful, coin has been transferred to buyer. Please close trade."
        },
    ]

    return (
        <section className="pending-approval">
            <h3>Trade #mnxhs921</h3>
            <h4>Trade status</h4>
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

            {!cards[2].active ? <>
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

                <Info array={infoArray} />
                <div className="btn-group">
                    <Button onClick={() => { console.log("clicked") }} text="Cancel trade" btnClass="btn btn--secondary" />
                    <Button onClick={() => { console.log("clicked") }} text="Message seller" btnClass="btn btn--primary" />
                </div>
            </> : <section className="pending-approval__success">
                    <h4>Transaction Complete</h4>
                    <p>You successfully bought <strong>₦50,000</strong> worth of BTC at a rate of <strong>₦700 per Dollar</strong> from <strong>User0987654321</strong></p>

                    <Button onClick={() => { console.log("clicked") }} text="Close Trade" btnClass="btn btn--primary" />
                </section>}
        </section>
    )
}

export default PendingApproval
