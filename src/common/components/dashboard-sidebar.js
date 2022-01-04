import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { isEmpty } from 'react-redux-firebase'
import { IconButton, Button, Link } from '@mui/material';
import { Box, Divider, Drawer, Typography, useMediaQuery, Avatar} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import KeyIcon from '@mui/icons-material/Key';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { NavItem } from '@/common/components/nav-item';
import { getUserProfile } from '@/common/selectors';

const items = [
  {
    href: '/',
    icon: (<LightbulbIcon fontSize="small" />),
    title: 'Tutorial'
  },
  {
    href: '/products',
    icon: (<SmartToyIcon fontSize="small" />),
    title: 'Products'
  },
  {
    href: '/dashboard',
    icon: (<BarChartIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/apiSetting',
    icon: (<KeyIcon fontSize="small" />),
    title: 'API Key Setting'
  },
  // {
  //   href: '/subscription',
  //   icon: (<PlaylistAddCheckIcon fontSize="small" />),
  //   title: 'Subscription & Plans'
  // },
  // {
  //   href: '/transaction',
  //   icon: (<AttachMoneyIcon fontSize="small" />),
  //   title: 'Transaction & Payment'
  // },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const profile = useSelector(getUserProfile);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open && !lgUp) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {isEmpty(profile)
        && <Box sx={{ p: 3, display: 'flex', flexDirection: 'row' }}>
          <Avatar
            sx={{
              height: 40,
              width: 40,
            }}
          >
            <SmartToyIcon />
          </Avatar>
          <IconButton sx={{marginLeft: 'auto'}} onClick={onClose}>
            <ChevronLeftIcon
              sx={{
                height: 40,
                width: 40
              }}/>
          </IconButton>
        </Box>}
        {!isEmpty(profile)
         && <div>
          <Box sx={{ p: 3, display: 'flex', flexDirection: 'row' }}>
            <Avatar
              sx={{
                height: 40,
                width: 40,
              }}
              src={profile.avatarUrl}
            />
            <IconButton sx={{marginLeft: 'auto'}} onClick={onClose}>
              <ChevronLeftIcon
                sx={{
                  height: 40,
                  width: 40
                }}/>
            </IconButton>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  {profile.displayName}
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Your tier
                  {' '}
                  : Premium
                </Typography>
              </div>
            </Box>
          </Box>
        </div>}

        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider
          sx={{
            borderColor: '#2D3748',
          }}
        />
        <Box sx={{ margin: '16px auto',  }}>
          <Link href="mailto:bb04902103@gmail.com" color="inherit" rel="noreferrer" target="_blank">
            <EmailIcon sx={{ fontSize: 30 }} />
          </Link>
          &nbsp;&nbsp;
          <Link href="https://t.me/OrderBotFQ" color="inherit" rel="noreferrer" target="_blank">
            <TelegramIcon sx={{ fontSize: 30 }} />
          </Link>
          &nbsp;&nbsp;
          <Link href="" color="inherit" rel="noreferrer">
            <GitHubIcon sx={{ fontSize: 30 }} />
          </Link>
          &nbsp;&nbsp;
          <Link href="" color="inherit" rel="noreferrer">
            <FacebookIcon sx={{ fontSize: 30 }} />
          </Link>
          &nbsp;&nbsp;
          <Link href="" color="inherit" rel="noreferrer">
            <TwitterIcon sx={{ fontSize: 30 }} />
          </Link>
          &nbsp;&nbsp;
          <Link href="https://zircon-lemonade-940.notion.site/Auto-Order-Bot-6c0666ad394f4855923f8c05f73bdae8" color="inherit" rel="noreferrer" target="_blank">
            <MenuBookIcon sx={{ fontSize: 30 }} />
          </Link>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="persistent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
