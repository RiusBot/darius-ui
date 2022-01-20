import { useState } from 'react';
import { useSelector } from 'react-redux';
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
  Avatar
} from '@mui/material';
import { TelegramBindingDialog } from '@/features/account/components/telegram-binding-dialog';
import { getUserProfileFromFirebase, getUserTelegram } from '@/common/selectors';

export const AccountProfileDetails = (props) => {
  const { profile } = props;
  const firebase = useFirebase()
  const originalProfile = useSelector(getUserProfileFromFirebase);
  const telegram = useSelector(getUserTelegram);
  const [newProfile, setProfile] = useState(originalProfile);
  const [showTelegramDialog, setDialog] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === 'telegram') return;
    if (profile.referrer !== null && event.target.name === 'referrer') return;
    setProfile({
      ...newProfile,
      [event.target.name]: event.target.value
    });
  };

  const updateUserProfile = () => {
    const { displayName, email } = newProfile
    return firebase.updateProfile({ displayName, email })
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
                <TextField
                  sx={{margin: '32px 0 0 0'}}
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  required
                  value={newProfile.email}
                  variant="outlined"
                />
                <TelegramInfo />
                <TextField
                  sx={{margin: '32px 0 0 0'}}
                  fullWidth
                  label="Referrer"
                  name="referrer"
                  onChange={handleChange}
                  disabled
                  value={profile.referrer}
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
              onClick={updateUserProfile}
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
