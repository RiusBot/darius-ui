import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card,
         CardContent,
         CardHeader,
         Grid,
         TextField,
         Box,
         Divider,
         Button,
         Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { loadUserReferral, updateUserReferral } from '@/features/referral/referral-slice';
import { getUserReferral } from '@/features/referral/referral-selector';


export const UserReferral = (props) => {
    const { referralInfo } = props;
    const referralCode = referralInfo.referral_code;
    const invitationUrl = `https://riusbot.com/login?referrer=${referralCode}`;
    const referrerCode = referralInfo.referrer_code;
    const [newReferralInfo, setReferralInfo] = useState({...referralInfo});

    useEffect (() => {
      setReferralInfo(referralInfo);
      },[referralInfo]
    );

    const handleChange = (event) => {
      if (event.target.name != "referral_rebate_rate" && event.target.name != "referrer_rebate_rate") return;
      const rebateRate = referralInfo.rebate_rate * 100;
      const another = event.target.name == "referral_rebate_rate" ? "referrer_rebate_rate" : "referral_rebate_rate";
      const value = Math.min(Math.max(event.target.value, 0), rebateRate);
      const anotherValue = rebateRate - value;

      setReferralInfo({
        ...newReferralInfo,
        [event.target.name]: Number.isNaN(value) ? 0 : value,
        [another]: Number.isNaN(anotherValue) ? 0 : anotherValue
      });
    };

    const saveUpdate = () => {
      if (newReferralInfo.referrer_rebate_rate != referralInfo.referrer_rebate_rate || newReferralInfo.referral_rebate_rate != referralInfo.referral_rebate_rate) {
        dispatch(updateUserReferral({
          referrer_rebate_rate: newReferralInfo.referrer_rebate_rate,
          referral_rebate_rate: newReferralInfo.referral_rebate_rate
        }));
      }
    };

    return (
    <form
      autoComplete="off"
      noValidate
    >
      <Card sx={{marginTop: '0px', height: 450, overflowX: 'scroll'}}>
        <CardHeader
          title="邀請好友"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={4.5}
            >
              <TextField
                fullWidth
                name="referrer_rebate_rate"
                label="我的返傭 %"
                onChange={handleChange}
                value={newReferralInfo.referrer_rebate_rate == null ? "" : newReferralInfo.referrer_rebate_rate}
              />
            </Grid>
            <Grid
              item
              xs={4.5}
            >
              <TextField
                fullWidth
                name="referral_rebate_rate"
                label="好友返傭 %"
                onChange={handleChange}
                value={newReferralInfo.referral_rebate_rate == null ? "" : newReferralInfo.referral_rebate_rate}
              />
            </Grid>
            <Grid
              item
              xs={3}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => saveUpdate()}
                sx={{height: 55}}
              >
                Save & Update
              </Button>
            </Grid>
          </Grid>
          <br/>
          <Divider />
          <br/>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={9}
            >
              <TextField
                fullWidth
                name="invitationUrl"
                label="邀請連結"
                value={invitationUrl}
                disabled
              >
              </TextField>
            </Grid>
            <Grid
              item
              xs={2}
            >
              <Button
                aria-label="copy invitation link to clipboard"
                size="normal"
                sx={{ ml: 2 }}
                onClick={() => navigator.clipboard.writeText(invitationUrl)}
                startIcon={<ContentCopyIcon/>}
              >
                Copy
              </Button>
            </Grid>
            <Grid
              item
              xs={9}
            >
              <TextField
                fullWidth
                name="referralCode"
                label="邀請碼"
                disabled={true}
                value={referralCode == null ? "" : referralCode}
              />
            </Grid>
            <Grid
              item
              xs={2}
            >
              <Button
                aria-label="copy invitation link to clipboard"
                size="normal"
                sx={{ ml: 2 }}
                onClick={() => navigator.clipboard.writeText(referralCode)}
                startIcon={<ContentCopyIcon/>}
              >
                Copy
              </Button>
            </Grid>
            <Grid
              item
              xs={9}
            >
              <TextField
                fullWidth
                name="referrerCode"
                label="你的邀請人"
                disabled={true}
                value={referrerCode == null ? " " : referrerCode}
              />
            </Grid>
            <Grid
              item
              xs={4}
            />
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};
