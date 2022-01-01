import Head from 'next/head';
import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography } from '@mui/material';
import withAuth from '@/common/utils/auth';
import ServiceOptions from '@/features/service/components/service-options';
import ServicePayment from '@/features/service/components/service-payment';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import Snackbar from '@/common/components/snackbar';
import { getAllPlan } from '@/features/service/service-slice';
import { getPlansFromState } from '@/features/service/service-selector';

const Service = () => {
  const dispatch = useDispatch();
  useEffect (() => {  
    dispatch(getAllPlan());
    },[]
  );
  const plans = useSelector(getPlansFromState);
  console.log(plans);

  return (
    <>
      <Head>
        <title>
          Service and Payment | RiusBot
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
        <Snackbar />
      </Box>
    </>
  );
}
Service.getLayout = (page) => (
  <DashboardLayout
    pageName="Service and Payment"
  >
    {page}
  </DashboardLayout>
);

export default withAuth(Service);
