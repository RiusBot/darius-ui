import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { productMedia } from '__data__/products';
import { createUserSubscription } from '@/features/subscription/subscription-slice';

const SubscriptionPlans = (props) => {
  const dispatch = useDispatch();
  const { subscriptions, plans } = props;
  const [checked, setChecked] = useState('');
  const [price, setPrice] = useState(0);
  const selectablePlans = {};

  Object.keys(plans).filter(channel => {
    if (Object.keys(productMedia).includes(channel)) {
      selectablePlans[channel] = plans[channel];
    }
  });

  const handleCheckBox = (event) => {
    switch (event.target.checked) {
      case true:
        setChecked(event.target.id);
        setPrice(plans[event.target.name][event.target.id].price);
        break;
      case false:
        setChecked('');
        setPrice(0);
        break;
    }
  }

  const onClickSubmit = () => {
    // TODO: check fee <= balance
    dispatch(createUserSubscription(parseInt(checked)));
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
                          checked={(checked === plan.plan_id.toString())? true : false}
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
      <CardContent>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h6"
        >
          Plans
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="h7"
        >
          Subscribe to new channels one at a time.
        </Typography>
        <SignalOptions />
      </CardContent>
      <Divider />
      <Box sx={{padding: '16px 32px 0'}} >
        <Typography
          color="textPrimary"
          variant="h6"
        >
          The selected service fee is ${price} USD.
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
          disabled={checked == ''}
          onClick={onClickSubmit}
        >
          Subscribe
        </Button>
      </Box>
    </>
  );
};

export default SubscriptionPlans;
