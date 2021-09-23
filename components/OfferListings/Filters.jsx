import React, { useState } from "react";
import InputSelect from "../InputSelect";

import { coinArray, filterArray, tradeArray } from "../../utils/selectOptions";

function Filters() {
  // FILTER STATES
  const [coinValue, setCoinValue] = useState(null);
  const [filterValue, setFilterValue] = useState(filterArray[0]);
  const [tradeValue, setTradeValue] = useState(tradeArray[0]);

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
  );
}

export default Filters;
