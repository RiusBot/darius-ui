import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import DefaultConfigSettings from '@/features/dashboard/components/bot-creation/default-config-settings';
import CloseIcon from '@mui/icons-material/Close';
import { createUserBot } from '@/features/dashboard/dashboard-slice';

function BotCreationDialog(props) {
    const dispatch = useDispatch();
    const { open, channel, channelDisplayName, onClose } = props;
    const [createButtonDisabled, setCreateButtonDisabled] = React.useState(true);
    const [orderOptions, setOrders] = React.useState({test: false, duplicate: true});
    const [configOptions, setConfigs] = React.useState({api: '', target: '', orderType: '', stopLossType: '', stopLoss: 0,
                                                        takeProfitType: '', takeProfit: 0, quantity: 30, leverage: 1,
                                                        margin: 0, volume: 0});
    const handleCreateButton = (disabled) => {
        setCreateButtonDisabled(disabled);
    }
    
    const createButtonClicked = () => {
        const createBotInfo = {orderOptions: orderOptions,
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
                    {channelDisplayName} Bot Creation
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
                    saveDisabled={handleCreateButton}
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