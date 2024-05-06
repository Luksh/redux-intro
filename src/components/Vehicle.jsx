import React, { useState } from "react";
import Electric from "./Electric";
import NonElectric from "./NonElectric";
import { TextField } from "@mui/material";

const Vehicle = () => {
  const [vehicleName, setVehicleName] = useState("");

  return (
    <>
      <p>Vehicle</p>
      <TextField
        label="Enter vehicle name"
        onChange={(event) => {
          setVehicleName(event.target.value);
        }}
      />
      <Electric />
      <NonElectric name={vehicleName} />
    </>
  );
};

export default Vehicle;
