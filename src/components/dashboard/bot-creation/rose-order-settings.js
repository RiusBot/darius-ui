import React from 'react';
import { Box, TextField } from "@mui/material";
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";
import { Divider } from "@mui/material";
import DefaultOrderSettings from './default-order-settings';

export default function RoseOrderSettings() {
    return (
        <div>
            <DefaultOrderSettings/>
            <Divider variant="middle" textAlign="left" >Trigger keywords for Rose channel</Divider>
            <Box
                m={2}
                component="textform"
                sx={{
                    '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
                style={{"display": "flex", "flex-direction": "column"}}
                >
                <TextField id="long" label="Long" variant="outlined" />
                <TextField id="short" label="Short" variant="outlined" />
            </Box>
            <Divider variant="middle" textAlign="left" >Other Settings</Divider>
            <Box m={2} >
                <FormControl fullWidth variant="outlined">
                    <FormControlLabel control={<Checkbox />} label="Rose For Bot" />
                    <FormControlLabel control={<Checkbox />} label="Auto sl tp" />
                    <TextField id="maximum-latency" label="Maximum Latency" variant="filled" />
                </FormControl>
            </Box>
        </div>
    );
}
