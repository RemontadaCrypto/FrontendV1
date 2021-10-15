import React, { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "../../axios/axiosInstance";

import { Button, InputSelect, Info, Modal, TradeCard } from "../../components";
import { ErrorHandler } from "../../utils/errorHandler";
import BackdropSpinner from "../../components/UI/BackdropSpinner";

const info = [
  "Payments will be recieved only through bank transfers.",
  "Coins will only be released from escrow when payments have beenconfirmed from both parties.",
  "Transactions will be cancelled within 2 hours if further actionsare not taken on a trade and your coins will return to your walletfrom escrow.",
];

var numberOnlyRegex = /^(?:[1-9]\d*|\d)$/;

const OfferSchema = Yup.object().shape({
  coin: Yup.string().required("Select a trading coin"),
  rate: Yup.string().matches(numberOnlyRegex, "Enter a valid trade rate"),
  min: Yup.string()
    .matches(numberOnlyRegex, "Enter a valid minimum trade volume")
    .required("Minimum trade volume is required"),
  max: Yup.string()
    .matches(numberOnlyRegex, "Enter a valid maximum trade volume")
    .required("Maximum trade volume is required"),
});

const CreateOffer = () => {
  const { coins } = useSelector((state) => state.coins);
  const token = useSelector((state) => state.user.token);
  const [selectValue, setSelectValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (!coins) {
      router.back();
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      coin: "",
      type: "",
      rate: "",
      min: "",
      max: "",
    },
    validationSchema: OfferSchema,
    onSubmit: (values, { resetForm }) => {
      _createOfferApi(values, resetForm);
    },
  });

  const _createOfferApi = async (values, resetForm) => {
    //dismiss all toasts
    toast.dismiss();

    setLoading(true);
    setShowSuccessModal(false);

    try {
      await axios({
        method: "post",
        url: "offers/store",
        data: values,
        headers: { Authorization: `Bearer ${token}` },
      });

      setLoading(false);
      resetForm();
      setShowSuccessModal(true);
    } catch (e) {
      setLoading(false);
      const error = ErrorHandler(e);

      if (!e.response.data.message) {
        toast.error(error || "Unable to create offer!", {
          duration: 6000,
          position: "top-center",
        });
      } else {
        toast.error(e.message || "Unable to create offer!", {
          duration: 6000,
          position: "top-center",
        });
      }
    }
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <>
      {loading && <BackdropSpinner />}
      <section className="create-offer">
        <h2>Create your trade offer</h2>
        <h3>Select trading coin</h3>
        <div className="w-100 text-center">
          <InputSelect
            value={selectValue}
            onChange={(selectedOption) => {
              setSelectValue(selectedOption);
              formik.setFieldValue("coin", selectedOption.value);
            }}
            placeholder="Select trading coin"
            options={
              coins &&
              coins.map((coin) => ({
                value: coin.short_name,
                label: coin.name,
              }))
            }
          />
          {formik.touched.coin && formik.errors.coin ? (
            <span className="text-danger mt-2 font-weight-bold">
              {formik.errors.coin}
            </span>
          ) : null}
        </div>
        <h3>Set trade type</h3>
        <p>Set your prices to a specific dollar rate</p>

        <TradeCard formik={formik} />

        <h3>Set trade volumes</h3>
        <div className="create-offer__trades">
          <div className="trades">
            <label htmlFor="naira">Minimum trade volume</label>
            <div className="input-field">
              <input
                type="number"
                name="min"
                value={formik.values.min}
                onChange={formik.handleChange}
              />
              <span>{formik.values.type === "dollar" ? "USD" : "NGN"}</span>
            </div>
            {formik.touched.min && formik.errors.min ? (
              <span className="text-light d-block text-center mt-2 font-weight-bold position-absolute">
                {formik.errors.min}
              </span>
            ) : null}
          </div>
          <div className="trades">
            <label htmlFor="dollar">Maximum trade volume</label>
            <div className="input-field">
              <input
                type="number"
                name="max"
                value={formik.values.max}
                onChange={formik.handleChange}
              />
              <span>{formik.values.type === "dollar" ? "USD" : "NGN"}</span>
            </div>
            {formik.touched.max && formik.errors.max ? (
              <span className="text-light d-block text-center mt-2 font-weight-bold position-absolute">
                {formik.errors.max}
              </span>
            ) : null}
          </div>
        </div>

        <Info array={info} />

        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          text="Proceed"
          btnClass="btn btn--primary"
        />
        <AnimatePresence>
          {showSuccessModal && (
            <Modal handleClose={handleClose}>
              <h3>Offer created</h3>
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="80" cy="80" r="80" fill="#CEFFE2" />
                <path
                  d="M71.9999 92.688L108.768 55.916L114.428 61.572L71.9999 104L46.5439 78.544L52.1999 72.888L71.9999 92.688Z"
                  fill="#2E774B"
                />
              </svg>
              <p>
                Your trade offer has successfully been created and added to the
                offers list
              </p>
              <div className="btn-group">
                <Button
                  onClick={handleClose}
                  text="Cancel"
                  btnClass="btn btn--secondary"
                />
                <Button
                  onClick={() => {
                    router.push("/offer-listings");
                  }}
                  text="Go to offers"
                  btnClass="btn btn--primary"
                />
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default CreateOffer;
