import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ConfigSettings from '@/features/dashboard/components/bot-creation/config-settings';
import CloseIcon from '@mui/icons-material/Close';
import { updateUserBot } from '@/features/dashboard/dashboard-slice';
import { loadDefaultConfigSettings } from '__data__/defaultConfigSettings';

function BotEditDialog(props) {
    const dispatch = useDispatch();
    const { open, channel, channelDisplayName, botId, config, status, isTrial, onClose } = props;
    const [updateButtonDisabled, setupdateButtonDisabled] = useState(true);
    const [defaultConfigSettings, setDefaultConfigSettings] = useState(loadDefaultConfigSettings(channel));
    const [botStatus, setStatus] = useState(status);
    const [orderOptions, setOrders] = useState({ test: config.test,
                                                 duplicate: config.duplicate,
                                               });
    const [configTab, setTab] = useState('1'); // 1 for Pro Mode
    const [configOptions, setConfigs] = useState({  api: config.api_id,
                                                    pair: config.pair_id,
                                                    hyperopt: config.hyperopt,
                                                    target: config.target,
                                                    orderType: config.order_type,
                                                    stopLossType: config.stop_loss_type,
                                                    stopLoss: config.stop_loss,
                                                    takeProfitType: config.take_profit_type,
                                                    takeProfit: config.take_profit,
                                                    quantity: config.quantity,
                                                    leverage: config.leverage,
                                                    margin: config.margin,
                                                    volume: config.minimum_volume,
                                                    quote: config.quote,
                                                });

    useEffect(() => {
        setDefaultConfigSettings(loadDefaultConfigSettings(channel));
    }, [channel]);

    useEffect (() => {
        setOrders({ test: config.test,
                    duplicate: config.duplicate,
                });
        setConfigs({api: config.api_id,
                    pair: config.pair_id,
                    hyperopt: config.hyperopt,
                    target: config.target,
                    orderType: config.order_type,
                    stopLossType: config.stop_loss_type,
                    stopLoss: config.stop_loss * 100,
                    takeProfitType: config.take_profit_type,
                    takeProfit: config.take_profit * 100,
                    quantity: config.quantity,
                    leverage: config.leverage,
                    margin: config.margin * 100,
                    volume: config.minimum_volume,
                    quote: config.quote
                });
        },[config]
    );
    useEffect (() => {
        setStatus(status);
    }, [status]);
    const handleUpdateButton = (disabled) => {
        setupdateButtonDisabled(disabled && (config.status === botStatus));
    }
    
    const updateButtonClicked = () => {
        const validatedConfigOptions = configOptions;
        if (configTab == '0') {
            validatedConfigOptions = {
                api: configOptions.api, 
                pair: configOptions.pair,
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
                volume: defaultConfigSettings.volume,
                quote: efaultConfigSettings.quote,
            }
        }
        const updateBotInfo = {orderOptions: orderOptions,
                               configOptions: validatedConfigOptions,
                               channel: channel,
                               botId: botId,
                               status: botStatus,
                               };
        dispatch(updateUserBot(updateBotInfo));
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
                    {channelDisplayName} Bot Edit
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
                <Typography variant="h6" component="div" sx={{padding: '16px 16px'}}>
                    Bot Status
                </Typography>
                <Box sx={{p:2}}>
                    <FormControl fullWidth>
                        <InputLabel >Bot Status</InputLabel>
                        <Select
                            name="status"
                            id="status"
                            value={botStatus}
                            label="Status"
                            onChange={(event) => setStatus(event.target.value)}
                        >
                            <MenuItem value={"RUNNING"}>RUNNING</MenuItem>
                            <MenuItem value={"SUSPEND"}>SUSPEND</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Divider variant="middle" />

                <ConfigSettings
                    isTrial={false}
                    saveDisabled={handleUpdateButton}
                    configOptions={configOptions}
                    setConfigs={setConfigs}
                    oldConfig={config}
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

export default BotEditDialog;