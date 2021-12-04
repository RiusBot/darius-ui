import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardHeader, Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { BotTradesTable } from '@/features/dashboard/components/bot-management/bot-trades-table';
import { BotSettings } from '@/features/dashboard/components/bot-management/bot-settings';
import { getBotTradesSuccess, getUserBots } from '@/features/dashboard/dashboard-slice';
import { getUserBotsFromState } from '@/features/dashboard/dashboard-selector';

const blankConfig = {
    api: { api: "", exchange: "" },
    target: "",
    order_type: "",
    stop_loss_type: "",
    stop_loss: "",
    take_profit_type: "",
    take_profit: "",
    quantity: "",
    leverage: "",
    margin: "",
    minimum_volume: "",
}

export default function BotManagementCard(props) {
    const dispatch = useDispatch();
    const { openConfirmDialog } = props;
    const [value, setValue] = useState('0');

    useEffect (() => {  
        dispatch(getUserBots({userId: 2}))
        },[]
    );
    const userBots = useSelector(getUserBotsFromState);
    
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const getBotConfig = (value) => {
        return (userBots.length) ? userBots[parseInt(value)].config : blankConfig;
    }
    const getBotId = (value) => {
        return (userBots.length) ? userBots[parseInt(value)].bot_id : 0;
    }

    return (
        <Card>
            <CardHeader title="Working Bot Management" />
            <Box
                sx={{ display: 'flex', 
                      flexGrow: 1, 
                      bgcolor: 'background.paper', 
                      minHeight: '460px', 
                      minWidth: '840px',
                      paddingRight: '32px' }}
            >
                <TabContext value={value}>
                    <TabList
                        orientation="vertical"
                        variant="scrollable"
                        onChange={handleTabChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', minWidth: '120px' }}
                    >
                        {userBots.map((bot, index) => {
                            return <Tab 
                                        key={index}
                                        label={`${bot.channel} ${bot.bot_id}`} 
                                        value={`${index}`}/>
                        })}
                    </TabList>
                    <TabPanel value={value} sx={{ overflowX: 'scroll', overflowY: 'hidden'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'row'}} >
                            <BotTradesTable
                                botId={getBotId(value)}
                            />
                            <Box sx={{ minWidth: '320px', marginRight: '32px' }} >
                                <BotSettings
                                    openConfirmDialog={openConfirmDialog}
                                    config={getBotConfig(value)}
                                    />
                            </Box>
                        </Box>
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    )
}
