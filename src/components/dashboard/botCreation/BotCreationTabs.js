import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import DefaultOrderSettings from './DefaultOrderSettings';
import RoseOrderSettings from './RoseOrderSettings';

export default function BotCreationTabs() {
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Perpetual Data" value="1" />
              <Tab label="Rose Premium" value="2" />
              <Tab label="Benson Sentiment" value="3" />
              <Tab label="Justin" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1"><DefaultOrderSettings/></TabPanel>
          <TabPanel value="2"><RoseOrderSettings/></TabPanel>
          <TabPanel value="3"><DefaultOrderSettings/></TabPanel>
          <TabPanel value="4"><DefaultOrderSettings/></TabPanel>
        </TabContext>
      </Box>
    );
  }