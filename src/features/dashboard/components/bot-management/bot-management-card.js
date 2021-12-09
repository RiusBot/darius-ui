import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardHeader, Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { BotTradesTable } from '@/features/dashboard/components/bot-management/bot-trades-table';
import { BotSettings } from '@/features/dashboard/components/bot-management/bot-settings';
import { getUserBots } from '@/features/dashboard/dashboard-slice';
import { getUserBotsFromState } from '@/features/dashboard/dashboard-selector';

export default function BotManagementCard(props) {
    const dispatch = useDispatch();
    const { openConfirmDialog, userApi } = props;
    const [value, setValue] = useState('0');

    useEffect (() => {  
        dispatch(getUserBots({userId: "lnkniyQLCNPlJz4cH0k3ejeh9ZB3"}))
        },[]
    );
    const userBots = useSelector(getUserBotsFromState);
    
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    if (!userBots.length) {
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
                        <Typography 
                            color="textSecondary"
                            variant="button"
                            sx={{ textAlign: 'center', width: '100%'}}>
                            You have no working bots currently, start one from the above now!
                        </Typography>
                    </Box>
            </Card>
        )
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
                                botId={userBots[parseInt(value)].bot_id}
                            />
                            <Box sx={{ minWidth: '320px', marginRight: '32px' }} >
                                <BotSettings
                                    userApi={userApi}
                                    botId={userBots[parseInt(value)].bot_id}
                                    openConfirmDialog={openConfirmDialog}
                                    config={userBots[parseInt(value)].config}
                                    />
                            </Box>
                        </Box>
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    )
}
