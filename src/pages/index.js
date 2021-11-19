import { React, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import BotCreationDialog from '../components/dashboard/bot-creation/bot-creation-dialog';
import BotCard from 'src/components/dashboard/bot-card';
import BotManagementCard from 'src/components/dashboard/bot-management/bot-management-card';
import { products } from 'src/data/products';

const Dashboard = () => {
  const [{open, channel}, setOpen] = useState({open: false, channel: ""});
  const handleBotCreationDialogOpen = (channel) => {
    setOpen({open: true, channel: channel});
  }
  const handleBotCreationDialogClose = () => {
    //TODO: save change(create bot)
    setOpen({open: false, channel: ""});
  }
  return (
    <>
      <Head>
        <title>
          Dashboard
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            Dashboard
          </Typography>
          <Grid
            container
            spacing={3}
          >
            <Box
              style={{'display': 'flex', 
                      'flexDirection': 'row',
                      'overflowX': 'auto',
                      'height': '200px',
                      'paddingLeft': '30px'}}
              >
              {products.map((bot, index) => {
                return <Box style={{'width': '400px',
                                  'minWidth': '300px',
                                  'paddingRight': '30px'}}>
                          <BotCard
                            key={index}
                            bot={bot}
                            openCreateBotDialog={handleBotCreationDialogOpen}
                          />
                        </Box>
              })}
            </Box>

            <Grid
              item
              lg={12}
              md={12}
              xl={9}
              xs={12}
            >
              <BotManagementCard />
            </Grid>

          </Grid>
        </Container>
      </Box>

      <BotCreationDialog
        open={open}
        channel={channel}
        onClose={handleBotCreationDialogClose}
        />
    </>
)};

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
