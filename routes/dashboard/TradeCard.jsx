import React from 'react'
import Image from "next/image"
import { Button } from "../../components"

const DashboardTradeCard = ({ selling, trade, trader, tradeType, price, rate }) => {
    return (
        <div className="trade__card">
            <div className="trade__card__left">
                <Image src="/btc.svg" height="64" width="64" />
                <div className="trade__card__left__text">
                    <div>
                        <h5>Trade {trade}</h5>
                        <p>Trade with <strong> {trader}</strong></p>
                    </div>
                    <div>
                        <h5>{tradeType} Trade</h5>
                        {selling
                            ? <p><strong>Selling:</strong>  {price}</p>
                            : <p><strong>Buying:</strong> {price}</p>}
                        {rate && <p><strong>Rate:</strong> {rate}</p>}
                    </div>
                </div>
            </div>

            <div className="trade__card__right">
                <Button onClick={() => { console.log("clicked") }} text="View trade" btnClass="btn btn--primary" />
            </div>
        </div>
    )
}

export default DashboardTradeCard
