import React from 'react';
import { useSelector } from 'react-redux';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { FormLabel, RadioGroup, Radio } from '@mui/material';
import { IconButton, Tooltip } from '@mui/material';
import { TextField, Divider} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { getUserApi } from '@/features/api/api-selector';


const limits = { stopLoss: { min: 0, max: 100},
                 takeProfit: { min: 0, max: 500 },
                 callback: { binance: {min: 0.1, max: 5}, ftx: {min: -30, max: 30}},
                 quantity: { min: 30, max: 10000000000 },
                 leverage: { min: 0, max: 10000000000 },
                 margin: { min: 0, max: 1000 },
                 volume: { min: 0, max: 10000000000 }
                };

export default function DefaultConfigSettings(props) {
    const { saveDisabled, configOptions, setConfigs, oldConfig, orderOptions, setOrders } = props;
    const userApi = useSelector(getUserApi);
    const handleCheckBoxChange = (event) => {
        setOrders({...orderOptions, [event.target.id]: event.target.checked});
    }
    const handleOptionChange = (event) => {
        var name = event.target.name;
        var value = '';
        if (Object.keys(limits).includes(name)) {
            if (event.target.value == '') {
                value = '';
            } else {
                value = parseFloat(event.target.value);
                if (value > limits[name].max) value = limits[name].max;
            }
        } else {
            value = event.target.value;
        }
        setConfigs({...configOptions, [name]: value});
    };
    const exchange = userApi[configOptions['api']] ? userApi[configOptions['api']].exchange : "binance";
    const slLimitMax = (configOptions['stopLossType'] === 'TRAILING') ? limits['callback'][exchange].max : limits.stopLoss.max;
    const slLimitMin = (configOptions['stopLossType'] === 'TRAILING') ? limits['callback'][exchange].min : limits.stopLoss.min;
    const slLabel = (configOptions['stopLossType'] === 'TRAILING') ? "Callback Rate %" : "Stop Loss %";
    const tpLimitMax = (configOptions['takeProfitType'] === 'TRAILING') ? limits['callback'][exchange].max : limits.takeProfit.max;
    const tpLimitMin = (configOptions['takeProfitType'] === 'TRAILING') ? limits['callback'][exchange].min : limits.takeProfit.min;
    const tpLabel = (configOptions['takeProfitType'] === 'TRAILING') ? "Callback Rate %" : "Take Profit %";
    const checkOptionsValid = (option) => {
        if (configOptions[option] === '') return false;
        switch (option) {
            case 'api':
            case 'target':
            case 'orderType':
            case 'stopLossType':
            case 'takeProfitType':
                return (configOptions[option] != '');
            case 'stopLoss':
            case 'takeProfit':
                if (configOptions['hyperopt'] === true) 
                    return true;
                else if (configOptions['takeProfitType'] == 'TRAILING')
                    return (limits['callback'][exchange].min <= configOptions[option] && configOptions[option] <= limits['callback'][exchange].max);
                else 
                    return (limits[option].min <= configOptions[option] && configOptions[option] < limits[option].max);
            case 'leverage':
                return (parseFloat(configOptions[option]) > 0);
            case 'quantity':
            case 'margin':
            case 'volume':
                return (parseFloat(configOptions[option]) >= limits[option].min);
            default:
                return true;
        }
    }
    const checkOptionsChange = (option) => {
        if (configOptions[option] === '') return false;
        if (oldConfig == undefined) return true;
        return (configOptions[option] !== oldConfig[option]);
    }
    React.useEffect(() => {
        function checkOptionsReady() {
          for (let i = 0; i < Object.keys(configOptions).length; i ++) {
            if (!checkOptionsValid(Object.keys(configOptions)[i])) {
                // console.log(Object.keys(configOptions)[i]);
                return false;
            }
          }
          for (let i = 0; i < Object.keys(configOptions).length; i ++) {
            if (checkOptionsChange(Object.keys(configOptions)[i])) {
                // console.log(Object.keys(configOptions)[i]);
                return true;
            }
          }
          return false;
        }
        const optionsReady = checkOptionsReady();
        saveDisabled(!optionsReady)
      }, [orderOptions, configOptions])

    const ApiOption = () => {
        if (userApi == undefined || Object.keys(userApi).length == 0 ) {
            return (<Typography color="textSecondary" variant="button" component="div">
                        Please add your api keys first in the API Key Settings page
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
                            <MenuItem key={api.api_id} value={api.api_id}>({api.exchange}) {api.api_key}</MenuItem>
                        ))}
                    </Select>
                </FormControl>)
      }
    return (
        <Box sx={{m:2}} >
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography variant="h6" component="div" sx={{padding: '8px 0'}}>
                    Order Settings
                </Typography>
                <Tooltip 
                    placement="bottom-start"
                    title={
                    <React.Fragment>
                        <Typography color="inherit">Order Settings Info</Typography>
                        <a href='https://www.notion.so/d53e1daa5c0446c5aed46ee4c806f94c#4b5010c68b6f4dd4a8b06b163f007501'>{'Instruction Manual'}</a>
                    </React.Fragment>
                    }>
                    <IconButton
                        style={{marginLeft: '8px'}}
                    >
                        <InfoIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>
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
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography variant="h6" component="div" sx={{padding: '8px 0'}}>
                    API Settings
                </Typography>
                <Tooltip 
                    placement="bottom-start"
                    title={
                    <React.Fragment>
                        <Typography color="inherit">API Settings Info</Typography>
                        <a href='https://www.notion.so/d53e1daa5c0446c5aed46ee4c806f94c#4b5010c68b6f4dd4a8b06b163f007501'>{'Instruction Manual'}</a>
                    </React.Fragment>
                    }>
                    <IconButton
                        style={{marginLeft: '8px'}}
                    >
                        <InfoIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{p:2}}>
                <ApiOption/>
            </Box>
            <Divider />
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography variant="h6" component="div" sx={{padding: '24px 0 16px'}}>
                    Config Settings
                </Typography>
                <Tooltip 
                    placement="bottom-start"
                    title={
                    <React.Fragment>
                        <Typography color="inherit">Config Settings Info</Typography>
                        <a href='https://www.notion.so/d53e1daa5c0446c5aed46ee4c806f94c#4b5010c68b6f4dd4a8b06b163f007501'>{'Instruction Manual'}</a>
                    </React.Fragment>
                    }>
                    <IconButton
                        style={{marginLeft: '8px'}}
                    >
                        <InfoIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>
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
            <Box sx={{p:2}}>
                <FormControl>
                    <FormLabel ><b>Stop Loss / Take Profit percentage</b></FormLabel>
                    <RadioGroup
                        sx={{p:1, display: 'flex', flexDirection: 'row'}}
                        value={configOptions.hyperopt? "true" : "false"}
                        name="hyperopt"
                        onChange={(event) => {
                            var newValue = event.target.value == "true" ? true : false;
                            setConfigs({...configOptions, hyperopt: newValue});
                        }}
                    >
                        <FormControlLabel value="true" control={<Radio />} label="AI Optimization" />
                        <FormControlLabel value="false" control={<Radio />} label="Custom Input" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{p: 2, display: 'flex', flexDirection: 'row'}}>
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
                            <MenuItem value={"TRAILING"}>TRAILING</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{paddingLeft: '48px', width: '50%'}}>
                    <TextField 
                        required fullWidth
                        disabled={configOptions.hyperopt}
                        type="number"
                        name="stopLoss" 
                        label={slLabel}
                        variant="outlined" 
                        inputProps={{
                            min: slLimitMin,
                            max: slLimitMax
                        }}
                        value={configOptions.stopLoss}
                        onChange={handleOptionChange}/>
                    <Box sx={{padding: "24px 0 0 24px"}}>
                        <Typography variant="button" display="block" gutterBottom >{slLimitMax}% &gt; {slLabel} &gt; {slLimitMin}%</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{p:2, display: 'flex', flexDirection: 'row'}}>
                <Box sx={{ width: '50%'}}>
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
                            <MenuItem value={"TRAILING"}>TRAILING</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{paddingLeft: '48px', width: '50%'}}>
                    <TextField 
                        required fullWidth
                        disabled={configOptions.hyperopt}
                        type="number"
                        name="takeProfit" 
                        label={tpLabel}
                        variant="outlined" 
                        inputProps={{
                            min: (configOptions['takeProfitType'] === 'TRAILING') ? limits['callback'][exchange].min : limits.takeProfit.min,
                            max: (configOptions['takeProfitType'] === 'TRAILING') ? limits['callback'][exchange].max : limits.takeProfit.max
                        }}
                        value={configOptions.takeProfit}
                        onChange={handleOptionChange}/>
                    <Box sx={{padding: "24px 0 0 24px"}}>
                        <Typography variant="button" display="block" gutterBottom >{tpLimitMax}% &gt; {tpLabel} &gt; {tpLimitMin}% </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    '& > :not(style)': { p: 2 },
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
                            type="number"
                            name="quantity" 
                            label="Quantity" 
                            variant="outlined" 
                            inputProps={{ min: 0, max: limits.quantity.max }}
                            value={configOptions.quantity}
                            onChange={handleOptionChange}/>
                    </Box>
                    <Box sx={{padding: "24px 0 0 24px"}}>
                        <Typography variant="button" display="block" gutterBottom >Quantity &gt; 30</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    <Box sx={{width: '30%'}}>
                        <TextField 
                            required fullWidth
                            type="number"
                            name="leverage" 
                            label="Leverage" 
                            variant="outlined" 
                            inputProps={{ min: limits.leverage.min, max: limits.leverage.max }}
                            value={configOptions.leverage}
                            onChange={handleOptionChange}/>
                    </Box>
                    <Box sx={{padding: "24px 0 0 24px"}}>
                        <Typography variant="button" display="block" gutterBottom >Leverage &gt; 0</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    <Box sx={{width: '30%'}}>
                        <TextField 
                            fullWidth
                            type="number"
                            name="margin" 
                            label="Minimum Margin Ratio/level %"
                            variant="outlined" 
                            inputProps={{ min: limits.margin.min, max: limits.margin.max }}
                            value={configOptions.margin}
                            onChange={handleOptionChange}/>
                    </Box>
                    <Box sx={{padding: "24px 0 0 24px"}}>
                        <Typography variant="button" display="block" gutterBottom >Margin &gt; 0 ( 0 if no use )</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    <Box sx={{width: '30%'}}>
                        <TextField 
                            fullWidth
                            type="number"
                            name="volume" 
                            label="Minimum Volume" 
                            variant="outlined"
                            inputProps={{ min: limits.volume.min, max: limits.volume.max }}
                            value={configOptions.volume}
                            onChange={handleOptionChange}/>
                    </Box>
                    <Box sx={{padding: "24px 0 0 24px"}}>
                        <Typography variant="button" display="block" gutterBottom >Volume &gt; 0 ( 0 if no use )</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}