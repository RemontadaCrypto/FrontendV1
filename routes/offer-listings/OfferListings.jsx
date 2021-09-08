import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import axios from "../../axios/axiosInstance";
import { InputSelect, Button } from "../../components";
import Spinner from "../../components/Spinner";
import { selectOffer } from "../../redux/actions/selected-offer.action";
import { useRouter } from "next/router";

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

const OffersCard = ({ offers }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return offers.map((data, index) => {
    return (
      <section className="buyer-card" key={index + data.id}>
        <div className="buyer-card__left">
          <div className="section">
            <h4>{data.user.name}</h4>
            {/* <p>{completed} trades completed</p> */}
          </div>

          <div className="section">
            <h4>
              ₦ {data.coin.price?.toLocaleString()}/{data.coin.short_name}
            </h4>
            <p>{data.type}</p>
          </div>
        </div>
        <div className="buyer-card__right">
          <div className="flex-ac">
            <h4>Trade limits : </h4>
            <p>
              $ {data.min?.toLocaleString()} - $ {data.max?.toLocaleString()}
            </p>
          </div>
          <Button
            text="Buy"
            btnClass="btn btn--primary"
            onClick={() => {
              dispatch(selectOffer(data));
              router.push("/open-offer");
            }}
          />
        </div>
      </section>
    );
  });
};

const LIMIT = 6;

const OfferListings = () => {
  const token = useSelector((state) => state.user.token);
  const [loading, setLoading] = React.useState(false);
  const [offers, setOffers] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [offset, setOffset] = React.useState(0);
  const [meta, setMeta] = React.useState(null);

  // FILTER STATES
  const [coinValue, setCoinValue] = useState(null);
  const [filterValue, setFilterValue] = useState(filterArray[0]);
  const [tradeValue, setTradeValue] = useState(tradeArray[0]);

  React.useEffect(() => {
    getAllOffers();
  }, [page]);

  const getAllOffers = async () => {
    //dismiss all toasts
    toast.dismiss();
    setLoading(true);
    setOffers(null);

    try {
      const request = await axios({
        method: "get",
        url: `/offers?limit=${LIMIT}&offset=${offset}`,
        headers: { Authorization: `Bearer ${token}` },
      });
      setOffers(request.data.data);
      setMeta(request.data.meta);
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

      <section
        style={{
          opacity: offers?.length > 0 && !loading ? 1 : 0,
          visibility: offers?.length > 0 && !loading ? "visible" : "hidden",
        }}
        className="offer-listings__card"
      >
        {offers?.length > 0 && !loading && (
          <>
            <OffersCard offers={offers} />
          </>
        )}
        <div
          style={{
            opacity: offers?.length > 0 && !loading ? 1 : 0,
            visibility: offers?.length > 0 && !loading ? "visible" : "hidden",
          }}
        >
          <ReactPaginate
            containerClassName="pagination"
            activeClassName="pagination-active"
            pageCount={
              meta ? Math.floor(meta.total / LIMIT) : Math.floor(50 / LIMIT)
            }
            pageRangeDisplayed={5}
            initialPage={0}
            forcePage={page === 0 ? 0 : page - 1}
            onPageChange={function (pageNumber) {
              const { selected } = pageNumber;

              if (selected > 0) {
                setPage(selected + 1);
                setOffset((selected + 1 - 1) * LIMIT);
              }

              if (selected === 0) {
                setPage(0);
                setOffset(0);
              }
            }}
          />
        </div>
      </section>
    </section>
  );
};

export default OfferListings;
