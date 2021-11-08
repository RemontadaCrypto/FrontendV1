import React, { useState } from 'react'
import { motion } from "framer-motion";

import { Button } from "../../components"
import TradeCard from "./TradeCard"

const Disputes = () => {
    const [empty, setEmpty] = useState(true)

    const tradeArray = [
        {
            selling: false,
            trade: "#mnxhs921",
            trader: "Gabi987654321",
            price: "₦ 18,848,550 / 0.95BTC",
            rate: "₦ 700 / Dollar($)",
            tradeType: "Naira",
        },
        {
            selling: false,
            trade: "#mnxhs921",
            trader: "Gabi987654321",
            price: "₦ 18,848,550 / 0.95BTC",
            tradeType: "Naira",
        },
        {
            selling: true,
            trade: "#mnxhs921",
            trader: "Gabi987654321",
            price: "₦ 18,848,550 / 0.95BTC",
            rate: "₦ 700 / Dollar($)",
            tradeType: "Naira",
        },
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween" }}
            className="trades__content">
            <header className={empty ? "trades__header empty" : "trades__header"}>
                <h3>Trade Disputes</h3>
            </header>

            {empty ?
                <div className="trades__main">
                    <p>You currently have no active trade disputes,
                        you can report a trade below</p>
                    <Button onClick={() => { console.log("clicked") }} text="Report a trade" btnClass="btn btn--primary" />
                </div> :
                <div className="trades__cards">
                    {tradeArray.map((trade, index) => (
                        <TradeCard
                            key={index}
                            selling={trade.selling}
                            trade={trade.trade}
                            trader={trade.trader}
                            price={trade.price}
                            tradeType={trade.tradeType}
                            rate={trade.rate}
                        />
                    ))}
                </div>
            }

            {!empty &&
                <footer className="trades__footer">
                    <Button onClick={() => { console.log("clicked") }} text="Report a trade" btnClass="btn btn--primary" />
                </footer>}
        </motion.div>
    )
}

export default Disputes
