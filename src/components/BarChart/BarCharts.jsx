import * as React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

function BarCharts() {
  const series = [
    {
      label: "2020",
      data: [16, 15, 12, 11, 10, 9, 8, 7, 6, 5, 15, 12, 11],
    },
    {
      label: "YTD2021",
      data: [18, 16, 13, 12, 11, 10, 9, 8, 7, 6, 16, 15, 12],
    },
  ];

  const labels = [
    "Hongkong & Shanghai",
    "JP Morgan & Chase Bank",
    "Citi Bank N.A",
    "Bank Of China",
    "Standard Chartered Bank",
    "UBS Securities Hong Kong Limited",
    "BNP Paribas Securities Limited",
    "Industrial & Commercial Bank",
    "Hang Seng Bank Ltd.",
    "DBS Bank Limited",
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <BarChart
        height={500}
        width={1000}
        borderRadius={100}
        xAxis={[{scaleType:'band', data:labels }]} //  Custom labels for the x-axis
        series={series} // 
      />
    </Box>
  );
}

export default BarCharts;

