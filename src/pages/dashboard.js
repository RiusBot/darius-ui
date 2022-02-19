import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Box, Grid, } from '@mui/material';
import withAuth from '@/common/utils/auth';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import BotCreationDialog from '@/features/dashboard/components/bot-creation/bot-creation-dialog';
import BotEditDialog from '@/features/dashboard/components/bot-management/bot-edit-dialog';
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
  const defaultEditDialog = { open: false, 
                              channel: "", 
                              channelDisplayName: "",
                              botId: "",
                              config: {},
                              status: "",
                            };
  const [botEditDialog, setBotEditDialog] = useState(defaultEditDialog);
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
    setBotDeleteDialog({open: false, botId: null});
  }

  const handleDialogOpen = (dialog) => {
    switch (dialog.action) {
      case 'botCreate':
        setBotCreateDialog({open: true, 
                            channel: dialog.channel, 
                            channelDisplayName: productMedia[dialog.channel].channelDisplayName});
        break;
      case 'botEdit':
        setBotEditDialog({open: true, 
                          channel: dialog.channel, 
                          channelDisplayName: productMedia[dialog.channel].channelDisplayName, 
                          botId: dialog.botId,
                          config: dialog.config,
                          status: dialog.botStatus,
                        });
        break;
      case 'botDelete':
        setBotDeleteDialog({open: true, botId: dialog.botId});
        break;
    }
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
              openBotEditDialog={handleDialogOpen}
              />
          </Box>

        </Grid>
        <Snackbar />
      </Box>

      <BotCreationDialog
        open={botCreateDialog.open}
        channel={botCreateDialog.channel}
        channelDisplayName={botCreateDialog.channelDisplayName}
        onClose={() => setBotCreateDialog({open: false, channel: ""})}
        />
      <BotEditDialog
        open={botEditDialog.open}
        channel={botEditDialog.channel}
        channelDisplayName={botEditDialog.channelDisplayName}
        botId={botEditDialog.botId}
        config={botEditDialog.config}
        status={botEditDialog.status}
        onClose={() => setBotEditDialog(defaultEditDialog)}
        />

      <ConfirmDialog
        open={botDeleteDialog.open}
        onConfirm={confirmDeleteBot}
        onClose={() => setBotDeleteDialog({open: false, botId: null})}
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
