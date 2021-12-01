import * as React from 'react';
import { Box, Grid, Typography, Slider } from '@mui/material';

const marks = [{value: 0, label: '0'}, 
               {value: 2, label: '0.2'}, 
               {value: 4, label: '0.4'},
               {value: 6, label: '0.6'},
               {value: 8, label: '0.8'},
               {value: 10, label: '1'}]
function valuetext(value) {
    return `${value}`;
  }

export default function InputSlider(props) {
  const { name, id, handleSliderChange, value } = props;

  return (
    <Box sx={{ width: 320 }}>
      <Typography id="input-slider" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            name={id}
            aria-label="Always visible"
            value={value}
            onChange={handleSliderChange}
            marks={marks}
            getAriaValueText={valuetext}
            max={10}
            min={0}
          />
        </Grid>
      </Grid>
    </Box>
  );
}