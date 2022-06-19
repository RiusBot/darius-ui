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


export const UserReferralRule = () => {

    return (
      <Card sx={{marginTop: '0px'}}>
        <CardHeader
          title="推薦計畫規則"
        />
        <Divider />
        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" gutterBottom>
              1. 邀請新用戶來賺取推薦獎金，推薦獎金 = 好友每筆訂閱費 ✕ 返傭比例
            </Typography>
            <Typography variant="h6" component="div" gutterBottom>
              2. 推薦獎金可申請轉化為訂閱額度，或是申請提領，提領最低限額100Ｕ
            </Typography>
          </Box>
        </CardContent>
      </Card>
  );
};
