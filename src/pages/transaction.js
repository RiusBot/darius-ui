import Head from 'next/head';
import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography } from '@mui/material';
import withAuth from '@/common/utils/auth';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import Snackbar from '@/common/components/snackbar';
import { getUserTransaction } from '@/features/transaction/transaction-slice';
import TransactionCreateForm from '@/features/transaction/components/transaction-create-form';
import TransactionTable from '@/features/transaction/components/transaction-table';

const Transaction = () => {
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getUserTransaction());
    },[]
  );

  return (
    <>
      <Head>
        <title>
          Transaction and Payment | RiusBot
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
          <TransactionCreateForm />
          <Box sx={{ mt: 3 }}>
            <TransactionTable />
          </Box>
        </Container>
        <Snackbar />
      </Box>
    </>
  );
}
Transaction.getLayout = (page) => (
  <DashboardLayout
    pageName="Transaction and Payment"
  >
    {page}
  </DashboardLayout>
);

export default withAuth(Transaction);
