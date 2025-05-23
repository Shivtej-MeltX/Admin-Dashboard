import { Box, Typography } from "@mui/material";
import React from "react";
import LineChart from "../../components/LineChart";
import Header from "../../components/Header";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
