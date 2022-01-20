import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
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
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import { createUserTransaction } from '@/features/transaction/transaction-slice';
import { getUserProfile } from '@/common/selectors';

const TransactionCreateForm = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector(getUserProfile);
  const [values, setValues] = useState({
    date: '',
    amount: '',
    txid: '',
    wallet: ''
  });
  const [createButtonDisabled, setCreateButtonDisabled] = useState(true);

  useEffect(() => {
    function isSubmitReady() {
      for (var i = 0; i < Object.keys(values).length; i ++) {
        if (Object.values(values)[i] == '') return false;
      }
      return true;
    }
    setCreateButtonDisabled(!isSubmitReady())
  }, [values]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
 
  const onClickSubmit = () => {
    dispatch(createUserTransaction(values));
  }

  return (
    <>
      <Card>
        <CardHeader
          subheader="The total amount of balance in your account."
          title="Balance"
        />
        <Typography
          sx={{padding: '0 32px 16px'}}
          color="textPrimary"
          gutterBottom
          variant="h6"
          >
          $ {profile.balance}
        </Typography>
        <Divider />
        <CardContent>
          <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
              >
              Create a new Transaction.
          </Typography>
          <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
              >
              Please enter the date, amount, and wallet address of your transaction.
          </Typography>
          <Box
            sx={{paddingTop: '32px', display: 'flex', flexDirection: 'row'}}
          >
            <LocalizationProvider 
              dateAdapter={AdapterDateFns}
            >
              <DatePicker
                label="Transaction Date"
                value={values.date}
                onChange={(newValue) => {
                  const dateStr = format(newValue, 'yyyy-MM-dd');
                  setValues({...values, date: dateStr});
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              sx={{margin: 'auto 0 auto 32px'}}
              fullWidth
              label="Transaction Amount (USD)"
              type="number"
              margin="normal"
              name="amount"
              onChange={handleChange}
              value={values.amount}
              variant="outlined"
            />
          </Box>
          <TextField
            fullWidth
            label="TXID"
            margin="normal"
            name="txid"
            inputProps={{ maxLength: 96 }}
            onChange={handleChange}
            value={values.txid}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Wallet Address"
            margin="normal"
            name="wallet"
            inputProps={{ maxLength: 96 }}
            onChange={handleChange}
            type="password"
            value={values.wallet}
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
            disabled={createButtonDisabled}
            onClick={onClickSubmit}
          >
            Create Transaction
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default TransactionCreateForm;
