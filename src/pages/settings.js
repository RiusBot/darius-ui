import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import { SettingsNotifications } from '@/features/settings/components/settings-notifications';
import { SettingsPassword } from '@/features/settings/components/settings-password';

const Settings = () => (
  <>
    <Head>
      <title>
        Settings | Darius
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
  </>
);

Settings.getLayout = (page) => (
  <DashboardLayout
    pageName='Settings'
  >
    {page}
  </DashboardLayout>
);

export default Settings;
