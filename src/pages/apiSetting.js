import { React, useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Typography, Button } from '@mui/material';
import { Card, CardHeader, CardContent, Divider, TextField } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { DashboardLayout } from '@/common/components/dashboard-layout';

const exchanges = ['Binance', 'FTX'];

const apiSetting = () => {
  const [isAddApiReady, setAddApi] = useState(false);
  const [apiValues, setApiValues] = useState({key: '', secret: '', exchange: ''});

  const handleChange = (event) => {
    setApiValues({
      ...apiValues,
      [event.target.name]: event.target.value
    });
    console.log(apiValues);
  };

  const checkValuesValid = (field) => {
    switch (field) {
        case 'key':
        case 'secret':
          return (apiValues[field] !== undefined && apiValues[field].length != 0);
        case 'exchange':
          return (apiValues[field] == 'binance' || apiValues[field] == 'ftx');
    }
  }

  useEffect(() => {
    function checkValuesReady() {
      for (let i = 0; i < Object.keys(apiValues).length; i ++) {
        if (!checkValuesValid(Object.keys(apiValues)[i])) {
            return false;
        }
      }
      return true;
    }
    const isApiReady = checkValuesReady();
    setAddApi(isApiReady)
  }, [apiValues])

  return (
    <>
      <Head>
        <title>
          API Key Setting
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4
        }}
      >
        <Container maxWidth={false}>
        <Card>
          <CardHeader
            subheader="Each user can set at most 3 API keys at a time."
            title="Current API Keys"
          />
          <Divider />
          <CardContent>
            <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
                >
                Please fill out the following form to add an API key.
            </Typography>
            <FormControl fullWidth>
                <InputLabel >Exchange</InputLabel>
                <Select
                    name="exchange"
                    id="exchange"
                    value={apiValues.exchange}
                    label="exchange"
                    onChange={handleChange}
                >
                    {exchanges.map((exchange, idx) => (
                        <MenuItem key={idx} value={exchange.toLowerCase()}>{exchange}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
              fullWidth
              label="API key"
              margin="normal"
              name="key"
              onChange={handleChange}
              value={apiValues.key}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Secret"
              margin="normal"
              name="secret"
              onChange={handleChange}
              value={apiValues.secret}
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
              color="primary"
              variant="contained"
              disabled={!isAddApiReady}
            >
              Add API Key
            </Button>
          </Box>
        </Card>
        </Container>
      </Box>
    </>
  );
};
apiSetting.getLayout = (page) => (
  <DashboardLayout
    pageName="Api Key Setting"
  >
    {page}
  </DashboardLayout>
);

export default apiSetting;
