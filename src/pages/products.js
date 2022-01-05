import { React, useState } from 'react';
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

const Products = () => {
  const product_map = {ROSE: false,
                       WHALE: false,
                       DAILY: false,
                       PERPETUAL: false,
                       VEGAS: false,
                      }
  const [infoDialog, setShowInfoDialog] = useState(product_map);
  const handleBotInfoDialogOpen = (channel) => {
    var tmp = JSON.parse(JSON.stringify(product_map));;
    tmp[channel] = true;
    switch (channel) {
      case "ROSE":
        setShowInfoDialog(tmp);
        break;
      case "WHALE":
        setShowInfoDialog(tmp);
        break;
      case "DAILYSCALP":
        setShowInfoDialog(tmp);
        break;
      case "PERPETUAL":
        setShowInfoDialog(tmp);
        break;
      case "VEGAS":
        setShowInfoDialog(tmp);
        break;
    }
  }
  const handleBotInfoDialogClose = () => {
    setShowInfoDialog(product_map);
  }
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
                    openInfoDialog={handleBotInfoDialogOpen} />
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
        open={infoDialog.ROSE}
        onClose={handleBotInfoDialogClose}
        />
      <WhaleHuntInfoDialog
        open={infoDialog.WHALE}
        onClose={handleBotInfoDialogClose}
        />
      <DailyScalpingInfoDialog
        open={infoDialog.DAILY}
        onClose={handleBotInfoDialogClose}
        />
      <PerpetualInfoDialog
        open={infoDialog.PERPETUAL}
        onClose={handleBotInfoDialogClose}
        />
      <VegasInfoDialog
        open={infoDialog.VEGAS}
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
