import * as React from 'react';
import { Box, Grid, Typography, Slider } from '@mui/material';



export default function InputSlider(props) {
  const { name, id, min, max, handleSliderChange, value } = props;
  const marks = [];
  const valueText = (value) => {
    return `${value}`;
  }
  const labelText = (value) => {
    return `${value/10}`;
  }
  for (var val = min; val <= max*10; val ++) {
    if ((val % (max * 2)) == 0) {
      marks.push({value: val, label: val / 10});
    } else {
      marks.push({value: val});
    }
  }

  return (
    <Box sx={{ width: 320 }}>
      <Typography id="input-slider" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            name={id}
            value={value}
            onChange={handleSliderChange}
            marks={marks}
            getAriaValueText={valueText}
            max={max*10}
            min={min}
            step={0.000001}
            valueLabelFormat={labelText}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
    </Box>
  );
}