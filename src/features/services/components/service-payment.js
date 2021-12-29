import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography
} from '@mui/material';

const ServicePayment = (props) => {
  const [values, setValues] = useState({
    password: '',
    address: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="The total service fee is $50 USDC for a month."
          title="Payment"
        />
        <Divider />
        <CardContent>
            <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
                >
                Please enter the wallet address used for payment and click "Confirm".
            </Typography>
          <TextField
            fullWidth
            label="Wallet Address"
            margin="normal"
            name="address"
            onChange={handleChange}
            type="password"
            value={values.address}
            variant="outlined"
          />
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
            Confirm
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default ServicePayment;
