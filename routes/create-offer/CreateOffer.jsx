import React, { useState } from 'react'
import { useRouter } from "next/router"
import { AnimatePresence } from "framer-motion"
import { Button, InputSelect, Info, Modal } from "../../components"

const CreateOffer = () => {
    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const options = [
        {
            value: 'BTC',
            label: <div className="options">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#302F2F" />
                </svg>
                Bitcoin (BTC)</div>
        },
        {
            value: 'ETH',
            label: <div className="options">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#302F2F" />
                </svg>
            Ethereum (ETH)</div>
        },
        {
            value: 'USDC',
            label: <div className="options">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#302F2F" />
                </svg>
            USD Coin (USDC)</div>
        }
    ]

    const card = [
        {
            title: "Setup a Naira trade",
            text: "This option means your trade offer to be displayed in Naira(NGN) and the transactions will be made in Naira."
        },
        {
            title: "Setup a Dollar trade",
            text: "This option means your trade offer will be displayed in Dollar($) and the transactions will be made in Dollar."
        }
    ]

    const info = ["Payments will be recieved only through bank transfers.", "Coins will only be released from escrow when payments have beenconfirmed from both parties.", "Transactions will be cancelled within 2 hours if further actionsare not taken on a trade and your coins will return to your walletfrom escrow."]

    const handleChange = (selectedOption) => {
        setValue(selectedOption)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <section className="create-offer">
            <h2>Create your trade offer</h2>
            <h3>Select trading coin</h3>
            <InputSelect value={value} onChange={handleChange} placeholder="Select trading coin" options={options} />
            <h3>Set trade type</h3>
            <p>Set your prices to a specific dollar rate</p>
            <div className="create-offer__cards">
                {card.map((item, index) => (
                    <div key={index} className="create-offer__cards__item">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>

            <h3>Set trade volumes</h3>
            <div className="create-offer__trades">
                <div className="trades">
                    <label htmlFor="naira">Minimum trade volume</label>
                    <div className="input-field">
                        <input type="number" name="naira" id="naira" placeholder="10,000" />
                        <span>NGN</span>
                    </div>
                </div>
                <div className="trades">
                    <label htmlFor="dollar">Maximum trade volume</label>
                    <div className="input-field">
                        <input type="number" name="dollar" id="dollar" placeholder="5,000,000" />
                        <span>NGN</span>
                    </div>
                </div>
            </div>

            <Info array={info} />

            <Button onClick={() => { setOpen(true) }} text="Proceed" btnClass="btn btn--primary" />
            <AnimatePresence>
                {open &&
                    <Modal handleClose={handleClose}>
                        <h3>Offer created</h3>
                        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="80" cy="80" r="80" fill="#CEFFE2" />
                            <path d="M71.9999 92.688L108.768 55.916L114.428 61.572L71.9999 104L46.5439 78.544L52.1999 72.888L71.9999 92.688Z" fill="#2E774B" />
                        </svg>
                        <p>Your trade offer has successfully been created and added to the offers list</p>
                        <div className="btn-group">
                            <Button onClick={handleClose} text="Cancel" btnClass="btn btn--secondary" />
                            <Button onClick={() => { router.push("/offer-listings") }} text="Go to offers" btnClass="btn btn--primary" />
                        </div>
                    </Modal>
                }
            </AnimatePresence>
        </section>
    )
}

export default CreateOffer
