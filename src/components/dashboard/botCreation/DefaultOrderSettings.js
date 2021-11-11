import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";
import { TextField } from "@mui/material";
import { Divider } from "@mui/material";

export default function DefaultOrderSettings() {
    const [target, setTarget] = React.useState('');

    const handleChange = (event) => {
        setTarget(event.target.value);
    };
    return (
        <Box m={2} >
            <FormControl fullWidth>
                <InputLabel id="target">Target</InputLabel>
                <Select
                labelId="target"
                id="target"
                value={target}
                label="Target"
                onChange={handleChange}
                style={{"color": "white"}}
                >
                    <MenuItem value={"spot"}>SPOT</MenuItem>
                    <MenuItem value={"margin"}>MARGIN</MenuItem>
                    <MenuItem value={"future"}>FUTURE</MenuItem>
                </Select>
            </FormControl>
            <div style={{"display": "flex", "flex-direction": "row"}}>
                <FormGroup style={{"width": "50%"}} >
                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Test only" />
                    <FormControlLabel control={<Checkbox defaultChecked/>} label="No duplicate order" />
                    <FormControlLabel control={<Checkbox />} label="Make short order" />
                    <Divider variant="middle" />
                    <FormControl style={{"width": "50%"}} >
                        <RadioGroup
                            defaultValue="limit"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="limit" control={<Radio />} label="Limit" />
                            <FormControlLabel value="market" control={<Radio />} label="Market" />
                        </RadioGroup>
                    </FormControl>
                </FormGroup>
                <Divider orientation="vertical" flexItem variant="middle" />
                <Box
                    component="textform"
                    sx={{
                        '& > :not(style)': { m: 1, width: '28ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{"display": "flex", "flex-direction": "column"}}
                    >
                    <TextField id="quantity" label="Quantity" variant="filled" />
                    <TextField id="leverage" label="Leverage" variant="filled" />
                    <TextField id="minimum-margin" label="Minimum Margin level/ratio" variant="filled" />
                    <TextField id="stop-loss" label="Stop Loss" variant="filled" />
                    <TextField id="take-profit" label="Take Profit" variant="filled" />
                </Box>
            </div>
            
        </Box>
    );
}