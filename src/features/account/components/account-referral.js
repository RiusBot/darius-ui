import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const AccountReferral = (props) => {
  const { profile: { referral_code: referralCode }} = props;
  const invitationUrl = `https://riusbot.com/register?referralCode=${referralCode}`

  return (
    <form
      autoComplete="off"
      noValidate
    >
      <Card sx={{marginTop: '32px'}}>
        <CardHeader
          subheader="Invite friends with your referral code to earn balance points. You will gain 30% extra refund from your referrer's first subscription."
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
              xs={6}
            >
              <TextField
                fullWidth
                label="Referral Code"
                name="referralCode"
                value={referralCode}
              />
            </Grid>
            <Grid
              item
              xs={6}
            >
              <Button
                aria-label="copy invitation link to clipboard"
                size="small"
                sx={{ ml: 2 }}
                onClick={() => navigator.clipboard.writeText(invitationUrl)}
                startIcon={<ContentCopyIcon/>}
              >
                Copy Invitation Link to Clipboard
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};
