import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Box, Grid, } from '@mui/material';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import BotCreationDialog from '@/features/dashboard/components/bot-creation/bot-creation-dialog';
import BotCard from '@/features/dashboard/components/bot-card';
import BotManagementCard from '@/features/dashboard/components/bot-management/bot-management-card';
import { products } from '__data__/products';
import { ConfirmDialog } from '@/features/dashboard/components/bot-management/confirm-dialog';
import { getUserApi } from '@/features/dashboard/dashboard-slice';

const Dashboard = () => {
  const [botCreateDialog, setBotCreateDialog] = useState({open: false, channel: ""});
  const [botDeleteDialog, setBotDeleteDialog] = useState({open: false});

  const dispatch = useDispatch();
  useEffect (() => {  
      dispatch(getUserApi({userId: "lnkniyQLCNPlJz4cH0k3ejeh9ZB3", subaccount: "test-1"}))
      },[]
  );

  const handleDialogOpen = (dialog, channel) => {
    switch (dialog) {
      case 'botCreate':
        setBotCreateDialog({open: true, channel: channel});
        break;
      case 'botDelete':
        setBotDeleteDialog({open: true});
        break;
    }
  }
  const handleDeleteDialogClose = () => {
    setBotDeleteDialog({open: false});
  }
  const handleCreateDialogClose = () => {
    //TODO: save change(create bot)
    setBotCreateDialog({open: false, channel: ""});
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
          padding: '64px 32px'
        }}
      >
        <Grid
          container
          spacing={3}
        >
          <Box
            style={{display: 'flex', 
                    flexDirection: 'row',
                    overflowX: 'auto',
                    height: '200px',
                    paddingLeft: '30px'}}
            >
            {products.map((bot, index) => {
              return <Box 
                        key={index}
                        style={{'minWidth': '340px',
                                'paddingRight': '30px'}}>
                        <BotCard
                          key={index}
                          bot={bot}
                          openCreateBotDialog={handleDialogOpen}
                        />
                      </Box>
            })}
          </Box>

          <Box
            sx={{
              padding: '32px',
              width: '100%'
            }}
          >
            <BotManagementCard 
              openConfirmDialog={handleDialogOpen}
              />
          </Box>

        </Grid>
      </Box>

      <BotCreationDialog
        open={botCreateDialog.open}
        channel={botCreateDialog.channel}
        onClose={handleCreateDialogClose}
        />

      <ConfirmDialog
        open={botDeleteDialog.open}
        onClose={handleDeleteDialogClose}
      />
    </>
)};

Dashboard.getLayout = (page) => (
  <DashboardLayout
    pageName="Dashboard"
  >
    {page}
  </DashboardLayout>
);

export default Dashboard;
