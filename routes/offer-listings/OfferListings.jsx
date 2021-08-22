import React, { useState } from 'react'
import Link from "next/link"
import { InputSelect, BuyerCard } from "../../components"

const OfferListings = () => {
    // FILTER ARRAYS
    const coinArray = [
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

    const filterArray = [
        {
            value: 'Popularity',
            label: "Popularity"
        },
        {
            value: 'Popularity',
            label: "Popularity"
        },
        {
            value: 'Popularity',
            label: "Popularity"
        },
    ]

    const tradeArray = [
        {
            value: 'Any',
            label: "Any"
        },
        {
            value: 'Any',
            label: "Any"
        },
        {
            value: 'Any',
            label: "Any"
        }
    ]

    // FILTER STATES
    const [coinValue, setCoinValue] = useState(null)
    const [filterValue, setFilterValue] = useState(filterArray[0])
    const [tradeValue, setTradeValue] = useState(tradeArray[0])

    // FILTER FUNCTIONS
    const handleCoin = (selectedOption) => {
        setCoinValue(selectedOption)
    }

    const handleFilter = (selectedOption) => {
        setFilterValue(selectedOption)
    }

    const handleTrade = (selectedOption) => {
        setTradeValue(selectedOption)
    }

    // BUYER CARD
    const offerCards = [
        {
            user: "Gabi0987654321",
            coin: "BTC",
            worth: "₦50,000",
            username: "Username",
            completed: 20,
            price: "₦18,848,550/BTC",
            tradetype: "Naira trade",
            limits: "₦50,000 - ₦ 1,000,000"
        },
        {
            user: "Gabi0987654321",
            coin: "BTC",
            worth: "₦50,000",
            username: "Username",
            completed: 20,
            price: "₦18,848,550/BTC",
            tradetype: "Naira trade",
            limits: "₦50,000 - ₦ 1,000,000"
        },
        {
            user: "Gabi0987654321",
            coin: "BTC",
            worth: "₦50,000",
            username: "Username",
            completed: 20,
            price: "₦18,848,550/BTC",
            tradetype: "Naira trade",
            limits: "₦50,000 - ₦ 1,000,000"
        },
        {
            user: "Gabi0987654321",
            coin: "BTC",
            worth: "₦50,000",
            username: "Username",
            completed: 20,
            price: "₦18,848,550/BTC",
            tradetype: "Naira trade",
            limits: "₦50,000 - ₦ 1,000,000"
        },
        {
            user: "Gabi0987654321",
            coin: "BTC",
            worth: "₦50,000",
            username: "Username",
            completed: 20,
            price: "₦18,848,550/BTC",
            tradetype: "Naira trade",
            limits: "₦50,000 - ₦ 1,000,000"
        },
    ]

    return (
        <section className="offer-listings">
            <h2>Buy CryptoCurrency</h2>
            <section className="offer-listings__filters">
                <div className="filter">
                    <label>Select coin</label>
                    <InputSelect value={coinValue} onChange={handleCoin} placeholder="Select trading coin" options={coinArray} />
                </div>

                <div className="filter">
                    <label>Filter by</label>
                    <InputSelect value={filterValue} onChange={handleFilter} options={filterArray} />
                </div>

                <div className="filter">
                    <label>Trade type</label>
                    <InputSelect value={tradeValue} onChange={handleTrade} options={tradeArray} />
                </div>
            </section>

            <section className="offer-listings__card">
                {offerCards.map((card, index) => (
                    <Link key={index} href={`/offer-listings/${index}`}>
                        <a>
                            <BuyerCard
                                user={card.user}
                                coin={card.coin}
                                worth={card.worth}
                                username={card.username}
                                completed={card.completed}
                                price={card.price}
                                tradetype={card.tradetype}
                                limits={card.limits} />
                        </a>
                    </Link>
                ))}
            </section>
        </section>
    )
}

export default OfferListings
