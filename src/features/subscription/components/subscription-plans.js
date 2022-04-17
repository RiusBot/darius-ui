import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
  Avatar
} from '@mui/material';
import { productMedia } from '__data__/products';
import { createUserSubscription } from '@/features/subscription/subscription-slice';
import { updateSnackbar } from '@/app/app-slice';

const SubscriptionPlans = (props) => {
  const dispatch = useDispatch();
  const { plans, profile } = props;
  const [planChannel, setChannel] = useState('');
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
    if (profile.balance >= price) {
      dispatch(createUserSubscription(parseInt(checked)));
    } else {
      dispatch(updateSnackbar({ type: 'info', msg: 'Balance not enough. Head to the Transaction & Payment page to increase your balance.' }));
    }
  }

  const SignalOptions = () => {
    if (selectablePlans.length == 0) return (<></>);

    return (
      <Box sx={{display: 'flex', flexDirection: 'column', paddingTop: '32px'}}>
        {Object.keys(selectablePlans).map((channel, idx) => (
          <Box key={idx} sx={{display: 'flex', flexDirection: 'row', height: '64px', margin: '8px'}}>
            <Button 
              variant={(planChannel === channel)? 'outlined' : 'text'}
              onClick={() => setChannel(channel)}
              >
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
            </Button>

            {Object.values(selectablePlans[channel]).map((plan, index) => (
              <FormControlLabel
                key={index}
                sx={{padding: '0 32px'}}
                control={<Checkbox 
                          id={(plan.plan_id).toString()}
                          disabled={planChannel !== channel}
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
          Subscribe to new channels one at a time. Subscribe same channel will expand expiration date.
        </Typography>
        <SignalOptions />
      </CardContent>
      <Divider />
      <Box sx={{padding: '16px 32px 0'}} >
        <Typography
          color="textPrimary"
          variant="h6"
        >
          Subscribe and Pay from Current Balance
        </Typography>
        <Typography
          color="textSecondary"
          variant="h7"
        >
          Current Balance: $ {profile.balance} USD
        </Typography>
      </Box>
      <Box sx={{padding: '16px 32px 0'}} >
        <Typography
          color="textPrimary"
          variant="h6"
        >
          Selected Service Fee: $ {price} USD.
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
