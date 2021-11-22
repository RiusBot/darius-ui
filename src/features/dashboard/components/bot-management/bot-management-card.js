import React from "react";
import {
  Card,
  CardHeader,
  Box,
  Tab,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { LatestOrders } from '@/features/dashboard/components/bot-management/latest-orders';

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

    const [value, setValue] = React.useState(0);

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
                            return <Tab label={bot.channel} value={index}/>
                        })}
                    </TabList>
                    <TabPanel value={value}>
                        <LatestOrders/>
                    </TabPanel>
                </TabContext>
            </Box>
        </Card>
    )
}
