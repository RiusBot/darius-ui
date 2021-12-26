import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
  Avatar
} from '@mui/material';
import { ServiceCurrentSubscription } from '@/features/services/components/service-current-subscription';
import { products, productMedia } from '__data__/products';

const mockSubscriptions = {ROSE: {expireDate: '2021/12/12'}, 
                           WHALE: {expireDate: '2021/12/23'}};

const ServiceOptions = (props) => {
  const selectableSignals = products.filter(bot => {
    return ! (Object.keys(mockSubscriptions).includes(bot.channel));
  });

  const SignalOptions = () => {
    if (selectableSignals.length == 0) return (<></>);

    return (
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        {selectableSignals.map((signal, idx) => (
          <Box key={idx} sx={{display: 'flex', flexDirection: 'row'}}>
            <Avatar
              alt={signal.channel}
              src={productMedia[signal.channel].media}
              sx={{
                display: 'flex',
                height: 32,
                width: 32,
                margin: '8px'
              }}
            />
            <Typography
              sx={{margin: 'auto 64px auto 8px'}}
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              {signal.channelDisplayName}
            </Typography>

            <FormControlLabel
            sx={{padding: '0 32px'}}
            control={<Checkbox />}
            label="1 month"
            />
            <FormControlLabel
            sx={{padding: '0 32px'}}
            control={<Checkbox />}
            label="6 month"
            />
            <FormControlLabel
            sx={{padding: '0 32px'}}
            control={<Checkbox />}
            label="12 month (1 year)"
            />
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <>
      <Card>
        <CardHeader
          subheader="Currently subscribed services and according expire date."
          title="Current Subscribed Services"
        />
        <Box sx={{padding: '0 32px 32px'}} >
          <ServiceCurrentSubscription
            subscriptions={mockSubscriptions}
          />
        </Box>
        <Divider />
        <CardContent>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h6"
          >
            Unsubscribed Signals
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h7"
          >
            Select another service and subscription plan.
          </Typography>
          <SignalOptions />
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
            sx={{margin: '0 8px'}}
            color="primary"
            variant="contained"
          >
            See Calculated Service Fee
          </Button>
          <Button
            sx={{margin: '0 8px'}}
            color="primary"
            variant="contained"
          >
            Save and Submit
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default ServiceOptions;
