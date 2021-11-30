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
// 1. add bot management area (ex. delete )
// 2. get working bot list from api
// 3. get order history from api
export default function BotManagementCard(props) {
    const { openConfirmDialog } = props;
    const [value, setValue] = React.useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card>
            <CardHeader title="Working Bot Management" />
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
            >
                <TabContext value={value}>
                    <TabList
                        orientation="vertical"
                        variant="scrollable"
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        {bots.map((bot, index) => {
                            return <Tab 
                                        key={index}
                                        label={bot.channel} 
                                        value={`${index}`}/>
                        })}
                    </TabList>
                    <TabPanel value={value}>
                        <Box sx={{ display: 'flex', flexDirection: 'row'}} >
                            <BotTradesTable/>
                            <BotSettings
                                openConfirmDialog={openConfirmDialog}
                                />
                        </Box>
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    )
}
