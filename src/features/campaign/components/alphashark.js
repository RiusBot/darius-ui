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
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
  List
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';
import ForwardIcon from '@mui/icons-material/Forward';
import LooksOneIcon from '@mui/icons-material/LooksOne';

export const AlphaShark = (props) => {
  
  const { showButton } = props;
  const router = useRouter();
  
  return (
    <>
      <Card id="alphashark">
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
          <CardMedia
            component="img"
            height="350"
            image={'/static/images/campaign/alphashark/2.png'}
            alt="AlphaShark"
          />
        </Box>
        <CardHeader
          title="Rius Bot ⓧ AlphShark"
          subheader="Check it out !!!"
          id="AlphaShark"
        />
        <Divider />
            
        <Box sx={{ padding: '0px 32px' }} >
          <List sx={{ listStyleType: 'disc' }}>
            <Typography variant="h6" >
              What's the deal?
            </Typography>
            <ListItem>
              <ListItemIcon>
                <CheckIcon color="primary"/>
              </ListItemIcon>
              <Typography variant="h7">
                AlphaShark holders get RiusBot <b>100U FREE CREDIT !!! </b>
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon color="primary"/>
              </ListItemIcon>
                <Typography variant="h7">Experience our quantitaive trading bots up to <b>3 MONTH FOR FREE</b></Typography>
            </ListItem>
          </List>

          <List sx={{ listStyleType: 'disc' }}>
            <Typography variant="h6" sx={{ paddingTop: '16px' }}>
              How to Claim ?
            </Typography>
            <ListItem>
              <ListItemIcon>
                <LooksOneIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Your telegram account has to be verified by Alpha Shark Bot @alphashark_bot" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LooksOneIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Bind your telegram account on RiusBot" />
            </ListItem>
              <Button
              aria-label="Connect Telegram Now"
              size="small"
              sx={{ ml: 10 }}
              onClick={() => router.push("/account")}
              startIcon={<ForwardIcon/>}
            >
              Bind Your Telegram Now
            </Button>
          </List>

          <List sx={{ listStyleType: 'disc' }}>
            <Typography variant="h6" sx={{ paddingTop: '0px' }}>
              NOTE
            </Typography>
            <ListItem>
              <ListItemIcon>
                <WarningIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary="The telegram account CANNOT be changed once binded" />
            </ListItem>
          </List>
        </Box>
      </Card>
    </>
  );
};
