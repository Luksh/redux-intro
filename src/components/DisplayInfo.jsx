import React from "react";
import { useSelector } from "react-redux";

const DisplayInfo = () => {
  const values = useSelector((state) => state.counter);
  const parity = values.count % 2 === 0 ? "even" : "odd";

  return (
    <div>
      {values?.count} is {parity}
    </div>
  );
};

export default DisplayInfo;
