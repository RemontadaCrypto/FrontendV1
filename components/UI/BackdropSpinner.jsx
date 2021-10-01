import React from "react";

const BackdropSpinner = () => {
  return (
    <div className="backdropLoader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default BackdropSpinner;
