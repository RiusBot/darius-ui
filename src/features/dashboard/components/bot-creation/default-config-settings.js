import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FormGroup, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { TextField, Divider} from "@mui/material";
import InputSlider from "@/features/dashboard/components/bot-creation/input-slider";
export default function DefaultConfigSettings() {
    const [orderOptions, setOrders] = React.useState({test: true,
                                                       duplicate: false})
    const [configOptions, setConfigs] = React.useState({target: 'spot',
                                                        orderType: 'limit', 
                                                        stopLossType: 'limit', 
                                                        takeProfitType: 'limit'});
    const handleCheckBoxChange = (event) => {
        setOrders({...orderOptions, [event.target.id]: event.target.checked});
    }
    const handleOptionChange = (event) => {
        // TODO: Add value check for textfields
        setConfigs({...configOptions, [event.target.name]: event.target.value});
    };
    return (
        <Box sx={{m:2}} >
            <Typography variant="h6" component="div" sx={{padding: '8px 0'}}>
                Order Settings
            </Typography>
            <FormGroup >
                <FormControlLabel 
                    control={<Checkbox 
                                id="test"
                                checked={orderOptions.test}
                                onChange={handleCheckBoxChange}/>} 
                    label="Test only" />
                <FormControlLabel 
                    control={<Checkbox 
                                id="duplicate"
                                checked={orderOptions.duplicate}
                                onChange={handleCheckBoxChange}/>} 
                    label="No duplicate Order" />
            </FormGroup>
            <Divider />
            <Typography variant="h6" component="div" sx={{padding: '24px 0 16px'}}>
                Config Settings
            </Typography>
            <Box sx={{p:2}}>
                <FormControl fullWidth>
                    <InputLabel >Target</InputLabel>
                    <Select
                        name="target"
                        id="target"
                        value={configOptions.target}
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
                    <InputLabel >Order Type</InputLabel>
                    <Select
                    name="orderType"
                    id="orderType"
                    value={configOptions.orderType}
                    label="orderType"
                    onChange={handleOptionChange}
                    >
                        <MenuItem value={"limit"}>Limit</MenuItem>
                        <MenuItem value={"market"}>Market</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{p:2, display: 'flex', flexDirection: 'row'}}>
                <Box sx={{width: '50%'}}>
                    <FormControl fullWidth>
                        <InputLabel>Stop Loss Type</InputLabel>
                        <Select
                        name="stopLossType"
                        value={configOptions.stopLossType}
                        label="stopLossType"
                        onChange={handleOptionChange}
                        >
                            <MenuItem value={"limit"}>Limit</MenuItem>
                            <MenuItem value={"market"}>Market</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{paddingLeft: '48px'}}>
                    <InputSlider name="Stop Loss"/>
                </Box>
            </Box>
            <Box sx={{p:2, display: 'flex', flexDirection: 'row'}}>
                <Box sx={{width: '50%'}}>
                    <FormControl fullWidth>
                        <InputLabel>Take Profit Type</InputLabel>
                        <Select
                        name="takeProfitType"
                        value={configOptions.takeProfitType}
                        label="takeProfitType"
                        onChange={handleOptionChange}
                        >
                            <MenuItem value={"limit"}>Limit</MenuItem>
                            <MenuItem value={"market"}>Market</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{paddingLeft: '48px'}}>
                    <InputSlider name="Take Profit"/>
                </Box>
            </Box>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, },
                    display: "flex",
                    flexDirection: "column"
                }}
                noValidate
                autoComplete="off"
                >
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    <Box sx={{width: '30%'}}>
                        <TextField 
                            required fullWidth
                            name="quantity" 
                            label="Quantity" 
                            variant="outlined" 
                            onChange={handleOptionChange}/>
                    </Box>
                    <Box sx={{padding: "24px 0 0 24px"}}>
                        <Typography variant="button" display="block" gutterBottom >Limit: Quantity > 100</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    <Box sx={{width: '30%'}}>
                        <TextField 
                            required fullWidth
                            name="leverage" 
                            label="Leverage" 
                            variant="outlined" 
                            onChange={handleOptionChange}/>
                    </Box>
                    <Box sx={{padding: "24px 0 0 24px"}}>
                        <Typography variant="button" display="block" gutterBottom >Limit: Leverage > 0</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    <Box sx={{width: '30%'}}>
                        <TextField 
                            required fullWidth
                            name="minimumMargin" 
                            label="Minimum Margin Ratio" 
                            variant="outlined" 
                            onChange={handleOptionChange}/>
                    </Box>
                    <Box sx={{padding: "24px 0 0 24px"}}>
                        <Typography variant="button" display="block" gutterBottom >Limit: Margin > 0</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    <Box sx={{width: '30%'}}>
                        <TextField 
                            required fullWidth
                            name="minimumVolume" 
                            label="Minimum Volume" 
                            variant="outlined"
                            onChange={handleOptionChange}/>
                    </Box>
                    <Box sx={{padding: "24px 0 0 24px"}}>
                        <Typography variant="button" display="block" gutterBottom >Limit: Volume > 0</Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}