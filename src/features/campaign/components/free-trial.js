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
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  ListSubheader
} from '@mui/material';
import { AccountProfile } from '@/features/account/components/account-profile';
import { AccountProfileDetails } from '@/features/account/components/account-profile-details';
import { AccountReferral } from '@/features/account/components/account-referral';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { loadUserProfile } from '@/app/app-slice';
import { getUserProfile } from '@/common/selectors';



export const FreeTrial = () => {
  const dispatch = useDispatch();
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
      <Card>
        <CardHeader
          subheader=""
          title="Free Trial Plan"
        />
        <Divider />
        <CardContent>
          <Box sx={{ padding: '0 32px 32px' }} >
            <List sx={{ listStyleType: 'disc' }}>
              <ListSubheader sx={{
                fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
              }}
              >
                Offers
              </ListSubheader>
                <ListItem sx={{ display: 'list-item' }}>
                  <ListItemText primary="Trial Period: 30 days" />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <ListItemText primary="Strategies: All products available" />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <ListItemText primary="Advance Bot features: Available" />
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <ListItemText primary="Limitations: 30U quantity ， 1x leverage" />
                </ListItem>

              <br/>
              <ListSubheader sx={{
                fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
              }}
              >
                Application
              </ListSubheader>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Free Trial Period starts after the telegram account is connected" />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => router.push("/account")}
                  position= 'relative'
                  alignItems= 'center'
                >
                  Connect Telegram Now →
                </Button>
              </ListItem>

              <br/>
              <ListSubheader sx={{
                fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
              }}
              >
                Remarks
              </ListSubheader>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="The telegram account cannot be changed once binded." />
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary="Only one API key can be used during the free trial period." />
              </ListItem>

            </List>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
