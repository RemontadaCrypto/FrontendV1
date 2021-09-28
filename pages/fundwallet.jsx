import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";

import { Button, InputSelect, MainLayout } from "../components";
import { fetchCoins } from "../redux/actions/coins.action";
import BackdropSpinner from "../components/BackdropSpinner";
import toast from "react-hot-toast";

const FundWallet = () => {
  const [coinAddresses, setCoinAddresses] = React.useState([]);
  const [selectedCoinAddress, setSelectedCoinAddress] = React.useState(null);
  const { user, isAuth } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { coins, loading, error } = useSelector((state) => state.coins);

  const [value, setValue] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!coins) {
      dispatch(fetchCoins());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuth && coinAddresses.length === 0) {
      setCoinAddresses(user.addresses);
    }
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        duration: 6000,
        position: "top-center",
      });
    }
  }, [error]);

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
    const address = coinAddresses.find((adr) => adr[selectedOption.value]);
    setSelectedCoinAddress(address[selectedOption.value].address);
  };

  return (
    <>
      {loading && <BackdropSpinner />}
      <Head>
        <title>Remontada | Fund Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout url="">
        <section className="register">
          <h2>Fund wallet</h2>
          <p>
            Hey
            <span className="text-capitalize font-weight-bold">
              {" "}
              {user?.name}{" "}
            </span>
            you are almost done setting up your trading account, fund your
            exchange wallet and be on your way.
          </p>
          <h3>Select trading coin</h3>
          <InputSelect
            value={value}
            onChange={handleChange}
            placeholder="Select trading coin"
            options={
              coins &&
              coins.map((coin) => ({
                value: coin.short_name,
                label: coin.name,
              }))
            }
          />
          <h3>Scan QR code or copy wallet address below to fund wallet</h3>
          <QRCode
            value={selectedCoinAddress || ""}
            style={{
              width: 304,
              height: 304,
            }}
          />
          <div className="copy-paste flex-ac-jb align-items-center">
            <p className="my-0">{selectedCoinAddress}</p>
            <Button text="Copy" btnClass="btn" />
          </div>
          <Button
            onClick={() => {
              router.push("/create-offer");
            }}
            text="Continue"
            btnClass="btn btn--primary"
          />
        </section>
      </MainLayout>
    </>
  );
};

export default FundWallet;
