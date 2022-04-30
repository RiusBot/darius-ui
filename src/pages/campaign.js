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
import { FreeCredit } from '@/features/campaign/components/free-credit';
import { FreeTrial } from '@/features/campaign/components/free-trial';
import { OpenOffer } from '@/features/campaign/components/opening-offer';

const subscriptions = {
  href: '/subscription',
  icon: (<PlaylistAddCheckIcon fontSize="small" />),
  title: 'Go to Subscription & Plans'
}

const Campaign = () => {
  return (
    <>
      <Head>
        <title>
          Campaign | RiusBot
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <OpenOffer showButton={true} /><br/>
          <FreeTrial /><br/>
          <FreeCredit /><br/>
        </Container>
      </Box>
    </>
  );
}

Campaign.getLayout = (page) => (
  <DashboardLayout
    pageName="Campaign"
  >
    {page}
  </DashboardLayout>
);

export default withAuth(Campaign);
