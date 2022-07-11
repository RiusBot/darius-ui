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

export const AccountProfileDetails = (props) => {
  const dispatch = useDispatch();
  const { profile } = props;
  const firebase = useFirebase();
  const originalProfile = useSelector(getUserProfileFromFirebase);
  const telegram = useSelector(getUserTelegram);
  useEffect (() => {
    if (telegram === null) {
      dispatch(loadUserTelegram());
    }
    },[]
  );
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
    if (displayName !== originalProfile.displayName) {
      firebase.updateProfile({ displayName });
    }
    if (displayName !== profile.user_name) {
      // TODO: api call failing
      dispatch(updateUserProfile({username: displayName, referrer: referrer}));
    }
  };

  const TelegramInfo = () => {
    if (telegram == "" || telegram == null) {
      return (
        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 3, width: '100%' }}
          onClick={() => setDialog(true)}
          startIcon={
            <Avatar
              alt={'Telegram'}
              src={'/static/images/tutorial/telegram.png'}
              sx={{
                height: 32,
                width: 32
              }}
            />}
        >
          Bind Your Telegram Account
        </Button>
      )
    } else {
      return (
        <TextField
          sx={{margin: '32px 0 0 0'}}
          fullWidth
          label="Telegram"
          name="telegram"
          onChange={handleChange}
          disabled
          value={telegram}
          variant="outlined"
        />
      )
    }
  }

  return (
    <>
      <form
        autoComplete="off"
        noValidate
        {...props}
      >
        <Card>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
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
                  label="Username"
                  name="displayName"
                  onChange={handleChange}
                  required
                  value={newProfile.displayName}
                  variant="outlined"
                />
                <TelegramInfo />
                <TextField
                  sx={{margin: '32px 0 0 0'}}
                  fullWidth
                  label="Role"
                  name="role"
                  disabled
                  value={profile.role == null ? "" : profile.role.toUpperCase()}
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
              disabled={newProfile.displayName == originalProfile.displayName 
                        && newProfile.referrer == profile.referrer}
              onClick={() => saveUpdate()}
            >
              Save
            </Button>
          </Box>
        </Card>
      </form>
      <TelegramBindingDialog
      open={showTelegramDialog}
      onClose={() => setDialog(false)}
      />
    </>
  );
};
