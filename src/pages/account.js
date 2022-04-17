import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { NavItem } from '@/common/components/nav-item';
import withAuth from '@/common/utils/auth';
import { AccountProfile } from '@/features/account/components/account-profile';
import { AccountProfileDetails } from '@/features/account/components/account-profile-details';
import { AccountReferral } from '@/features/account/components/account-referral';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { loadUserProfile } from '@/app/app-slice';
import { getUserProfile } from '@/common/selectors';

const subscriptions = {
  href: '/subscription',
  icon: (<PlaylistAddCheckIcon fontSize="small" />),
  title: 'Go to Subscription & Plans'
}

const Account = () => {
  const dispatch = useDispatch();

  const profile = useSelector(getUserProfile);
  useEffect (() => {
    if (Object.keys(profile).length == 0) {
      dispatch(loadUserProfile());
    }
    },[]
  );

  const TrialInfo = () => {
    if (profile.is_trial && profile.trial_period !== undefined) {
      return (
            <Card sx={{ marginBottom: '32px' }}>
              <Box sx={{ padding: '16px', backgroundColor: "#B8A289" }} >
                <Typography 
                  color="#FFFFFF"
                  variant="button"
                  sx={{ textAlign: 'center', width: '100%', paddingLeft: '32px' }}>
                  Your free trial will expire on {profile.trial_period}
                  <NavItem
                            key={subscriptions.title}
                            icon={subscriptions.icon}
                            href={subscriptions.href}
                            title={subscriptions.title}
                            />
                </Typography>
              </Box>
            </Card>)
    }
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Account | RiusBot
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
              <TrialInfo />
              <AccountProfileDetails 
              profile={profile}
              />
              <AccountReferral 
              profile={profile}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

Account.getLayout = (page) => (
  <DashboardLayout
    pageName="Account"
  >
    {page}
  </DashboardLayout>
);

export default withAuth(Account);
