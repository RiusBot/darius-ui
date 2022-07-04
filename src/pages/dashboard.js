import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Box, Grid, Card, Typography } from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { NavItem } from '@/common/components/nav-item';
import withAuth from '@/common/utils/auth';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import BotCreationDialog from '@/features/dashboard/components/bot-creation/bot-creation-dialog';
import BotEditDialog from '@/features/dashboard/components/bot-management/bot-edit-dialog';
import BotCard from '@/features/dashboard/components/bot-card';
import BotManagementCard from '@/features/dashboard/components/bot-management/bot-management-card';
import { productMedia } from '__data__/products';
import { ConfirmDialog } from '@/features/dashboard/components/bot-management/confirm-dialog';
import Snackbar from '@/common/components/snackbar';
import { deleteUserBot, closeUserPosition } from '@/features/dashboard/dashboard-slice';
import { loadUserApi } from '@/features/api/api-slice';
import { getUserApi } from '@/features/api/api-selector';
import { loadUserSubscription } from '@/features/subscription/subscription-slice';
import { getSubscriptions } from '@/features/subscription/subscription-selector';
import { loadUserProfile } from '@/app/app-slice';
import { getUserProfile } from '@/common/selectors';

const subscriptionLink = {
  href: '/subscription',
  icon: (<PlaylistAddCheckIcon fontSize="small" />),
  title: 'Go to Subscription & Plans'
}

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
  const [closePositionDialog, setClosePositionDialog] = useState({open: false, botId: null});

  const userApi = useSelector(getUserApi);
  const subscriptions = useSelector(getSubscriptions);
  const subscribedChannels = subscriptions.map((sub) => { return sub.plan.channel });
  const profile = useSelector(getUserProfile);
  useEffect (() => {
    if (Object.keys(profile).length == 0) {
      dispatch(loadUserProfile());
    }
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
  const confirmClosePosition = () => {
    dispatch(closeUserPosition({botId: closePositionDialog.botId}));
    setClosePositionDialog({open: false, botId: null});
  }

  const handleDialogOpen = (dialog) => {
    const channelDisplayName = Object.keys(productMedia).includes(dialog.channel) ? productMedia[dialog.channel].channelDisplayName : dialog.channel
    switch (dialog.action) {
      case 'botCreate':
        setBotCreateDialog({open: true, 
                            channel: dialog.channel, 
                            channelDisplayName: channelDisplayName});
        break;
      case 'botEdit':
        setBotEditDialog({open: true, 
                          channel: dialog.channel,
                          channelDisplayName: channelDisplayName,
                          botId: dialog.botId,
                          config: dialog.config,
                          status: dialog.botStatus,
                        });
        break;
      case 'botDelete':
        setBotDeleteDialog({open: true, botId: dialog.botId});
        break;
      case 'closePosition':
        setClosePositionDialog({open: true, botId: dialog.botId});
        break;
    }
  }

  const AvailableBots = () => {
    return (
      <>
        {Object.values(productMedia).map((sub, index) => {
        if (sub.status == 'active') {
          if (sub.channel == "ACDC" && subscriptions != undefined) {
            if (subscriptions.filter(x => (x.plan.channel == "ACDC")).length == 0)
              return;
          }
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
        }
      })}
      </>
    )
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
            <AvailableBots />
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
        isTrial={! (subscribedChannels.includes(botCreateDialog.channel))}
        onClose={() => setBotCreateDialog({open: false, channel: ""})}
        />
      <BotEditDialog
        open={botEditDialog.open}
        channel={botEditDialog.channel}
        channelDisplayName={botEditDialog.channelDisplayName}
        botId={botEditDialog.botId}
        config={botEditDialog.config}
        status={botEditDialog.status}
        isTrial={! (subscribedChannels.includes(botEditDialog.channel))}
        onClose={() => setBotEditDialog(defaultEditDialog)}
        />

      <ConfirmDialog
        open={botDeleteDialog.open}
        onConfirm={confirmDeleteBot}
        onClose={() => setBotDeleteDialog({open: false, botId: null})}
        object="BOT"
      />
      <ConfirmDialog
        open={closePositionDialog.open}
        onConfirm={confirmClosePosition}
        onClose={() => setClosePositionDialog({open: false, botId: null})}
        object="POSITION"
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
