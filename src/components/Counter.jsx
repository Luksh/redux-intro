import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, resetCount } from "../store/slice/counterSlice";

const Counter = () => {
  const values = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(decrementCount());
        }}
      >
        Decrease Count
      </Button>
      <Typography variant="h4">Count: {values.count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(incrementCount());
        }}
      >
        Increase Count
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(resetCount());
        }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Counter;
