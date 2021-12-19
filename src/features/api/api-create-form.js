import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Box, Typography, Button } from '@mui/material';
import { CardContent, TextField } from '@mui/material';
import { createUserApi } from '@/features/api/api-slice';

const exchanges = ['Binance', 'FTX'];

export const ApiCreateForm = (props) => {
    const dispatch = useDispatch();
    const { display } = props;
    const [isApiCreateReady, setApiCreate] = useState(false);
    const [apiValues, setApiValues] = useState({key: '', secret: '', exchange: '', subaccount: ''});

    const handleChange = (event) => {
        setApiValues({
        ...apiValues,
        [event.target.name]: event.target.value
        });
    };

    const checkValuesValid = (field) => {
        switch (field) {
            case 'key':
            case 'secret':
            return (apiValues[field].length != 0);
            case 'exchange':
            return (apiValues[field] == 'binance' || apiValues[field] == 'ftx');
            case 'subaccount':
            if (apiValues.exchange == 'ftx') {
                return (apiValues[field].length != 0);
            } else {
                return true;
            }
        }
    }

    useEffect(() => {
        function checkValuesReady() {
        for (let i = 0; i < Object.keys(apiValues).length; i ++) {
            if (!checkValuesValid(Object.keys(apiValues)[i])) {
                return false;
            }
        }
        return true;
        }
        const isApiReady = checkValuesReady();
        setApiCreate(isApiReady)
    }, [apiValues])


    const createButtonClicked = () => {
        const createApiInfo = {api: apiValues};
        dispatch(createUserApi(createApiInfo));
        setApiValues({key: '', secret: '', exchange: '', subaccount: ''});
    }
    if (!display) {
        return (<></>);
    }
    return (
    <>
        <CardContent>
            <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
                >
                Please fill out the following form to add an API key.
            </Typography>
            <FormControl fullWidth>
                <InputLabel >Exchange</InputLabel>
                <Select
                    name="exchange"
                    id="exchange"
                    label="exchange"
                    value={apiValues.exchange}
                    onChange={handleChange}
                >
                    {exchanges.map((exchange, idx) => (
                        <MenuItem key={idx} value={exchange.toLowerCase()}>{exchange}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                sx={{display: (apiValues.exchange == 'ftx') ? 'flex' : 'none'}}
                fullWidth
                label="Subaccount"
                margin="normal"
                name="subaccount"
                inputProps={{ maxLength: 32 }}
                onChange={handleChange}
                value={apiValues.subaccount}
                variant="outlined"
            />
            <TextField
                fullWidth
                label="API key"
                margin="normal"
                name="key"
                inputProps={{ maxLength: 64 }}
                onChange={handleChange}
                value={apiValues.key}
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Secret"
                margin="normal"
                name="secret"
                inputProps={{ maxLength: 64 }}
                onChange={handleChange}
                value={apiValues.secret}
                variant="outlined"
            />
        </CardContent>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
        }}
        >
        <Button
            color="primary"
            variant="contained"
            disabled={!isApiCreateReady}
            onClick={createButtonClicked}
        >
            Add API Key
        </Button>
        </Box>
    </>
    );
}