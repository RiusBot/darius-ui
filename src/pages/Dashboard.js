import { React, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestProducts';
import BotCreationDialog from '../components/dashboard/botCreation/BotCreationDialog';
import ExistingBot from 'src/components/dashboard/ExistingBot';


let existingBots = ["Rose", "Tsai", "Blablabla", "test2", "3", "4", "5"];

function Dashboard () {
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
      <Helmet>
        <title>Dashboard | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Box
              style={{'display': 'flex', 
                      'flex-direction': 'row',
                      'overflow-x': 'auto',
                      'height': '250px',
                      'padding': '30px 0 0 30px'}}
              >
              {existingBots.map((bot, index) => {
                return <Box 
                          style={{'width': '300px',
                                  'min-width': '300px',
                                  'padding-right': '30px'}}>
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
                sx={{ height: '100%' }} 
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
  );
}

export default Dashboard;
