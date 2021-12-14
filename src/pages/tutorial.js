import Head from 'next/head';
import { Box, Card } from '@mui/material';
import { DashboardLayout } from '@/common/components/dashboard-layout';

const Tutorial = () => (
  <>
    <Head>
      <title>
        Tutorial | RiusBot
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        padding: '64px'
      }}
    >
      <Card sx={{heigh: '100%', width: '100%', padding: '32px'}}>
      </Card>
    </Box>
  </>
);

Tutorial.getLayout = (page) => (
  <DashboardLayout
    pageName='Tutorial'
  >
    {page}
  </DashboardLayout>
);

export default Tutorial;
