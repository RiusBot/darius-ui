import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import ServiceOptions from '@/features/services/components/service-options';
import ServicePayment from '@/features/services/components/service-payment';
import { DashboardLayout } from '@/common/components/dashboard-layout';

const Service = () => (
  <>
    <Head>
      <title>
        Service and Payment
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
        <ServiceOptions />
        <Box sx={{ mt: 3 }}>
          <ServicePayment />
        </Box>
      </Container>
    </Box>
  </>
);
Service.getLayout = (page) => (
  <DashboardLayout
    pageName="Service and Payment"
  >
    {page}
  </DashboardLayout>
);

export default Service;
