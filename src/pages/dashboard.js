import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Box, Grid, } from '@mui/material';
import withAuth from '@/common/utils/auth';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import BotCreationDialog from '@/features/dashboard/components/bot-creation/bot-creation-dialog';
import BotCard from '@/features/dashboard/components/bot-card';
import BotManagementCard from '@/features/dashboard/components/bot-management/bot-management-card';
import { productMedia } from '__data__/products';
import { ConfirmDialog } from '@/features/dashboard/components/bot-management/confirm-dialog';
import Snackbar from '@/common/components/snackbar';
import { deleteUserBot } from '@/features/dashboard/dashboard-slice';
import { loadUserApi } from '@/features/api/api-slice';
import { getUserApi } from '@/features/api/api-selector';
import { loadUserSubscription } from '@/features/subscription/subscription-slice';
import { getSubscriptions } from '@/features/subscription/subscription-selector';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [botCreateDialog, setBotCreateDialog] = useState({open: false, channel: "", channelDisplayName: ""});
  const [botDeleteDialog, setBotDeleteDialog] = useState({open: false, botId: null});

  const userApi = useSelector(getUserApi);
  const subscriptions = useSelector(getSubscriptions);
  useEffect (() => {
    if (Object.keys(userApi).length == 0) {
      dispatch(loadUserApi());
    }
    if (Object.keys(subscriptions).length == 0) {
      dispatch(loadUserSubscription());
    }
    },[]
  );
  const confirmDeleteBot = () => {
    dispatch(deleteUserBot({botId: botDeleteDialog.botId}));
    handleDeleteDialogClose();
  }

  const handleDialogOpen = (dialog) => {
    switch (dialog.action) {
      case 'botCreate':
        setBotCreateDialog({open: true, channel: dialog.channel, channelDisplayName: dialog.channelDisplayName});
        break;
      case 'botDelete':
        setBotDeleteDialog({open: true, botId: dialog.botId});
        break;
    }
  }
  const handleDeleteDialogClose = () => {
    setBotDeleteDialog({open: false, botId: null});
  }
  const handleCreateDialogClose = () => {
    setBotCreateDialog({open: false, channel: ""});
  }
  return (
    <>
      <Head>
        <title>
          Dashboard | RiusBot
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
                    paddingLeft: '30px',
                    paddingBottom: '16px'}}
            >
            {Object.values(productMedia).map((sub, index) => {
               return <Box 
               key={index}
               style={{'minWidth': '360px',
                       'paddingRight': '30px'}}>
               <BotCard
                 key={index}
                 bot={sub}
                 openCreateBotDialog={handleDialogOpen}
               />
             </Box>
            })}
            {/* {subscriptions.map((sub, index) => { 
              return <Box 
                        key={index}
                        style={{'minWidth': '360px',
                                'paddingRight': '30px'}}>
                        <BotCard
                          key={index}
                          bot={productMedia[sub.plan.channel]}
                          openCreateBotDialog={handleDialogOpen}
                        />
                      </Box>
            })} */}
          </Box>

          <Box
            sx={{
              padding: '32px 0 32px 32px',
              width: '100%'
            }}
          >
            <BotManagementCard 
              userApi={userApi}
              openConfirmDialog={handleDialogOpen}
              />
          </Box>

        </Grid>
        <Snackbar />
      </Box>

      <BotCreationDialog
        open={botCreateDialog.open}
        channel={botCreateDialog.channel}
        channelDisplayName={botCreateDialog.channelDisplayName}
        onClose={handleCreateDialogClose}
        />

      <ConfirmDialog
        open={botDeleteDialog.open}
        onConfirm={confirmDeleteBot}
        onClose={handleDeleteDialogClose}
        object="BOT"
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
export default withAuth(Dashboard);
