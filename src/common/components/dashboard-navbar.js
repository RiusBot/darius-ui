import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import styled from '@emotion/styled';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CircularProgress from '@mui/material/CircularProgress';
import AccountMenu from '@/common/components/account-menu';
import LockIcon from '@mui/icons-material/Lock';
import { UserAdd as UserAddIcon } from '@/icons/user-add';
import { NavItem } from '@/common/components/nav-item';
import { getAuthUser } from '@/common/selectors';

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

const RightMenu = styled(Box)`
  right: 0;
  position: absolute;
  margin-right: 30px;
  display: flex;
  justify-content: row;
  align-items: center;
`;

export const DashboardNavbar = (props) => {
  const { title, subtitle, isSidebarOpen, onSidebarOpen, ...other } = props;
  const auth = useSelector(getAuthUser);

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: isSidebarOpen ? 280 : 0,
          width: isSidebarOpen ? 'calc(100% - 280px)' : '100%'
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
              display: isSidebarOpen ? 'none' : 'inline-flex',
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
          <RightMenu>
            {
              !isLoaded(auth)
              ? <CircularProgress />
              : isEmpty(auth)
                ? <>
                    <NavItem href='/login' title='Login' icon={<LockIcon fontSize="small" />} />
                  </>
                :<AccountMenu/>
            }
          </RightMenu>
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
