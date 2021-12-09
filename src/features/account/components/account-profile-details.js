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
  TextField
} from '@mui/material';
import { getUserProfile } from '@/common/selectors';

export const AccountProfileDetails = (props) => {
  const firebase = useFirebase()
  const originalProfile = useSelector(getUserProfile);
  const [profile, setProfile] = useState(originalProfile);

  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  };

  const updateUserProfile = () => {
    const { displayName, email } = profile
    return firebase.updateProfile({ displayName, email })
  };

  return (
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
                value={profile.displayName}
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
  );
};
