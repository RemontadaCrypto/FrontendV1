import React, { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import _capitalize from "lodash.capitalize";

import { Button, Info, Modal } from "../../components";
import isNairaDollar from "../../utils/isNairaDollar";

import axios from "../../axios/axiosInstance";
import BackdropSpinner from "../../components/BackdropSpinner";

import {
  resetOffer,
  setCoinAmount,
  setBuyerAmount,
  setEscrowFee,
} from "../../redux/actions/buyer-offer.action";

const infoArray = [
  "Please click on message link above to say hello and handle transactions information with buyer",
];

const modalArray = [
  "Please note that if a trade offer is not accepted within two(2) hours of initiation, the trade will be cancelled.",
  "Please click on message link above to say hello and handle transactions information with buyer",
];

const OpenOffer = () => {
  const router = useRouter();
  const offer = useSelector((state) => state.offer);
  const token = useSelector((state) => state.user.token);
  const { buyerAmount, escrowFee, coinAmount } = useSelector(
    (state) => state.buyerOffer
  );

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const initiateTrade = async () => {
    //dismiss all toasts
    toast.dismiss();
    setLoading(true);

    try {
      const body = {
        offer_id: offer.id,
        amount: buyerAmount,
      };

      const request = await axios({
        method: "post",
        url: `/trades/initiate`,
        data: body,
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(false);

      const {
        data: { data, message },
      } = request;

      toast.success(message, {
        position: "top-center",
      });

      router.replace(`/trades/${data.id}/show`);
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
        <h3>No offer found</h3>
      </section>
    );
  }

  return (
    <>
      {loading && <BackdropSpinner />}
      <motion.section
        initial={{ y: 100 }}
        animate={{
          y: 0,
          transition: {
            duration: 0.6,
          },
        }}
        transition={{ type: "tween" }}
        className="open-offer"
      >
        <h3>Trade #mnxhs921</h3>
        <div className="flex-ac">
          <p>
            <strong>
              1 {offer?.coin.short_name} = <b>{isNairaDollar(offer.type)}</b>
              {offer?.coin.price.toLocaleString()}
            </strong>
          </p>
          <p>
            <strong>Trade limits :</strong>
            <span>
              <b>{isNairaDollar(offer.type)}</b>
              {offer.min?.toLocaleString()} - <b>{isNairaDollar(offer.type)}</b>
              {offer.max?.toLocaleString()}
            </span>
          </p>
        </div>

        <div className="create-offer__trades">
          <div className="trades">
            <label>Amount in Naira</label>
            <div className="input-field">
              <input
                type="number"
                onChange={({ target }) => {
                  dispatch(setBuyerAmount(+target.value));
                }}
                value={buyerAmount > 0 ? buyerAmount : ""}
                placeholder="Amount"
              />
              {offer?.type.toLowerCase() == "naira" ? (
                <span>NGN</span>
              ) : (
                <span>USD</span>
              )}
            </div>
          </div>
          <div className="trades">
            <label>Amount in {offer?.coin.short_name}</label>
            <div className="input-field">
              <input type="number" placeholder={offer?.rate} readOnly />
              <span>{offer?.coin.short_name}</span>
            </div>
          </div>
        </div>

        <p>
          <strong>Send seller a message here</strong>
          <a href="">wkgfksialhishcichjcqaigu</a>
        </p>

        <Info array={infoArray} />

        <Button
          onClick={() => {
            if (buyerAmount >= offer?.min && offer?.max >= buyerAmount) {
              dispatch(
                setCoinAmount(Math.floor(buyerAmount / offer?.coin.price))
              );

              dispatch(
                setEscrowFee(
                  (+process.env.ESCROW_PERCENTAGE / 100) *
                    Math.floor(buyerAmount / offer?.coin.price)
                )
              );

              setOpen(true);
            } else {
              alert(`Trade limit: ${offer?.min} - ${offer?.max}`);
            }
          }}
          text="Primary"
          btnClass="btn btn--primary"
        />

        <AnimatePresence>
          {open && (
            <Modal handleClose={handleClose}>
              <h3>Confirm Trade</h3>
              <h4>Trade details</h4>

              <div className="detail-table">
                <div className="detail-table__item">
                  <strong>You will pay</strong>
                  <span>
                    {isNairaDollar(offer.type)}
                    {buyerAmount.toLocaleString()}
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
                    {escrowFee}
                    <strong> {offer?.coin.short_name} </strong>
                  </span>
                </div>
                <div className="detail-table__item">
                  <strong>You will Receive</strong>
                  <span>
                    {coinAmount - escrowFee}
                    <strong> {offer?.coin.short_name} </strong>
                  </span>
                </div>
              </div>
              <p className="text-center">
                <strong className="d-block w-100">
                  Send seller a message here
                </strong>
                <a href="" className="d-block w-100">
                  wkgfksialhishcichjcqaigu
                </a>
              </p>
              <Info array={modalArray} />
              <div className="btn-group">
                <Button
                  onClick={() => {
                    dispatch(resetOffer());
                    handleClose();
                  }}
                  text="Cancel"
                  btnClass="btn btn--secondary"
                />
                <Button
                  onClick={() => {
                    initiateTrade();
                  }}
                  text="Confirm Trade"
                  btnClass="btn btn--primary"
                />
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
};

export default OpenOffer;
