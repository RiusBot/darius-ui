import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FormGroup, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Divider } from "@mui/material";

// TODO:
// 1. Modify Config Settings UI
export default function DefaultConfigSettings() {

    const [{target, 
            orderType, 
            stopLossType, 
            takeProfitType}, setOptions] = React.useState({target: 'spot',
                                                           orderType: 'limit', 
                                                           stopLossType: 'limit', 
                                                           takeProfitType: 'limit'});

    const handleOptionChange = (event) => {
        console.log(event);
        switch (event.target.name) {
            case "orderType":
                setOptions({orderType: event.target.value});
            case "stopLossType":
                setOptions({stopLossType: event.target.value});
            case "takeProfitType":
                setOptions({takeProfitType: event.target.value});
        }
    };
    return (
        <Box sx={{m:2}} >
            <Typography variant="h6" component="div" sx={{padding: '8px 0'}}>
                Order Settings
            </Typography>
            <FormGroup >
                <FormControlLabel control={<Checkbox defaultChecked/>} label="Test only" />
                <FormControlLabel control={<Checkbox defaultChecked/>} label="No duplicate Order" />
            </FormGroup>
            <Divider />
            <Typography variant="h6" component="div" sx={{padding: '24px 0 16px'}}>
                Config Settings
            </Typography>
            <Box sx={{p:2}}>
                <FormControl fullWidth>
                    <InputLabel id="target">Target</InputLabel>
                    <Select
                    name="target"
                    id="target"
                    value={target}
                    label="Target"
                    onChange={handleOptionChange}
                    >
                        <MenuItem value={"spot"}>SPOT</MenuItem>
                        <MenuItem value={"margin"}>MARGIN</MenuItem>
                        <MenuItem value={"future"}>FUTURE</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{p:2}}>
                <FormControl fullWidth>
                    <InputLabel id="orderType">Order Type</InputLabel>
                    <Select
                    name="orderType"
                    id="orderType"
                    value={orderType}
                    label="orderType"
                    onChange={handleOptionChange}
                    >
                        <MenuItem value={"limit"}>Limit</MenuItem>
                        <MenuItem value={"market"}>Market</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{p:2}}>
                <FormControl fullWidth>
                    <InputLabel id="stopLossType">Stop Loss Type</InputLabel>
                    <Select
                    name="stopLossType"
                    id="stopLossType"
                    value={stopLossType}
                    label="stopLossType"
                    onChange={handleOptionChange}
                    >
                        <MenuItem value={"limit"}>Limit</MenuItem>
                        <MenuItem value={"market"}>Market</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{p:2}}>
                <FormControl fullWidth>
                    <InputLabel id="takeProfitType">Take Profit Type</InputLabel>
                    <Select
                    name="takeProfitType"
                    id="takeProfitType"
                    value={takeProfitType}
                    label="takeProfitType"
                    onChange={handleOptionChange}
                    >
                        <MenuItem value={"limit"}>Limit</MenuItem>
                        <MenuItem value={"market"}>Market</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box
                component="textform"
                sx={{
                    '& > :not(style)': { m: 1, width: '28ch' },
                }}
                noValidate
                autoComplete="off"
                style={{"display": "flex", "flexDirection": "column"}}
                >
                <TextField id="quantity" label="Quantity" variant="outlined" />
                <TextField id="leverage" label="Leverage" variant="outlined" />
                <TextField id="minimum-margin" label="Minimum Margin Ratio" variant="outlined" />
                <TextField id="stop-loss" label="Stop Loss" variant="outlined" />
                <TextField id="take-profit" label="Take Profit" variant="outlined" />
                <TextField id="minimum-volumn" label="Minimum Volumn" variant="outlined" />
            </Box>

        </Box>
    );
}