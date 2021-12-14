import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';;
import Head from 'next/head';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Card, CardHeader, Divider, } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { ConfirmDialog } from '@/features/dashboard/components/bot-management/confirm-dialog';
import { ApiCreateForm } from '@/features/api/api-create-form';
import { getUserApi } from '@/features/api/api-slice';
import { getUserApiFromState } from '@/features/api/api-selector';
import { deleteUserApi } from '@/features/api/api-slice';

const apiSetting = () => {
  const dispatch = useDispatch();
  const [apiDeleteDialog, setApiDeleteDialog] = useState({open: false, apiId: null});

  useEffect (() => {
    dispatch(getUserApi());
    },[]
  );
  const userApi = useSelector(getUserApiFromState);

  const confirmDeleteApi = () => {
    console.log(apiDeleteDialog.apiId);
    dispatch(deleteUserApi({apiId: apiDeleteDialog.apiId}));
    setApiDeleteDialog({open: false, apiId: null});
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
              onClick={() => setApiDeleteDialog({open: true, apiId: api.api_id})}
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

  return (
    <>
      <Head>
        <title>
          API Key Setting | RiusBot
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
          <ApiCreateForm 
            display={Boolean(Object.keys(userApi).length < 3)}
          />
        </Card>
        </Container>
      </Box>
      <ConfirmDialog
        open={apiDeleteDialog.open}
        onConfirm={confirmDeleteApi}
        onClose={() => setApiDeleteDialog({open: false, apiId: null})}
        object="API"
      />
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
