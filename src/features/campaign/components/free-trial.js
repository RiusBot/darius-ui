import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
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
import { loadUserProfile } from '@/app/app-slice';
import { getUserProfile } from '@/common/selectors';
import useWindowDimensions from '@/common/utils/use-window-dimensions';

export const FreeTrial = () => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const router = useRouter();
  const profile = useSelector(getUserProfile);
  useEffect (() => {
    if (Object.keys(profile).length == 0) {
      dispatch(loadUserProfile());
    }
    },[]
  );

  const TrialInfo = () => {
    if (profile.is_trial && profile.trial_period !== undefined) {
      return (
            <Card sx={{ marginBottom: '32px' }}>
              <Box sx={{ padding: '16px', backgroundColor: "#B8A289" }} >
                <Typography 
                  color="#FFFFFF"
                  variant="button"
                  sx={{ textAlign: 'center', width: '100%', paddingLeft: '32px' }}>
                  Your free trial will expire on {profile.trial_period}
                  <NavItem
                            key={subscriptions.title}
                            icon={subscriptions.icon}
                            href={subscriptions.href}
                            title={subscriptions.title}
                            />
                </Typography>
              </Box>
            </Card>)
    }
    return null;
  }

  return (
    <>
      <Card sx={{ height: '100%' }} id="freetrial">
        <CardHeader
          title="Free Trial Plan"
          subheader="Try riusbot for free !!!"
        />
        <Divider />
        <CardContent>
          <Box sx={{ padding: width > 400 ? '0px 32px' : '0' }} >
            <List sx={{ listStyleType: 'disc' }}>
              <Typography variant="h6" >
                What's the deal?
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="All Bots Available" />
              </ListItem>
            </List>
            
            <List sx={{ listStyleType: 'disc' }}>
              <Typography variant="h6" sx={{ paddingTop: '16px' }}>
                How to start My Trial?
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <LooksOneIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Free Trial Period starts once you bind your exchange api key" />
              </ListItem>
              <Button
                aria-label="Bind API Now"
                size="small"
                sx={{ ml: 10 }}
                onClick={() => router.push("/api-setting")}
                startIcon={<ForwardIcon/>}
              >
                Bind API Now
              </Button>
            </List>

            <List sx={{ listStyleType: 'disc' }}>
              <Typography variant="h6" sx={{ paddingTop: '16px' }}>
                NOTE
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <WarningIcon color="primary"/>
                </ListItemIcon>
                <Typography variant="h7">Only <b>ONE</b> API key can be set during the free trial period !</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WarningIcon color="primary"/>
                </ListItemIcon>
                <Typography variant="h7">Only <b>ONE</b> trading list can be set during the free trial period !</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WarningIcon color="primary"/>
                </ListItemIcon>
                <Typography variant="h7">Only subscriber can join telegram channel !</Typography>
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
