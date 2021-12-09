import React from 'react';
import { useSelector } from 'react-redux';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FormGroup, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { TextField, Divider} from "@mui/material";
import InputSlider from "@/features/dashboard/components/bot-creation/input-slider";
import { getUserApiFromState } from '@/features/dashboard/dashboard-selector';

export default function DefaultConfigSettings(props) {
    const { createDisabled, configOptions, setConfigs, orderOptions, setOrders } = props;
    const userApi = useSelector(getUserApiFromState);
    const [sliderOptions, setSliders] = React.useState({stopLoss: 0, takeProfit: 0});
    const handleCheckBoxChange = (event) => {
        setOrders({...orderOptions, [event.target.id]: event.target.checked});
    }
    const handleOptionChange = (event) => {
        setConfigs({...configOptions, [event.target.name]: event.target.value});
    };
    const handleSliderChange = (event, newValue) => {
        setSliders({...sliderOptions, [event.target.name]: newValue});
        setConfigs({...configOptions, [event.target.name]: newValue/10});
    }
    const checkOptionsValid = (option) => {
        switch (option) {
            case 'api':
            case 'target':
            case 'orderType':
            case 'stopLossType':
            case 'takeProfitType':
                return (configOptions[option] !== undefined && configOptions[option] != '');
            case 'stopLoss':
            case 'takeProfit':
                return (0 < configOptions[option] && configOptions[option] < 1);
            case 'quantity':
                return (parseInt(configOptions[option]) > 100);
            case 'leverage':
            case 'minimumMargin':
            case 'minimumVolume':
                return (parseInt(configOptions[option]) > 0);
        }
    }
    React.useEffect(() => {
        function checkOptionsReady() {
          for (let i = 0; i < Object.keys(configOptions).length; i ++) {
            if (!checkOptionsValid(Object.keys(configOptions)[i])) {
                return false;
            }
          }
          return true;
        }
        const optionsReady = checkOptionsReady();
        createDisabled(!optionsReady)
      }, [orderOptions, configOptions])

    const ApiOption = () => {
        if (userApi == undefined || Object.keys(userApi).length == 0 ) {
            return (<Typography color="textSecondary" variant="button" component="div">
                        Please add your api keys first in the API Key Settins page
                    </Typography>)
        }
        return (<FormControl fullWidth>
                    <InputLabel >API</InputLabel>
                    <Select
                        name="api"
                        id="api"
                        value={configOptions.api}
                        label="api"
                        onChange={handleOptionChange}
                    >
                        {Object.values(userApi).map((api) => (
                            <MenuItem key={api.api_id} value={api.api_id}>{api.api_key}</MenuItem>
                        ))}
                    </Select>
                </FormControl>)
      }
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
            <Typography variant="h6" component="div" sx={{padding: '8px 0'}}>
                API Settings
            </Typography>
            <Box sx={{p:2}}>
                <ApiOption/>
            </Box>
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
                        <MenuItem value={"SPOT"}>SPOT</MenuItem>
                        <MenuItem value={"MARGIN"}>MARGIN</MenuItem>
                        <MenuItem value={"FUTURE"}>FUTURE</MenuItem>
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
                        <MenuItem value={"LIMIT"}>LIMIT</MenuItem>
                        <MenuItem value={"MARKET"}>MARKET</MenuItem>
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
                            <MenuItem value={"LIMIT"}>LIMIT</MenuItem>
                            <MenuItem value={"MARKET"}>MARKET</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{paddingLeft: '48px'}}>
                    <InputSlider 
                        name="Stop Loss"
                        id="stopLoss"
                        handleSliderChange={handleSliderChange}
                        value={sliderOptions.stopLoss}/>
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
                            <MenuItem value={"LIMIT"}>LIMIT</MenuItem>
                            <MenuItem value={"MARKET"}>MARKET</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{paddingLeft: '48px'}}>
                    <InputSlider 
                        name="Take Profit"
                        id="takeProfit"
                        handleSliderChange={handleSliderChange}
                        value={sliderOptions.takeProfit}/>
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
                        <Typography variant="button" display="block" gutterBottom >LIMIT: Quantity > 100</Typography>
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
                        <Typography variant="button" display="block" gutterBottom >LIMIT: Leverage > 0</Typography>
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
                        <Typography variant="button" display="block" gutterBottom >LIMIT: Margin > 0</Typography>
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
                        <Typography variant="button" display="block" gutterBottom >LIMIT: Volume > 0</Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}