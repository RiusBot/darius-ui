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
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Service and Payment
        </Typography>
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
