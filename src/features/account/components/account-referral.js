import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

export const AccountReferral = (props) => {
  const { profile } = props;

  return (
    <form
      autoComplete="off"
      noValidate
    >
      <Card sx={{marginTop: '32px'}}>
        <CardHeader
          subheader="Invite friends with your referral code to earn balance points."
          title="Referral"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Referral Code"
                name="referralCode"
                value={profile.referral_code}
                variant='standard'
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};
