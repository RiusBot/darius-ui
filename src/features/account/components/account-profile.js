import { useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography
} from '@mui/material';
import { getUserProfileFromFirebase } from '@/common/selectors';

export const AccountProfile = (props) => {
  const userProfile = useSelector(getUserProfileFromFirebase);
  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
            src={userProfile.avatarUrl} 
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            {userProfile.displayName}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="subtitle1"
          >
            {userProfile.email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
};
