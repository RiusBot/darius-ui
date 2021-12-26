import {
    Box,
    Avatar,
    Typography
} from '@mui/material';
import { productMedia } from '__data__/products';

export const ServiceCurrentSubscription = (props) => {
    const { subscriptions } = props;

    if (Object.keys(subscriptions).length == 0) {
      return (<></>);
    } 
    return (
      <>
      {Object.values(subscriptions).map((bot, id) => (
        <Box key={id} >
          <Box sx={{display: 'flex', flexDirection: 'row'}} >
            <Avatar
              alt={bot.channel}
              src={productMedia[bot.channel].media}
              sx={{
                display: 'flex',
                height: 64,
                width: 64
              }}
            />
            <Typography
              sx={{margin: 'auto 32px'}}
              color="textPrimary"
              gutterBottom
              variant="h6"
              >
              {productMedia[bot.channel].channelDisplayName}
            </Typography>
          </Box>

            <Typography
                sx={{marginLeft: '104px'}}
                color="rgba(0, 0, 0, 0.5)"
                gutterBottom
                variant="button"
            >
            Expire Date: {bot.expireDate}
            </Typography>
        </Box>
      ))}
      </>
    );
  }