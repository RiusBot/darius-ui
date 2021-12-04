import React from "react";
import { Card, CardHeader, Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { BotTradesTable } from '@/features/dashboard/components/bot-management/bot-trades-table';
import { BotSettings } from '@/features/dashboard/components/bot-management/bot-settings';

let bots = [{channel: "Rose Premium",
              interestRate: 150 }, 
            {channel: "Whale Hunt",
              interestRate: 130 },
            {channel: "Daily Scalp",
              interestRate: 180 }];

// TODO: 
// 2. get working bot list from api
// 3. get order history from api

const setting = {
    target: "SPOT",
    order_type: "limit",
    stop_loss_type: "limit",
    stop_loss: "0.5",
    take_profit_type: "limit",
    take_profit: "0.5",
    quantity: "50",
    leverage: "50",
    margin: "50",
    minimum_volume: "50",
}

export default function BotManagementCard(props) {
    const { openConfirmDialog } = props;
    const [value, setValue] = React.useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getBotSetting = (id) => {
        return setting;   
    }

    return (
        <Card>
            <CardHeader title="Working Bot Management" />
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: '460px', paddingRight: '32px' }}
            >
                <TabContext value={value}>
                    <TabList
                        orientation="vertical"
                        variant="scrollable"
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', minWidth: '120px' }}
                    >
                        {bots.map((bot, index) => {
                            return <Tab 
                                        key={index}
                                        label={bot.channel} 
                                        value={`${index}`}/>
                        })}
                    </TabList>
                    <TabPanel value={value} sx={{ overflowX: 'scroll', overflowY: 'hidden'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'row'}} >
                            <BotTradesTable/>
                            <Box sx={{ minWidth: '320px' }} >
                                <BotSettings
                                    openConfirmDialog={openConfirmDialog}
                                    setting={getBotSetting(value)}
                                    />
                            </Box>
                        </Box>
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    )
}
