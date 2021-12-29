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
      {Object.keys(subscriptions).map((bot, id) => (
        <Box key={id} >
          <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: '32px'}} >
            <Avatar
              alt={bot}
              src={productMedia[bot].media}
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
                {productMedia[bot].channelDisplayName}
                </Typography>
                <Typography
                    color="rgba(0, 0, 0, 0.5)"
                    gutterBottom
                    variant="button"
                >
                Expire Date: {subscriptions[bot].expireDate}
                </Typography>
            </Box>
          </Box>

            
        </Box>
      ))}
      </>
    );
  }