import React, { useState } from "react";

const TradeCard = ({ formik }) => {
  const [selectedOffer, setSelectedOffer] = useState({
    naira: false,
    dollar: false,
  });

  return (
    <section className="w-100">
      <div className="create-offer__cards text-center">
        <div>
          <div
            className={`${"trade-card "}
        ${selectedOffer.naira ? "trade-card__selected" : ""}`}
          >
            <div
              className="trade-card__info"
              onClick={() => {
                setSelectedOffer({
                  ...selectedOffer,
                  naira: true,
                  dollar: false,
                });

                formik.setFieldValue("type", "naira");
                formik.setFieldValue("rate", "");
              }}
            >
              <h4>Setup a Naira trade</h4>
              <p>
                This option means your trade offer to be displayed in Naira(NGN)
                and the transactions willbe made in Naira.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${"trade-card "}
        ${selectedOffer.dollar ? "trade-card__selected" : ""}`}
          >
            <div
              className="trade-card__info"
              onClick={() => {
                setSelectedOffer({
                  ...selectedOffer,
                  dollar: true,
                  naira: false,
                });

                formik.setFieldValue("type", "dollar");
                formik.setFieldValue("rate", "");
              }}
            >
              <h4>Setup a Dollar trade</h4>
              <p>
                This option means your trade offer will be displayed in
                Dollar($) and the transactions will be made in Dollar.
              </p>
            </div>
            {selectedOffer.dollar && (
              <div className="trade-card__main">
                <h4>Set Dollar per Naira price</h4>
                <div className="trade-card__main__input">
                  <input
                    type="text"
                    onChange={(event) => {
                      formik.setFieldValue("type", "dollar");
                      formik.setFieldValue("rate", event.target.value);
                    }}
                    value={
                      formik.values.type === "dollar" ? formik.values.rate : ""
                    }
                  />
                  <span>USD/NGN</span>
                </div>
                {formik.values.type === "dollar" &&
                formik.touched.rate &&
                formik.values.rate === "" ? (
                  <span className="text-danger mt-2 font-weight-bold">
                    Dollar per Naira price is required
                  </span>
                ) : null}
                {formik.values.type === "dollar" &&
                formik.values.rate !== "" &&
                formik.touched.rate &&
                formik.errors.rate ? (
                  <span className="text-danger mt-2 font-weight-bold">
                    {formik.errors.rate}
                  </span>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center">
        {formik.values.type === "" &&
        formik.touched.rate &&
        formik.values.rate === "" ? (
          <span className="text-danger font-weight-bold">
            Choose a trade type
          </span>
        ) : null}
      </div>
    </section>
  );
};

export default TradeCard;
