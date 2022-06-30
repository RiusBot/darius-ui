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
import { CourageInfoDialog } from '@/features/product/courage-info-dialog';
import { SpaceforceInfoDialog } from '@/features/product/spaceforce-info-dialog';
import { ArbitrageInfoDialog } from '@/features/product/arbitrage-info-dialog';
import { AcdcInfoDialog } from '@/features/product/acdc-info-dialog';
import { CtaInfoDialog } from '@/features/product/cta-info-dialog';
import { WebhookInfoDialog } from '@/features/product/webhook-info-dialog';
import { PerformanceInfoDialog } from '@/features/product/performance-info-dialog';
import { loadPerformance, loadAllTimePerformance } from '@/features/product/product-slice';
import { getAllPerformance } from '@/features/product/product-selector';

const Products = () => {
  const dispatch = useDispatch();
  const [infoDialog, setInfoDialog] = useState('');
  const [perfDialog, setPerfDialog] = useState('');
  const [tags, setTags] = useState([]);
  const handleBotInfoDialogClose = () => {
    setInfoDialog('');
  }
  const handleBotPerfDialogClose = () => {
    setPerfDialog('');
  }

  const performance = useSelector(getAllPerformance);
  useEffect (() => {
    if (performance.ROSE.length == 0) {
      dispatch(loadPerformance());
    }
  },[]);
  useEffect (() => {
    if (perfDialog != '' && performance.AllTime[perfDialog] == undefined) {
      console.log(123);
      console.log(perfDialog);
      console.log(`/api/v1/get_performance/${perfDialog}`);
      dispatch(loadAllTimePerformance(perfDialog));
    }
  },[perfDialog]);

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
                    openInfoDialog={() => setInfoDialog(product.channel)}
                    setTags={() => setTags(product.tags)}
                  />
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

      <PerformanceInfoDialog
        open={perfDialog != ''}
        onClose={handleBotPerfDialogClose}
        data={performance.AllTime[perfDialog]}
        channel={infoDialog}
        />
      <RoseInfoDialog
        open={infoDialog == 'ROSE'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <WhaleHuntInfoDialog
        open={infoDialog == 'WHALE'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <DailyScalpingInfoDialog
        open={infoDialog == 'DAILYSCALP'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <PerpetualInfoDialog
        open={infoDialog == 'PERPETUAL'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <VegasInfoDialog
        open={infoDialog == 'VEGAS'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <JustinInfoDialog
        open={infoDialog == 'JUSTIN'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <MoonInfoDialog
        open={infoDialog == 'MOON'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <CourageInfoDialog
        open={infoDialog == 'COURAGE'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <AcdcInfoDialog
        open={infoDialog == 'ACDC'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <CtaInfoDialog
        open={infoDialog == 'CTA'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <ArbitrageInfoDialog
        open={infoDialog == 'ARBITRAGE'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
        />
      <WebhookInfoDialog
        open={infoDialog == 'WEBHOOK'}
        onClose={handleBotInfoDialogClose}
        tags={tags}
        openPerfDialog={() => setPerfDialog(infoDialog)}
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
