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
  const { name } = props;
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 10) {
      setValue(10);
    }
  };

  return (
    <Box sx={{ width: 320 }}>
      <Typography id="input-slider" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
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