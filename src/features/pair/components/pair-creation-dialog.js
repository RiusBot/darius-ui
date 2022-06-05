import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, 
         Box, 
         Typography, 
         Button, 
         IconButton, 
         Divider, 
         TextField, 
         FormControl, 
         InputLabel, 
         Select,
         MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TransferList from '@/features/pair/components/transfer-list';
import { createUserPair } from '@/features/pair/pair-slice';

const types = ['BLACK', 'WHITE'];

export const PairCreationDialog = (props) => {
    const dispatch = useDispatch();
    const { open, tokenData, onClose } = props;
    const [createButtonDisabled, setCreateButtonDisabled] = useState(true);
    const [pairValues, setPairValues] = useState({name: '', lists: [], types: ''});

    const handleChange = (event) => {
        setPairValues({
        ...pairValues,
        [event.target.name]: event.target.value
        });
    };

    const checkValuesValid = (field) => {
        switch (field) {
            case 'name':
            return (pairValues[field].length != 0);
            case 'types':
            return (types.includes(pairValues[field]));
            case 'lists':
            return (pairValues[field].length != 0);
            return true;
        }
    }
    
    useEffect(() => {
        function checkValuesReady() {
            for (let i = 0; i < Object.keys(pairValues).length; i ++) {
                if (!checkValuesValid(Object.keys(pairValues)[i])) {
                    console.log(Object.keys(pairValues)[i]);
                    return false;
                }
            }
            return true;
        }
        const isPairReady = checkValuesReady();
        setCreateButtonDisabled(!isPairReady)
    }, [pairValues])


    const createButtonClicked = () => {
        const createPairInfo = {pair: pairValues};
        dispatch(createUserPair(createPairInfo));
        setPairValues({name: '', lists: [], types: ''});
        onClose();
    }

    const handleListChange = (newList) => {
        setPairValues({...pairValues, lists: newList});
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    padding: '32px 16px 8px'
                }}>
                <Typography variant="h5" component="div">
                    Trading List Creation
                </Typography>
                <IconButton
                    style={{marginLeft: 'auto'}}
                    onClick={onClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
            <Divider variant="middle" />
            <Box
                sx={{
                    padding: '32px',
                    overflowY: 'scroll',}}>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="h6"
                    >
                    Please fill out the following form to add a new trading list.
                </Typography>
                <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    name="name"
                    inputProps={{ maxLength: 64 }}
                    onChange={handleChange}
                    value={pairValues.name}
                    variant="outlined"
                />
                <FormControl fullWidth>
                    <InputLabel >Type</InputLabel>
                    <Select
                        name="types"
                        id="types"
                        label="types"
                        value={pairValues.types}
                        onChange={handleChange}
                    >
                        {types.map((type, idx) => (
                            <MenuItem key={idx} value={type}>{type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Box sx={{pt: 4}}>
                    <TransferList
                        tokenData={tokenData}
                        setList={handleListChange}
                    />
                </Box>
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    >
                    <Button
                        color="primary"
                        style={{marginLeft: 'auto'}}
                        size="small"
                        variant="contained"
                        onClick={createButtonClicked}
                        disabled={createButtonDisabled}
                    >
                        Save and Create
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )

}