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
  Divider,
  Grid,
  TextField,
  Avatar,
  Typography,
  Link
} from '@mui/material';

export const FreeCredit = () => {
  const router = useRouter();
  return (
    <>
      <Card>
        <CardHeader
          subheader="Earn Free Credits !!!"
          title="Rius Bot ⓧ FTX ⓧ Binance"
        />
        <Divider />
        <Box sx={{ padding: '32px 32px 32px' }} >
          <Typography 
            color="textSecondary"
            variant="button"
            sx={{ textAlign: 'center', width: '100%'}}>
            Register exchange to trade and get RiusBot 100U free credit now ! <br/>
            Experience our quantitaive trading bots for free for up to 3 month ! <br/>
          </Typography>
          <br/>
          Use the invitation code of RiusBot to register, bind the API and start the bot.<br/>
          You can get 100U free credit at Rius Bot, which is equal to 3 months of free use of a bot!<br/>
          <br/>
          
          FTX &nbsp;
          <Link href="https://ftx.com/profile#a=riusbot" underline="none">
            {'https://ftx.com/profile#a=riusbot'}
          </Link>
          <br/><br/>
          
          Binance &nbsp;
          <Link href="https://accounts.binance.com/zh-TW/register?ref=RNVL4GEG" underline="none">
            {'https://accounts.binance.com/zh-TW/register?ref=RNVL4GEG'}
          </Link>
          <br/><br/>
            
          Fill out the application form below and the free credit will be send after verification.<br/>
          ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩<br/>
          <Link href="https://forms.gle/cYgGdR5xb7KBS3zA8" underline="none">
            {'https://forms.gle/cYgGdR5xb7KBS3zA8'}
          </Link>
          <br/><br/>
          
          <Divider/><br/>
          ﹡100U trial credit can only be used in Rius Bot and cannot be withdrawn!<br/>
          ﹡Please check out the detailed instructions and F&Q at the bottom of the application form<br/>
        </Box>
      </Card>
    </>
  );
};
