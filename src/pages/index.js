import { React, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { DashboardLayout } from '../components/dashboard-layout';
import BotCreationDialog from '../components/dashboard/bot-creation/bot-creation-dialog';
import ExistingBot from 'src/components/dashboard/existing-bot';

let existingBots = ["Rose", "Tsai", "Blablabla", "test2", "3", "4", "5"];

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleBotCreationDialogOpen = () => {
    setOpen(true);
  }
  const handleBotCreationDialogClose = () => {
    //TODO: save change(create bot)
    setOpen(false);
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
          <Grid
            container
            spacing={3}
          >
            <Box
              style={{'display': 'flex', 
                      'flexDirection': 'row',
                      'overflowX': 'auto',
                      'height': '250px',
                      'paddingLeft': '30px'}}
              >
              {existingBots.map((bot, index) => {
                return <Box 
                          style={{'width': '300px',
                                  'minWidth': '300px',
                                  'paddingRight': '30px'}}>
                          <ExistingBot
                            key={index}
                            botName={bot}
                          />
                        </Box>
              })}
            </Box>

            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <LatestOrders />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <LatestProducts 
                openCreateBotDialog={handleBotCreationDialogOpen}
                />
            </Grid>

          </Grid>
        </Container>
      </Box>

      <BotCreationDialog
        open={open}
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
