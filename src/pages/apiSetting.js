import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';;
import Head from 'next/head';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import { Card, CardHeader, CardContent, Divider, TextField } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { deleteUserBot } from '@/features/dashboard/dashboard-slice';
import { getUserApi } from '@/features/api/api-slice';
import { getUserApiFromState } from '@/features/api/api-selector';
import { createUserApi, deleteUserApi } from '@/features/api/api-slice';
import { getAuthUser } from '@/common/selectors';


const exchanges = ['Binance', 'FTX'];

const apiSetting = () => {
  const auth = useSelector(getAuthUser)
  const dispatch = useDispatch();
  const [isApiCreateReady, setApiCreate] = useState(false);
  const [apiValues, setApiValues] = useState({key: '', secret: '', exchange: '', subaccount: ''});

  useEffect (() => {
    dispatch(getUserApi({userId: auth.uid, subaccount: "test-1"}));
    },[]
  );
  const userApi = useSelector(getUserApiFromState);

  const handleChange = (event) => {
    setApiValues({
      ...apiValues,
      [event.target.name]: event.target.value
    });
  };

  const checkValuesValid = (field) => {
    switch (field) {
        case 'key':
        case 'secret':
          return (apiValues[field].length != 0);
        case 'exchange':
          return (apiValues[field] == 'binance' || apiValues[field] == 'ftx');
        case 'subaccount':
          if (apiValues.exchange == 'ftx') {
            return (apiValues[field].length != 0);
          } else {
            return true;
          }
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
    setApiCreate(isApiReady)
  }, [apiValues])

  const clearFormData = () => {
    setApiValues({key: '', secret: '', exchange: '', subaccount: ''});
  }

  const createButtonClicked = () => {
        const createApiInfo = {userId: auth.uid,
                               api: apiValues
                               };
        dispatch(createUserApi(createApiInfo));
        clearFormData();
    }

  const deleteApi = (apiId) => {
    //TODO: confirm dialog
    console.log(apiId);
    dispatch(deleteUserApi({userId: auth.uid,
                            apiId: apiId}));
  } 

  const CurrentApiList = () => {
    if (Object.keys(userApi).length == 0) {
      return (<></>);
    } 
    return (
      <>
      {Object.values(userApi).map((api, id) => (
        <Box key={id} >
          <Box sx={{display: 'flex', flexDirection: 'row'}} >
            <IconButton
              onClick={deleteApi(api.api_id)}
              color="error"
            >
                <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography
              sx={{marginLeft: '32px', marginTop: 'auto'}}
              color="textPrimary"
              gutterBottom
              variant="h6"
              >
              {api.api_key}
            </Typography>
          </Box>

          <Typography
            sx={{marginLeft: '72px'}}
            color="textPrimary"
            gutterBottom
            variant="button"
            >
            Exchange: {api.exchange}
          </Typography>

          <Typography
            sx={{display: (api.exchange == 'ftx') ? 'flex' : 'none',
                 marginLeft: '72px'}}
            color="textPrimary"
            gutterBottom
            variant="button"
            >
            Subaccount: {api.subaccount}
          </Typography>
        </Box>
      ))}
      </>
    );
  }

  const AddApiForm = () => {
    if (Object.keys(userApi).length == 3) {
      return (<></>);
    }
    return (<>
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
              sx={{display: (apiValues.exchange == 'ftx') ? 'flex' : 'none'}}
              fullWidth
              label="Subaccount"
              margin="normal"
              name="subaccount"
              onChange={handleChange}
              value={apiValues.subaccount}
              variant="outlined"
            />
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
            disabled={!isApiCreateReady}
            onClick={createButtonClicked}
          >
            Add API Key
          </Button>
        </Box>
      </>
    );
  }

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
            subheader="Each user is allowed to set at most 3 API keys at a time."
            title="Current API Keys"
          />
          <Box sx={{padding: '0 32px 32px'}} >
            <CurrentApiList/>
          </Box>
          <Divider />
          <AddApiForm/>
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
