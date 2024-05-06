import React from "react";
import Petrol from "./Petrol";
import Diesel from "./Diesel";

const NonElectric = (props) => {
  return (
    <>
      <p>Non Electric</p>
      <Petrol name={props.name} />
      <Diesel />
    </>
  );
};

export default NonElectric;
