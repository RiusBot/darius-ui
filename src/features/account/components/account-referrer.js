import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase'
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
  Typography
} from '@mui/material';
import { TelegramBindingDialog } from '@/features/account/components/telegram-binding-dialog';
import { getUserProfileFromFirebase, getUserTelegram } from '@/common/selectors';
import { loadUserTelegram } from '@/app/app-slice';
import { updateUserProfile } from '@/app/app-slice';

export const AccountReferrer = (props) => {
  const dispatch = useDispatch();
  const { profile } = props;
  const firebase = useFirebase();
  const originalProfile = useSelector(getUserProfileFromFirebase);
  const telegram = useSelector(getUserTelegram);
  const [newProfile, setProfile] = useState({...originalProfile, referrer: profile.referrer});
  const [showTelegramDialog, setDialog] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === 'telegram') return;
    setProfile({
      ...newProfile,
      [event.target.name]: event.target.value
    });
  };

  const saveUpdate = () => {
    const { displayName, referrer } = newProfile;
    if (referrer !== profile.referrer) {
      dispatch(updateUserProfile({username: displayName, referrer: referrer}));
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        noValidate
        {...props}
      >
        <Card>
          <CardHeader
            subheader="You can bind other user's referral code if you dont have one."
            title="Referrer"
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
                  sx={{margin: '0px 0 0 0'}}
                  fullWidth
                  label="Referrer"
                  name="referrer"
                  onChange={handleChange}
                  disabled={profile.referrer !== null}
                  value={newProfile.referrer}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button
              color="primary"
              variant="contained"
              disabled={newProfile.referrer == profile.referrer}
              onClick={() => saveUpdate()}
            >
              Save
            </Button>
          </Box>
        </Card>
      </form>
    </>
  );
};
