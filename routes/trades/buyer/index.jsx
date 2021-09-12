import React from "react";
import { MainLayout } from "../../../components";
import Trades from "./trades";

const index = () => {
  return (
    <MainLayout lg url="offer-listings" text="offers">
      <Trades />
    </MainLayout>
  );
};

export default index;
