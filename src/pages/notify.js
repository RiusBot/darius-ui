import Head from 'next/head';
import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography, Card, CardHeader, List, Divider } from '@mui/material';
import withAuth from '@/common/utils/auth';
import { getUserNotify } from '@/features/notify/notify-selector';
import { loadUserNotify } from '@/features/notify/notify-slice';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { NotifyConfig } from '@/features/notify/components/notify-config';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


const Notification = () => {

  const dispatch = useDispatch();
  const userNotifyConfig = useSelector(getUserNotify);

  useEffect (() => {
    if (Object.keys(userNotifyConfig).length == 0) {
      dispatch(loadUserNotify());
    }
    },[]
  );
    
  return (
    <>
      <Head>
        <title>
          Notification | RiusBot
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={false}>
          <Card sx={{ marginTop: '32px' }}>
            <Box sx={{p:2}} >
              <CardHeader
                title={
                    <Box sx={{ display: 'flex', flexDirection: 'row', m: 2 }} >
                      <NotificationsActiveIcon />
                      &nbsp;&nbsp;&nbsp;
                      {"Select events to recieve notifications"}
                    </Box>
                  }
              />
              <Divider />
              <List>
                <NotifyConfig userNotifyConfig={userNotifyConfig} />
              </List>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}

Notification.getLayout = (page) => (
  <DashboardLayout
    pageName="Notification"
  >
    {page}
  </DashboardLayout>
);
export default withAuth(Notification);