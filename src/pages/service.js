import Head from 'next/head';
import { Box, Container } from '@mui/material';
import ServiceOptions from '../components/services/service-options';
import ServicePayment from '../components/services/service-payment';
import { DashboardLayout } from '../components/dashboard-layout';

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
        py: 8
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
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Service;
