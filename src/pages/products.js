import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { products } from '__data__/products';
import { ProductCard } from '@/features/product/components/product-card';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { RoseInfoDialog } from '@/features/product/rose-info-dialog';
import { WhaleHuntInfoDialog } from '@/features/product/whale-info-dialog';
import { DailyScalpingInfoDialog } from '@/features/product/daily-info-dialog';
import { PerpetualInfoDialog } from '@/features/product/perpetual-info-dialog';
import { VegasInfoDialog } from '@/features/product/vegas-info-dialog';
import { JustinInfoDialog } from '@/features/product/justin-info-dialog';
import { MoonInfoDialog } from '@/features/product/moon-info-dialog';
import { WebhookInfoDialog } from '@/features/product/webhook-info-dialog';
import { loadPerformance  } from '@/features/product/product-slice';
import { getAllPerformance } from '@/features/product/product-selector';

const Products = () => {
  const dispatch = useDispatch();
  const [infoDialog, setInfoDialog] = useState('');
  const handleBotInfoDialogClose = () => {
    setInfoDialog('');
  }

  const performance = useSelector(getAllPerformance);
  useEffect (() => {
    if (performance.ROSE.length == 0) {
      dispatch(loadPerformance());
    }
  },[]);

  return (
    <>
      <Head>
        <title>
          Products | RiusBot
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
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {products.map((product, idx) => (
                <Grid
                  item
                  key={idx}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <ProductCard
                    product={product}
                    chartData={performance[product.channel]}
                    openInfoDialog={() => setInfoDialog(product.channel)} />
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination
              color="primary"
              count={3}
              size="small"
            />
          </Box> */}
        </Container>
      </Box>

      <RoseInfoDialog
        open={infoDialog == 'ROSE'}
        onClose={handleBotInfoDialogClose}
        />
      <WhaleHuntInfoDialog
        open={infoDialog == 'WHALE'}
        onClose={handleBotInfoDialogClose}
        />
      <DailyScalpingInfoDialog
        open={infoDialog == 'DAILYSCALP'}
        onClose={handleBotInfoDialogClose}
        />
      <PerpetualInfoDialog
        open={infoDialog == 'PERPETUAL'}
        onClose={handleBotInfoDialogClose}
        />
      <VegasInfoDialog
        open={infoDialog == 'VEGAS'}
        onClose={handleBotInfoDialogClose}
        />
      <JustinInfoDialog
        open={infoDialog == 'JUSTIN'}
        onClose={handleBotInfoDialogClose}
        />
      <MoonInfoDialog
        open={infoDialog == 'MOON'}
        onClose={handleBotInfoDialogClose}
        />
      <WebhookInfoDialog
        open={infoDialog == 'WEBHOOK'}
        onClose={handleBotInfoDialogClose}
        />
    </>
  );
};

Products.getLayout = (page) => (
  <DashboardLayout
    pageName="Products"
  >
    {page}
  </DashboardLayout>
);

export default Products;
