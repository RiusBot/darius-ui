import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Dialog, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import DefaultConfigSettings from "./default-config-settings";
import CloseIcon from '@mui/icons-material/Close';
import { createUserBot } from '@/features/dashboard/dashboard-slice';
import { getAuthUser } from '@/common/selectors';

function BotCreationDialog(props) {
    const dispatch = useDispatch();
    const auth = useSelector(getAuthUser)
    const { open, channel, onClose } = props;
    const [createButtonDisabled, setCreateButtonDisabled] = React.useState(true);
    const [orderOptions, setOrders] = React.useState({test: true, duplicate: false});
    const [configOptions, setConfigs] = React.useState({api: '', target: '', orderType: '', stopLossType: '', stopLoss: 0,
                                                        takeProfitType: '', takeProfit: 0, quantity: '', leverage: '', 
                                                        minimumMargin: '', minimumVolume: ''});
    const handleCreateButton = (disabled) => {
        setCreateButtonDisabled(disabled);
    }
    
    const createButtonClicked = () => {
        const createBotInfo = {userId: auth.uid,
                               orderOptions: orderOptions,
                               configOptions: configOptions,
                               channel: channel,
                               };
        dispatch(createUserBot(createBotInfo));
        onClose();
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
                    {channel} Bot Creation
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
                    padding: '16px',
                    overflowY: 'scroll',}}>
                <DefaultConfigSettings
                    createDisabled={handleCreateButton}
                    configOptions={configOptions}
                    setConfigs={setConfigs}
                    orderOptions={orderOptions}
                    setOrders={setOrders}
                />
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

export default BotCreationDialog;