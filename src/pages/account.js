import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import withAuth from '@/common/utils/auth';
import { AccountProfile } from '@/features/account/components/account-profile';
import { AccountProfileDetails } from '@/features/account/components/account-profile-details';
import { AccountReferral } from '../features/account/components/account-referral';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { loadUserProfile } from '@/app/app-slice';
import { getUserProfile } from '@/common/selectors';

const Account = () => {
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
