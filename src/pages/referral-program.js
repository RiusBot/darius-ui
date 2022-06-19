import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { NavItem } from '@/common/components/nav-item';
import withAuth from '@/common/utils/auth';
import { UserReferral } from '@/features/referral/components/referral';
import { UserReferralStats } from '@/features/referral/components/referral-stats';
import { UserReferralHistory } from '@/features/referral/components/referral-history';
import { UserReferralRule } from '@/features/referral/components/referral-rule';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { loadUserProfile } from '@/app/app-slice';
import { getUserProfile } from '@/common/selectors';
import { loadUserReferral } from '@/features/referral/referral-slice';
import { getUserReferral } from '@/features/referral/referral-selector';

const subscriptions = {
  href: '/subscription',
  icon: (<PlaylistAddCheckIcon fontSize="small" />),
  title: 'Go to Subscription & Plans'
}

const ReferralProgram = () => {
  const dispatch = useDispatch();
  const userReferral = useSelector(getUserReferral);
  useEffect (() => {
    if (Object.keys(userReferral).length == 0) {
      dispatch(loadUserReferral());
    }
    },[]
  );

  return (
    <>
      <Head>
        <title>
          Referral Program | RiusBot
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={4}
              variant="text"
            >
              <UserReferralStats
                referralInfo={userReferral}
              />
            </Grid>
            <Grid
              item
              xs={8}
              variant="text"
            >
              <UserReferral
                referralInfo={userReferral}
              />
            </Grid>
          </Grid>
          <br/>
          <UserReferralHistory referralInfo={userReferral} />
          <br/>
          <UserReferralRule referralInfo={userReferral} />
        </Container>
      </Box>
    </>
  );
}

ReferralProgram.getLayout = (page) => (
  <DashboardLayout
    pageName="Referral Program"
  >
    {page}
  </DashboardLayout>
);

export default withAuth(ReferralProgram);
