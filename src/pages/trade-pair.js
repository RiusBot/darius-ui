import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import withAuth from '@/common/utils/auth';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { ConfirmDialog } from '@/features/dashboard/components/bot-management/confirm-dialog';
import { PairCreationDialog } from '@/features/pair/components/pair-creation-dialog';
import { CustomPairs } from '@/features/pair/components/custom-pairs';
import { BuiltinPairs } from '@/features/pair/components/builtin-pairs';
import { loadMarket } from '@/features/pair/pair-slice';
import { getAllToken } from '@/features/pair/pair-selector';
import { deleteUserPair } from '@/features/pair/pair-slice';


const tradePair = () => {
  const dispatch = useDispatch();
  const [pairCreateDialog, setPairCreateDialog] = useState({open: false});
  const [pairDeleteDialog, setPairDeleteDialog] = useState({open: false, pairId: null});

  const allMarketToken = useSelector(getAllToken);
  useEffect (() => {
    if (allMarketToken.length == 0) {
      dispatch(loadMarket());
    }
    if (allToken.length == 0) {
      dispatch(loadMarket());
    }
    },[]
  );

  const confirmDeletePair = () => {
    dispatch(deleteUserPair({pairId: pairDeleteDialog.pairId}));
    setPairDeleteDialog({open: false, pairId: null});
  }

  return (
    <>
      <Head>
        <title>
          Trading List | RiusBot
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
          <CustomPairs
            setPairCreateDialog={setPairCreateDialog}
            setPairDeleteDialog={setPairDeleteDialog}
            />

          <BuiltinPairs />
        </Container>
      </Box>
      <PairCreationDialog
        open={pairCreateDialog.open}
        tokenData={allMarketToken}
        onClose={() => setPairCreateDialog({open: false})}
        />
      <ConfirmDialog
        open={pairDeleteDialog.open}
        onConfirm={confirmDeletePair}
        onClose={() => setPairDeleteDialog({open: false, pairId: null})}
        object="API"
      />
    </>
  );
};
tradePair.getLayout = (page) => (
  <DashboardLayout
    pageName="Trading Lists"
  >
    {page}
  </DashboardLayout>
);

export default withAuth(tradePair);
