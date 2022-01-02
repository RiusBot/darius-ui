import { useEffect, useState } from 'react';
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
import { ServiceCurrentSubscription } from '@/features/service/components/service-current-subscription';
import { productMedia } from '__data__/products';

const ServiceOptions = (props) => {
  const { subscriptions, plans } = props;
  const [checked, setChecked] = useState({'ROSE': null,  'WHALE': null, 'DAILYSCALP': null});
  const [totalPrice, setTotalPrice] = useState(0);
  const selectablePlans = {};

  useEffect(() => {
    var price = 0;
    Object.keys(checked).forEach(channel => {
      if (checked[channel] != null) {
        price += selectablePlans[channel][parseInt(checked[channel])].price;
      }
    });
    setTotalPrice(price);
  },[checked]);

  Object.keys(plans).filter(channel => {
    if (Object.keys(productMedia).includes(channel)) {
      selectablePlans[channel] = plans[channel];
    }
  });

  const handleCheckBox = (event) => {
    switch (event.target.checked) {
      case true:
        setChecked({...checked, [event.target.name]: event.target.id});
        break;
      case false:
        setChecked({...checked, [event.target.name]: null});
        break;
    }
  }

  const SignalOptions = () => {
    if (selectablePlans.length == 0) return (<></>);

    return (
      <Box sx={{display: 'flex', flexDirection: 'column', paddingTop: '32px'}}>
        {Object.keys(selectablePlans).map((channel, idx) => (
          <Box key={idx} sx={{display: 'flex', flexDirection: 'row', height: '64px'}}>
            <Avatar
              alt={channel}
              src={productMedia[channel].media}
              sx={{
                display: 'flex',
                height: 48,
                width: 48,
                margin: '8px'
              }}
            />
            <Typography
              sx={{margin: 'auto 64px auto 8px', width: '160px'}}
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              {productMedia[channel].channelDisplayName}
            </Typography>

            {Object.values(selectablePlans[channel]).map((plan, index) => (
              <FormControlLabel
                key={index}
                sx={{padding: '0 32px'}}
                control={<Checkbox 
                          id={(plan.plan_id).toString()}
                          checked={(checked[plan.channel] === plan.plan_id.toString())? true : false}
                          />}
                name={plan.channel}
                label={plan.day + " Days, $" + plan.price}
                onChange={handleCheckBox}
              />
            ))}
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
          title="Current Subscriptions"
        />
        <Box sx={{padding: '0 32px 32px'}} >
          <ServiceCurrentSubscription
            subscriptions={subscriptions}
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
            Select a new service and create a subscription plan.
          </Typography>
          <SignalOptions />
        </CardContent>
        <Divider />
        <Box sx={{padding: '16px 32px 0'}} >
          <Typography
            color="textPrimary"
            variant="h6"
          >
            The total service fee is ${totalPrice} USD.
          </Typography>
        </Box>
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
            Submit Subscription and Confirm Payment
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default ServiceOptions;
