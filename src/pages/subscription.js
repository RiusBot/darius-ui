import Head from 'next/head';
import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography } from '@mui/material';
import withAuth from '@/common/utils/auth';
import SubscriptionPlans from '@/features/subscription/components/subscription-plans';
import SubscriptionPayment from '@/features/subscription/components/subscription-payment';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import Snackbar from '@/common/components/snackbar';
import { getAllPlan, getUserSubscription } from '@/features/subscription/subscription-slice';
import { getPlansFromState, getSubscriptionsFromState } from '@/features/subscription/subscription-selector';

const Subscription = () => {
  const dispatch = useDispatch();
  useEffect (() => {  
    dispatch(getAllPlan());
    dispatch(getUserSubscription());
    },[]
  );
  const plans = useSelector(getPlansFromState);
  const subscriptions = useSelector(getSubscriptionsFromState);

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
          <SubscriptionPlans 
            subscriptions={subscriptions}
            plans={plans}
          />
          <Box sx={{ mt: 3 }}>
            <SubscriptionPayment />
          </Box>
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
