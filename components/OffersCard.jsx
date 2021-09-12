import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import _capitalize from "lodash.capitalize";

import { selectOffer } from "../redux/actions/selected-offer.action";
import Button from "../components/Button";
import isNairaDollar from "../utils/isNairaDollar";

const OffersCard = ({ offers }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return offers.map((data, index) => {
    return (
      <section className="buyer-card" key={index + data.id}>
        <div className="buyer-card__left">
          <div className="section">
            <h4>{data.user.name}</h4>
          </div>

          <div className="section">
            <h4>
              {isNairaDollar(data.type)}
              {data.coin.price.toLocaleString()} / {data.coin.short_name}
            </h4>
            <p> {_capitalize(data.type)} </p>
          </div>
        </div>
        <div className="buyer-card__right">
          <div className="flex-ac">
            <h4>Trade limits : </h4>
            <p>
              <b>{isNairaDollar(data.type)}</b>
              {data.min?.toLocaleString()} - <b>{isNairaDollar(data.type)}</b>
              {data.max?.toLocaleString()}
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

export default OffersCard;
