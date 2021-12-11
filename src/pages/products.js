import { React, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { products } from '__data__/products';
import { ProductCard } from '@/features/product/components/product-card';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { RoseInfoDialog } from '@/features/product/rose-info-dialog';
import { WhaleHuntInfoDialog } from '@/features/product/whale-info-dialog';
import { DailyScalpingInfoDialog } from '@/features/product/daily-info-dialog';

const Products = () => {
  const [infoDialog, setShowInfoDialog] = useState({rose: false, 
                                                    whaleHunt: false, 
                                                    dailyScalping: false});
  const handleBotInfoDialogOpen = (channel) => {
    switch (channel) {
      case "Rose Premium":
        setShowInfoDialog({rose: true, whaleHunt: false, dailyScalping: false});
        break;
      case "Whale Hunt":
        setShowInfoDialog({rose: false, whaleHunt: true, dailyScalping: false});
        break;
      case "Daily Scalping":
        setShowInfoDialog({rose: false, whaleHunt: false, dailyScalping: true});
        break;
    }
  }
  const handleBotInfoDialogClose = () => {
    setShowInfoDialog({rose: false, whaleHunt: false, dailyScalping: false});
  }
  return (
    <>
      <Head>
        <title>
          Products | Darius
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
              {products.map((product) => (
                <Grid
                  item
                  key={product.id}
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
        open={infoDialog.rose}
        onClose={handleBotInfoDialogClose}
        />
      <WhaleHuntInfoDialog
        open={infoDialog.whaleHunt}
        onClose={handleBotInfoDialogClose}
        />
      <DailyScalpingInfoDialog
        open={infoDialog.dailyScalping}
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
