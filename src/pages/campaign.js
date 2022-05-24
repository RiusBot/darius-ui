import Head from 'next/head';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import withAuth from '@/common/utils/auth';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { FreeCredit } from '@/features/campaign/components/free-credit';
import { FreeTrial } from '@/features/campaign/components/free-trial';
import { OpenOffer } from '@/features/campaign/components/opening-offer';
import { AlphaShark } from '@/features/campaign/components/alphashark';

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
        <Container maxWidth={false}>
          <OpenOffer showButton={true} /><br/>
          <AlphaShark showButton={true}  /><br/>
          <Grid container spacing={3} sx={{ height: '100%' }}>
            <Grid item xs={12} md ={6} >
              <FreeTrial />
            </Grid>
            <Grid item xs={12} md ={6} >
              <FreeCredit />
            </Grid>
          </Grid>
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
export default Campaign;