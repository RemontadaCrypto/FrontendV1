import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, InputSelect, MainLayout } from "../components";

const FundWallet = () => {
  const [value, setValue] = useState(null);
  const router = useRouter();
  const options = [
    { value: "BTC", label: "BTC" },
    { value: "ETH", label: "ETH" },
    { value: "CRX", label: "CRX" },
  ];

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
  };

  return (
    <>
      <Head>
        <title>Remontada | Fund Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout url="">
        <section className="register">
          <h2>Fund wallet</h2>
          <p>
            Hey Gabi you are almost done setting up your trading account, fund
            your exchange wallet and be on your way.
          </p>
          <h3>Select trading coin</h3>
          <InputSelect
            value={value}
            onChange={handleChange}
            placeholder="Select trading coin"
            options={options}
          />
          <h3>Scan QR code or copy wallet address below to fund wallet</h3>
          <Image src="/QR.svg" width={304} height={304} />
          <div className="copy-paste flex-ac-jb align-items-center">
            <p className="my-0">Register heriwegf\esdtft egy gygyewgfyigwi</p>
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
