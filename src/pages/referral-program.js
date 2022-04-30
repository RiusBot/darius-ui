import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { NavItem } from '@/common/components/nav-item';
import withAuth from '@/common/utils/auth';
import { AccountProfile } from '@/features/account/components/account-profile';
import { AccountReferral } from '@/features/account/components/account-referral';
import { AccountReferrer } from '@/features/account/components/account-referrer';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { loadUserProfile } from '@/app/app-slice';
import { getUserProfile } from '@/common/selectors';

const subscriptions = {
  href: '/subscription',
  icon: (<PlaylistAddCheckIcon fontSize="small" />),
  title: 'Go to Subscription & Plans'
}

const ReferralProgram = () => {
  const dispatch = useDispatch();

  const profile = useSelector(getUserProfile);
  useEffect (() => {
    if (Object.keys(profile).length == 0) {
      dispatch(loadUserProfile());
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
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountReferral 
              profile={profile}
              />
              <br/>
              <AccountReferrer 
              profile={profile}
              />
            </Grid>
          </Grid>
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
