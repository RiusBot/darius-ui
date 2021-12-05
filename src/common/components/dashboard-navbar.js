import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from '@/common/components/account-menu';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

const Title = styled(Typography)`
  margin-left: 16px;
`;

const Subtitle = styled.span`
  &::before {
    content: ' ． ';
  }
`;

export const DashboardNavbar = (props) => {
  const { title, subtitle, onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          },
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
            backgroundImage: 'linear-gradient(#111827, #154360)'
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Title
            variant="h6"
          >
            {title}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </Title>
          <Box sx={{ flexGrow: 1 }} />
          <AccountMenu/>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onSidebarOpen: PropTypes.func
};
