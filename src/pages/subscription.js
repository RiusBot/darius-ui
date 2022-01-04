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
            />
          </Card>
          <Box sx={{ mt: 3 }}>
            <Card>
              <CardHeader
                subheader="The amount of deposit remain in your account.  
                           Head to the Transaction & Payment page to increase your deposit."
                title="Remain"
              />  
              <Typography
                  sx={{padding: '0 32px 16px'}}
                  color="textPrimary"
                  gutterBottom
                  variant="h6"
                  >
                  $ 50
              </Typography>
            </Card>
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
