import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase'
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  TextField,
  Avatar,
  Typography
} from '@mui/material';

export const OpenOffer = (props) => {
  
  const { showButton } = props;
  const router = useRouter();
  
  return (
    <>
      <Card>
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
          <CardMedia
            component="img"
            height="140"
            image={'/static/images/celebration.png'}
            alt="Celebration"
          />
          <CardMedia
            component="img"
            height="140"
            image={'/static/images/celebration.png'}
            alt="Celebration"
          />
          <CardMedia
            component="img"
            height="140"
            image={'/static/images/celebration.png'}
            alt="Celebration"
          />
        </Box>
        <CardHeader
          title="Opening Offer"
        />
        <Box sx={{ padding: '0 32px 32px' }} >
          <Typography 
            color="textSecondary"
            variant="button"
            sx={{ textAlign: 'center', width: '100%'}}>
            30% refunding for first subscription. 15% refunding for expand subscription.
          </Typography>
          <br/><br/>
          <Box sx={{ display: ((showButton) ? 'block' : 'none') }}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => router.push("/subscription")}
              position= 'relative'
              alignItems= 'center'
            >
              Subscribe Now →
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};
