import React, { useState } from 'react'
import { motion } from "framer-motion";

import { Button } from "../../components"
import TradeCard from "./TradeCard"

const Trade = () => {
    const [empty, setEmpty] = useState(false)

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
                <h3>Live trades</h3>
                <label>
                    <input type="search" placeholder="Search trades using trade ID or username" />
                </label>
            </header>

            {empty ?
                <div className="trades__main">
                    <p>There are currently no ongoing trades, all your live trades
                        will be displayed here. Begin a new trade.</p>
                    <Button onClick={() => { console.log("clicked") }} text="Start trading" btnClass="btn btn--primary" />
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

            <div className="separator"></div>

            <header className={empty ? "trades__header empty" : "trades__header"}>
                <h3>Completed trades</h3>
            </header>

            {empty ? <footer>All your completed trades will be displayed here</footer> :
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
                </div>}
        </motion.div>
    )
}

export default Trade
