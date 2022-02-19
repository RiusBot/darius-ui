import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardHeader, Box, Tab, Typography, Button } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { BotTradesTable } from '@/features/dashboard/components/bot-management/bot-trades-table';
import { BotSettings } from '@/features/dashboard/components/bot-management/bot-settings';
import { loadUserBots, loadBotTrades } from '@/features/dashboard/dashboard-slice';
import { getUserBots, getBotTrades } from '@/features/dashboard/dashboard-selector';

export default function BotManagementCard(props) {
    const dispatch = useDispatch();
    const { openConfirmDialog, openBotEditDialog, userApi } = props;
    const [value, setValue] = useState('0');

    const userBots = useSelector(getUserBots);
    useEffect (() => {  
        if (userBots.length == 0) {
            dispatch(loadUserBots());
        }
      },[]
    );

    const allBotTrades = useSelector(getBotTrades);
    const getCurrentBotTrades = (botId) => {
        if (! allBotTrades[botId]) {
            dispatch(loadBotTrades({botId: botId}));
        }
    }
     
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const BotInfo = (props) => {
      const { value }= props;
      if (userBots[parseInt(value)]) {
        return (<Box >
                    <Box sx={{ minWidth: '320px' }} >
                        <BotSettings
                            userApi={userApi}
                            botId={userBots[parseInt(value)].bot_id}
                            botStatus={userBots[parseInt(value)].status}
                            channel={userBots[parseInt(value)].channel}
                            openConfirmDialog={openConfirmDialog}
                            openEditDialog={openBotEditDialog}
                            config={userBots[parseInt(value)].config}
                            />
                    </Box>
                    <BotTradesTable
                        botId={userBots[parseInt(value)].bot_id}
                        getBotTrades={getCurrentBotTrades(userBots[parseInt(value)].bot_id)}
                    />
                </Box>);
      }
      return (<></>);
    }

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
                      paddingRight: '32px',
                      overflow: 'scroll' }}
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
                    <TabPanel value={value} sx={{ overflowX: 'scroll', overflowY: 'scroll', minWidth: '400px', width: '100%'}}>
                        <BotInfo value={value}/>
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    )
}
