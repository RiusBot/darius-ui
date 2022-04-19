import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import ConfigSettings from '@/features/dashboard/components/bot-creation/config-settings';
import CloseIcon from '@mui/icons-material/Close';
import { createUserBot } from '@/features/dashboard/dashboard-slice';
import { defaultConfigSettings } from '__data__/defaultConfigSettings';

function BotCreationDialog(props) {
    const dispatch = useDispatch();
    const { open, channel, channelDisplayName, isTrial, onClose } = props;
    const [createButtonDisabled, setCreateButtonDisabled] = useState(true);
    const [orderOptions, setOrders] = useState({test: false, duplicate: true});
    const [configTab, setTab] = useState('0'); // 0 for Lazy Mode
    const [configOptions, setConfigs] = useState({api: '', 
                                                        hyperopt: defaultConfigSettings.hyperopt,
                                                        target: defaultConfigSettings.target,
                                                        orderType: defaultConfigSettings.orderType,
                                                        stopLossType: defaultConfigSettings.stopLossType,
                                                        stopLoss: defaultConfigSettings.stopLoss,
                                                        takeProfitType: defaultConfigSettings.takeProfitType,
                                                        takeProfit: defaultConfigSettings.takeProfit,
                                                        quantity: defaultConfigSettings.quantity,
                                                        leverage: defaultConfigSettings.leverage,
                                                        margin: defaultConfigSettings.margin,
                                                        volume: defaultConfigSettings.volume
                                                    });
    const handleCreateButton = (disabled) => {
        setCreateButtonDisabled(disabled);
    }
    
    const createButtonClicked = () => {
        const validatedConfigOptions = configOptions;
        if (configTab == '0') {
            validatedConfigOptions = {
                api: configOptions.api,
                quantity: configOptions.quantity,
                hyperopt: defaultConfigSettings.hyperopt,
                target: configOptions.target,
                orderType: defaultConfigSettings.orderType,
                stopLossType: defaultConfigSettings.stopLossType,
                stopLoss: defaultConfigSettings.stopLoss,
                takeProfitType: defaultConfigSettings.takeProfitType,
                takeProfit: defaultConfigSettings.takeProfit,
                leverage: defaultConfigSettings.leverage,
                margin: defaultConfigSettings.margin,
                volume: defaultConfigSettings.volume
            }
        }
        const createBotInfo = {
                                orderOptions: orderOptions,
                                configOptions: validatedConfigOptions,
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
                <ConfigSettings
                    isTrial={isTrial}
                    saveDisabled={handleCreateButton}
                    configOptions={configOptions}
                    setConfigs={setConfigs}
                    orderOptions={orderOptions}
                    setOrders={setOrders}
                    configTab={configTab}
                    setTab={setTab}
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