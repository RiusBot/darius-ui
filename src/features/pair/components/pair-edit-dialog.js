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
import { updateUserPair } from '@/features/pair/pair-slice';

const types = ['BLACK', 'WHITE'];

export const PairEditDialog = (props) => {
    const dispatch = useDispatch();
    const { open, oldPairValue, tokenData, onClose } = props;
    const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);
    const [pairValues, setPairValues] = useState({name: oldPairValue.name, lists: oldPairValue.lists, types: oldPairValue.types});

    useEffect(() => {
        setPairValues({name: oldPairValue.name, lists: oldPairValue.lists, types: oldPairValue.types});
    }, [oldPairValue])

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
        }
    }
    
    useEffect(() => {
        function checkValuesReady() {
            for (let i = 0; i < Object.keys(pairValues).length; i ++) {
                if (!checkValuesValid(Object.keys(pairValues)[i])) {
                    return false;
                }
            }
            return true;
        }
        const isPairReady = checkValuesReady();
        setUpdateButtonDisabled(!isPairReady)
    }, [pairValues])


    const updateButtonClicked = () => {
        const updatePairInfo = {pair: {...pairValues, id: oldPairValue.pair_id}};
        dispatch(updateUserPair(updatePairInfo));
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
                    Trading List Edit
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
                    Update your trading list by editing the following fields.
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
                        list={pairValues.lists}
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
                        onClick={updateButtonClicked}
                        disabled={updateButtonDisabled}
                    >
                        Save and Update
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )

}