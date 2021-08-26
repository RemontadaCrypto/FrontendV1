import React, { useState } from 'react'

const TradeCard = ({ USD }) => {
    const [value, setValue] = useState("")
    const [open, setOpen] = useState(true)
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className="trade-card">
            <div className="trade-card__info" onClick={() => { setOpen(!open) }}>
                <h4>{USD ? "Setup a Dollar trade" : "Setup a Naira trade"}</h4>
                <p>{USD ? "This option means your trade offer will be displayed in Dollar($) and the transactions will be made in Dollar." : "This option means your trade offer to be displayed in Naira(NGN) and the transactions will be made in Naira."}</p>
            </div>
            {open &&
                <div className="trade-card__main">
                    <h4>{!USD ? "Set Naira per Dollar price" : "Set Dollar per Naira price"}</h4>
                    <div className="trade-card__main__input">
                        <input type="text"
                            onChange={handleChange}
                            value={value} />
                        <span>
                            {!USD ? "NGN/USD" : "USD/NGN"}
                        </span>
                    </div>
                </div>}
        </div>
    )
}

export default TradeCard
