import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DashboardNavbar } from '@/common/components/dashboard-navbar';
import { DashboardSidebar } from '@/common/components/dashboard-sidebar';

export const DashboardLayout = (props) => {
  const { children, pageName } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    paddingLeft: isSidebarOpen ? 280 : 0,
  }));

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar title="RiusBot" subtitle={pageName} isSidebarOpen={isSidebarOpen} onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};
