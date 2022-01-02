import { Box, Avatar, Typography } from '@mui/material';
import { productMedia } from '__data__/products';

export const ServiceCurrentSubscription = (props) => {
    const { subscriptions } = props;

    if (Object.keys(subscriptions).length == 0) {
      return (
        <>
          <Typography 
              color="textSecondary"
              variant="button"
              sx={{ textAlign: 'center', width: '100%'}}>
              You have no subscriptions currently, start one by selecting one of the plans below now!
          </Typography>
        </>
      );
    } 
    return (
      <>
      {subscriptions.map((sub, id) => (
        <Box key={id} >
          <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: '32px'}} >
            <Avatar
              alt={sub.plan.channel}
              src={productMedia[sub.plan.channel].media}
              sx={{
                display: 'flex',
                height: 64,
                width: 64
              }}
            />
            <Box sx={{margin: 'auto 32px'}}>
                <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                >
                {productMedia[sub.plan.channel].channelDisplayName}
                </Typography>
                <Typography
                    color="rgba(0, 0, 0, 0.5)"
                    gutterBottom
                    variant="button"
                >
                Expire Date: {sub.expire_date}
                </Typography>
            </Box>
          </Box>

            
        </Box>
      ))}
      </>
    );
  }