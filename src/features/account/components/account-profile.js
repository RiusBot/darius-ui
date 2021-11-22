import { useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { getUserInfo } from '@/common/selectors';

const user = {
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

export const AccountProfile = (props) => {
  const userInfo = useSelector(getUserInfo);
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
          >
            <SmartToyIcon />
          </Avatar>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {userInfo.userName}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  )
};
