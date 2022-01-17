import Head from 'next/head';
import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography, Card, CardHeader, CardContent, Divider } from '@mui/material';
import withAuth from '@/common/utils/auth';
import SubscriptionPlans from '@/features/subscription/components/subscription-plans';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import Snackbar from '@/common/components/snackbar';
import { SubscriptionCurrent } from '@/features/subscription/components/subscription-current';
import { getAllPlan, getUserSubscription } from '@/features/subscription/subscription-slice';
import { getPlansFromState, getSubscriptionsFromState } from '@/features/subscription/subscription-selector';
import { getUserProfile } from '@/app/app-slice';
import { getUserProfileFromState } from '@/common/selectors';

const Subscription = () => {
  const dispatch = useDispatch();
  useEffect (() => {  
    dispatch(getAllPlan());
    dispatch(getUserSubscription());
    dispatch(getUserProfile());
    },[]
  );
  const plans = useSelector(getPlansFromState);
  const subscriptions = useSelector(getSubscriptionsFromState);
  const profile = useSelector(getUserProfileFromState);

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
