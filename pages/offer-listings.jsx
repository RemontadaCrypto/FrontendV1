import Head from "next/head";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import axios from "../axios/axiosInstance";
import Spinner from "../components/Spinner";
import OffersCard from "../components/OfferListings/OffersCard";
import Filters from "../components/OfferListings/Filters";
import { Layout } from "../components";

const LIMIT = 6;

const offerlistings = () => {
  const token = useSelector((state) => state.user.token);
  const [loading, setLoading] = React.useState(false);
  const [offers, setOffers] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [offset, setOffset] = React.useState(0);
  const [meta, setMeta] = React.useState(null);

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

  return (
    <>
      <Head>
        <title>Remontada | Offer Listings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="offer-listings">
          <h2>Buy CryptoCurrency</h2>
          <Filters />
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
                visibility:
                  offers?.length > 0 && !loading ? "visible" : "hidden",
              }}
            >
              <ReactPaginate
                containerClassName="pagination"
                activeClassName="pagination-active"
                pageCount={
                  meta ? Math.ceil(meta.total / LIMIT) : Math.ceil(50 / LIMIT)
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
      </Layout>
    </>
  );
};

export default offerlistings;
