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


export const UserReferralStats = (props) => {
    const dispatch = useDispatch();
    const { referralInfo } = props;

    return (
      <Card sx={{marginTop: '0px', height: 450}}>
        <CardHeader
          title="收益總覽"
        />
        <Divider />
        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 8 }}>
              <Grid item xs={1} sm={3} md={4}>
                <CardHeader
                  title={referralInfo.total_rebate == null ? 0 : referralInfo.total_rebate}
                  subheader="推薦獎金"
                  titleTypographyProps={{ variant:'h3' }}
                />
              </Grid>
              <Grid item xs={1} sm={3} md={4}>
                <CardHeader
                  title={referralInfo.register_count == null ? 0 : referralInfo.register_count}
                  subheader="邀請人數"
                  titleTypographyProps={{ variant:'h3' }}
                />
              </Grid>
              <Grid item xs={1} sm={3} md={4}>
                <CardHeader
                  title={referralInfo.bot_count == null ? 0 : referralInfo.bot_count}
                  subheader="交易人數"
                  titleTypographyProps={{ variant:'h3' }}
                />
              </Grid>
              <Grid item xs={1} sm={3} md={4}>
                <CardHeader
                  title={referralInfo.subscribe_count == null ? 0 : referralInfo.subscribe_count}
                  subheader="訂閱人數"
                  titleTypographyProps={{ variant:'h3' }}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
  );
};
