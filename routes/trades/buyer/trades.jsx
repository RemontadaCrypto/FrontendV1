import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import _capitalize from "lodash.capitalize";

import { Button, Info, Card } from "../../../components";
import axios from "../../../axios/axiosInstance";
import BackdropSpinner from "../../../components/UI/BackdropSpinner";

import {
  clearTradeInfo,
  setTradeInfo,
} from "../../../redux/actions/trade-info.action";
import isNairaDollar from "../../../utils/isNairaDollar";
import { resetOffer } from "../../../redux/actions/buyer-offer.action";
import { clearSelectedOffer } from "../../../redux/actions/selected-offer.action";

const infoArray = [
  "Please do not to send any funds to seller until the system updates to show that funds have been put in escrow",
];

const cards = [
  {
    tab: "Stage 1",
    title: "Pending Approval",
    info: "Waiting for seller to approve trade offer request",
    state: 0,
  },
  {
    tab: "Stage 2",
    title: "Coin in escrow",
    info: "Coin has been placed in escrow, to proceed confirm payment to seller.",
    state: 1,
  },
  {
    tab: "Stage 3",
    title: "Successful transaction",
    info: "Transaction successful, coin has been transferred to buyer. Please close trade.",
    state: 2,
  },
];

const Trade = () => {
  const router = useRouter();
  const token = useSelector((state) => state.user.token);
  const offer = useSelector((state) => state.offer);
  const tradeInfo = useSelector((state) => state.tradeInfo);
  const { buyerAmount, escrowFee, coinAmount } = useSelector(
    (state) => state.buyerOffer
  );
  const [loading, setLoading] = React.useState(false);
  const [tradeID, setTradeID] = React.useState(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if ("slug" in router.query && offer) {
      setTradeID(router.query["slug"]);
    }
  }, []);

  React.useEffect(() => {
    if (tradeID) {
      getTrade(tradeID);
    }
  }, [tradeID]);

  const getTrade = async (tradeid) => {
    setLoading(true);

    try {
      const request = await axios({
        method: "get",
        url: `/trades/${tradeid}/show`,
        headers: { Authorization: `Bearer ${token}` },
      });

      setLoading(false);

      const { data } = request;

      const tradeInfo = {
        buyerAmount: buyerAmount,
        status: data.status,
        sellerName: data.seller.name,
        coin: data.coin.short_name,
        rate: data.offer.rate,
        sellerState: data.seller_trade_state,
        currency: _capitalize(data.offer.type),
      };

      dispatch(setTradeInfo(tradeInfo));
    } catch (error) {
      setLoading(false);

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

  const cancelTrade = async () => {
    //dismiss all toasts
    toast.dismiss();
    setLoading(true);

    try {
      const body = {
        trade: tradeID,
      };

      const request = await axios({
        method: "post",
        url: `/trades/${tradeID}/cancel`,
        data: body,
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(false);

      const {
        data: { message },
      } = request;

      toast.success(message, {
        position: "top-center",
      });

      dispatch(resetOffer());
      dispatch(clearTradeInfo());
      dispatch(clearSelectedOffer());
    } catch (error) {
      setLoading(false);

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

  const confirmPayment = async () => {
    //dismiss all toasts
    toast.dismiss();
    setLoading(true);

    try {
      const body = {
        trade: tradeID,
      };

      const request = await axios({
        method: "post",
        url: `/trades/${tradeID}/confirm-payment`,
        data: body,
        headers: { Authorization: `Bearer ${token}` },
      });

      setLoading(false);

      const {
        data: { message },
      } = request;

      toast.success(message, {
        position: "top-center",
      });
      console.log(request);
    } catch (error) {
      setLoading(false);

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

  if (!offer) {
    return (
      <section className="open-offer">
        <h3>No Trade found.</h3>
      </section>
    );
  }

  return (
    <>
      {loading && <BackdropSpinner />}
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
              className={tradeInfo.sellerState == card.state ? "active" : ""}
            />
          ))}
        </div>

        <div className="detail-table">
          <div className="detail-table__item">
            <strong>You will pay</strong>
            <span>
              {isNairaDollar(tradeInfo?.currency)}{" "}
              {tradeInfo.buyerAmount.toLocaleString()}
            </span>
          </div>
          <div className="detail-table__item">
            <strong>Seller will transfer</strong>
            <span>
              {coinAmount}
              <strong> {offer?.coin.short_name} </strong>
            </span>
          </div>
          <div className="detail-table__item">
            <strong>Escrow fee</strong>
            <span>
              {escrowFee} <strong>{offer?.coin.short_name}</strong>
            </span>
          </div>
          <div className="detail-table__item">
            <strong>You will Receive</strong>
            <span>
              {coinAmount - escrowFee} <strong>{offer?.coin.short_name}</strong>
            </span>
          </div>
        </div>

        <Info array={infoArray} />
        <div className="btn-group">
          {tradeInfo.sellerState <= 1 && (
            <Button
              onClick={cancelTrade}
              text="Cancel trade"
              btnClass="btn btn--secondary"
            />
          )}
          {tradeInfo.sellerState == 0 && (
            <Button
              onClick={() => {
                console.log("clicked");
              }}
              text="Message seller"
              btnClass="btn btn--primary"
            />
          )}
          {tradeInfo.sellerState == 1 && (
            <Button
              onClick={confirmPayment}
              text="Confirm payment"
              btnClass="btn btn--primary"
            />
          )}
        </div>

        {tradeInfo.sellerState > 1 && (
          <section className="pending-approval__success">
            <h4>Transaction Complete</h4>
            <p>
              You successfully bought{" "}
              <strong>
                {isNairaDollar(tradeInfo.currency)}
                {buyerAmount?.toLocaleString()}
              </strong>{" "}
              worth of {tradeInfo.coin} from{" "}
              <strong>{tradeInfo.sellerName}</strong>
            </p>

            <Button
              onClick={() => {
                //dismiss all toasts
                toast.dismiss();
                dispatch(resetOffer());
                dispatch(clearTradeInfo());
                dispatch(clearSelectedOffer());

                toast.success("Trade closed", {
                  position: "top-center",
                });
              }}
              text="Close Trade"
              btnClass="btn btn--primary"
            />
          </section>
        )}
      </section>
    </>
  );
};

export default Trade;
