import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import axios from "../../axios/axiosInstance";
import { InputSelect, BuyerCard } from "../../components";
import Spinner from "../../components/Spinner";

// FILTER ARRAYS
const coinArray = [
  {
    value: "BTC",
    label: (
      <div className="options">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#302F2F" />
        </svg>
        Bitcoin (BTC)
      </div>
    ),
  },
  {
    value: "ETH",
    label: (
      <div className="options">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#302F2F" />
        </svg>
        Ethereum (ETH)
      </div>
    ),
  },
  {
    value: "USDC",
    label: (
      <div className="options">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#302F2F" />
        </svg>
        USD Coin (USDC)
      </div>
    ),
  },
];

const filterArray = [
  {
    value: "Popularity",
    label: "Popularity",
  },
  {
    value: "Popularity",
    label: "Popularity",
  },
  {
    value: "Popularity",
    label: "Popularity",
  },
];

const tradeArray = [
  {
    value: "Any",
    label: "Any",
  },
  {
    value: "Any",
    label: "Any",
  },
  {
    value: "Any",
    label: "Any",
  },
];

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
    limits: "₦50,000 - ₦ 1,000,000",
  },
  {
    user: "Gabi0987654321",
    coin: "BTC",
    worth: "₦50,000",
    username: "Username",
    completed: 20,
    price: "₦18,848,550/BTC",
    tradetype: "Naira trade",
    limits: "₦50,000 - ₦ 1,000,000",
  },
  {
    user: "Gabi0987654321",
    coin: "BTC",
    worth: "₦50,000",
    username: "Username",
    completed: 20,
    price: "₦18,848,550/BTC",
    tradetype: "Naira trade",
    limits: "₦50,000 - ₦ 1,000,000",
  },
  {
    user: "Gabi0987654321",
    coin: "BTC",
    worth: "₦50,000",
    username: "Username",
    completed: 20,
    price: "₦18,848,550/BTC",
    tradetype: "Naira trade",
    limits: "₦50,000 - ₦ 1,000,000",
  },
  {
    user: "Gabi0987654321",
    coin: "BTC",
    worth: "₦50,000",
    username: "Username",
    completed: 20,
    price: "₦18,848,550/BTC",
    tradetype: "Naira trade",
    limits: "₦50,000 - ₦ 1,000,000",
  },
];

const OfferListings = () => {
  const token = useSelector((state) => state.user.token);
  const [loading, setLoading] = React.useState(false);
  const [offers, setOffers] = React.useState(null);

  // FILTER STATES
  const [coinValue, setCoinValue] = useState(null);
  const [filterValue, setFilterValue] = useState(filterArray[0]);
  const [tradeValue, setTradeValue] = useState(tradeArray[0]);

  React.useEffect(() => {
    getAllOffers();
  }, []);

  const getAllOffers = async () => {
    //dismiss all toasts
    toast.dismiss();
    setLoading(true);
    setOffers(null);

    try {
      const request = await axios({
        method: "get",
        url: "/offers",
        headers: { Authorization: `Bearer ${token}` },
      });
      setOffers(request.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setOffers(null);

      if (error.response && error.response.statusText) {
        toast.error(error.response.statusText, {
          position: "top-center",
        });
      } else {
        toast.error(error.message, {
          position: "top-center",
        });
      }
    }
  };

  console.log(offers);

  // FILTER FUNCTIONS
  const handleCoin = (selectedOption) => {
    setCoinValue(selectedOption);
  };

  const handleFilter = (selectedOption) => {
    setFilterValue(selectedOption);
  };

  const handleTrade = (selectedOption) => {
    setTradeValue(selectedOption);
  };

  return (
    <section className="offer-listings">
      <h2>Buy CryptoCurrency</h2>
      <section className="offer-listings__filters">
        <div className="filter">
          <label>Select coin</label>
          <InputSelect
            value={coinValue}
            onChange={handleCoin}
            placeholder="Select trading coin"
            options={coinArray}
          />
        </div>

        <div className="filter">
          <label>Filter by</label>
          <InputSelect
            value={filterValue}
            onChange={handleFilter}
            options={filterArray}
          />
        </div>

        <div className="filter">
          <label>Trade type</label>
          <InputSelect
            value={tradeValue}
            onChange={handleTrade}
            options={tradeArray}
          />
        </div>
      </section>
      {loading && <Spinner />}
      {!loading && offers?.length === 0 && (
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 30,
          }}
        >
          <p>There are no offers</p>
        </div>
      )}
      {offers?.length > 0 && !loading && (
        <section className="offer-listings__card">
          {offerCards.map((card, index) => (
            <BuyerCard
              key={index}
              url={`/offer-listings/${index}`}
              user={card.user}
              coin={card.coin}
              worth={card.worth}
              username={card.username}
              completed={card.completed}
              price={card.price}
              tradetype={card.tradetype}
              limits={card.limits}
            />
          ))}
        </section>
      )}
    </section>
  );
};

export default OfferListings;
