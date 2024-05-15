import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { valuetext } from "./valuetext";

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={5}
        marks
        min={10}
        max={50}
      />
    </Box>
  );
}
