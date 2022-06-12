import Head from 'next/head';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Card, CardHeader } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import withAuth from '@/common/utils/auth';
import SubscriptionPlans from '@/features/subscription/components/subscription-plans';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import Snackbar from '@/common/components/snackbar';
import { SubscriptionCurrent } from '@/features/subscription/components/subscription-current';
import { loadAllPlan, loadUserSubscription } from '@/features/subscription/subscription-slice';
import { getPlans, getSubscriptions } from '@/features/subscription/subscription-selector';
import { loadUserProfile } from '@/app/app-slice';
import { getUserProfile } from '@/common/selectors';
import { OpenOffer } from '@/features/campaign/components/opening-offer';

const Subscription = () => {
  const dispatch = useDispatch();

  const profile = useSelector(getUserProfile);
  const plans = useSelector(getPlans);
  const subscriptions = useSelector(getSubscriptions);
  useEffect (() => {  
    if (Object.keys(plans).length == 0) {
      dispatch(loadAllPlan());
    }
    if (Object.keys(subscriptions).length == 0) {
      dispatch(loadUserSubscription());
    }
    if (Object.keys(profile).length == 0) {
      dispatch(loadUserProfile());
    }
    },[]
  );

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
          <OpenOffer showButton={false} />
          <Card sx={{ marginTop: '32px' }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{m: 4}}/>}
                >
                <CardHeader
                  subheader="Currently subscribed channels and according expire date."
                  title="Subscriptions"
                />
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ padding: '0 32px 32px' }} >
                  <SubscriptionCurrent
                    subscriptions={subscriptions}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          </Card>
          <Card sx={{ marginTop: '32px' }}>
            <SubscriptionPlans 
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
