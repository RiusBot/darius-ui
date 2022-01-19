import Head from 'next/head';
import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography, Card, CardHeader, CardContent, Divider } from '@mui/material';
import withAuth from '@/common/utils/auth';
import SubscriptionPlans from '@/features/subscription/components/subscription-plans';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import Snackbar from '@/common/components/snackbar';
import { SubscriptionCurrent } from '@/features/subscription/components/subscription-current';
import { loadAllPlan, loadUserSubscription } from '@/features/subscription/subscription-slice';
import { getPlans, getSubscriptions } from '@/features/subscription/subscription-selector';
import { loadUserProfile } from '@/app/app-slice';
import { getUserProfile } from '@/common/selectors';

const Subscription = () => {
  const dispatch = useDispatch();
  useEffect (() => {  
    dispatch(loadAllPlan());
    dispatch(loadUserSubscription());
    dispatch(loadUserProfile());
    },[]
  );
  const plans = useSelector(getPlans);
  const subscriptions = useSelector(getSubscriptions);
  const profile = useSelector(getUserProfile);

  return (
    <>
      <Head>
        <title>
          Subscription and Plans | RiusBot
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4
        }}
      >
        <Container maxWidth={false}>
          <Card>
            <CardHeader
              subheader="30% refunding for first subscription. 15% refunding for renew subscription."
              title="Opening Offer"
            />
            <Divider />
            <CardHeader
              subheader="Currently subscribed channels and according expire date."
              title="Subscriptions"
            />
            <Box sx={{padding: '0 32px 32px'}} >
              <SubscriptionCurrent
                subscriptions={subscriptions}
              />
            </Box>
            <Divider />
            <SubscriptionPlans 
              subscriptions={subscriptions}
              plans={plans}
              profile={profile}
            />
          </Card>
        </Container>
        <Snackbar />
      </Box>
    </>
  );
}
Subscription.getLayout = (page) => (
  <DashboardLayout
    pageName="Subscription and Plans"
  >
    {page}
  </DashboardLayout>
);

export default withAuth(Subscription);
