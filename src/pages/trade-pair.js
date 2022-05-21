import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';;
import Head from 'next/head';
import { Box, Container, Typography, Avatar } from '@mui/material';
import { Card, CardHeader, Divider, Button} from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import withAuth from '@/common/utils/auth';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { ConfirmDialog } from '@/features/dashboard/components/bot-management/confirm-dialog';
import Snackbar from '@/common/components/snackbar';
import { PairCreateForm } from '@/features/pair/pair-create-form';
import { loadUserPair } from '@/features/pair/pair-slice';
import { getUserPair } from '@/features/pair/pair-selector';
import { deleteUserPair } from '@/features/pair/pair-slice';


const tradePair = () => {
  const dispatch = useDispatch();
  const [pairDeleteDialog, setPairDeleteDialog] = useState({open: false, pairId: null});

  const userPair = useSelector(getUserPair);
  useEffect (() => {
    if (Object.keys(userPair).length == 0) {
      dispatch(loadUserPair());
    }
    },[]
  );
    
  const loadMarket = async () => {
    var ccxt = require ('ccxt');
    let binance = new ccxt.binacne()
    let markets = await binance.load_markets ()
    console.log (binance.id, markets)
  }

  const confirmDeletePair = () => {
    dispatch(deleteUserPair({pairId: pairDeleteDialog.pairId}));
    setPairDeleteDialog({open: false, pairId: null});
  }

  const CurrentPairList = () => {
    if (Object.keys(userPair).length == 0) {
      return (<></>);
    } 
    return (
      <>
      {Object.values(userPair).map((pair, id) => (
        <Box key={id} sx={{backgroundColor:'#EEE', padding: '16px', marginBottom: '8px'}}>
          <Box sx={{display: 'flex', flexDirection: 'row'}} >
            <KeyIcon color='primary'/>
            <Typography
              sx={{marginLeft: '16px' }}
              color="textPrimary"
              gutterBottom
              variant="h6"
              >
              {pair.name}
            </Typography>

            <Button
              color="error"
              endIcon={<DeleteForeverIcon fontSize="small" />}
              size="small"
              variant="contained"
              onClick={() => setPairDeleteDialog({open: true, pairId: pair.pair_id})}
              sx={{marginLeft: 'auto'}}
            >
                Delete
            </Button>
          </Box>

          <Typography
            sx={{marginLeft: '48px'}}
            color="textSecondary"
            gutterBottom
            variant="button"
            >
            Type: {pair.types}List
          </Typography>

        </Box>
      ))}
      </>
    );
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
        <Card>
          <CardHeader
            subheader="Each user is allowed to set at most 3 API keys at a time."
            title="Current API Keys"
          />
          <Box sx={{padding: '0 32px 32px'}} >
            <CurrentPairList/>
          </Box>
          <Divider />
          <PairCreateForm 
            display={Boolean(Object.keys(userPair).length < 3)}
          />
        </Card>
        </Container>
      </Box>
      <Snackbar />
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
