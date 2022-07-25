import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Link,
  ListItem,
  ListItemText,
  ListItemIcon,
  List
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ForwardIcon from '@mui/icons-material/Forward';
import WarningIcon from '@mui/icons-material/Warning';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import useWindowDimensions from '@/common/utils/use-window-dimensions';

export const FreeCredit = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  return (
    <>
      <Card sx={{ height: '100%', overflowX: 'scroll' }} id="vip">
        <CardHeader
          title="✮✢❂✶✧  RiusBot VIP  ✮✢❂✶✧"
          subheader="Premium Plan"
          id="vip"
          titleTypographyProps={{variant:'h5', color:'orange'}}
        />
        <Divider />
        <CardContent>
          <Box sx={{ padding: width > 400 ? '0px 32px' : '0' }} >
            <List sx={{ listStyleType: 'disc' }}>
              <Typography variant="h6" >
                What's the deal?
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary"/>
                </ListItemIcon>
                <Typography variant="h7">Register exchange with RiusBot invitation code to become <b>VIP</b> !</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary"/>
                </ListItemIcon>
                  <Typography variant="h7">VIP can run any bot and enjoy all advance feature on RiusBot</Typography>
              </ListItem>
            </List>

            <List sx={{ listStyleType: 'disc' }}>
              <Typography variant="h6" sx={{ paddingTop: '16px' }}>
                How to Apply?
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <LooksOneIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Register with RiusBot invitation code" />
              </ListItem>
              <Link href="https://ftx.com/referrals#a=riusbot" underline="none" target="_blank">
                <Button
                  aria-label="ftx"
                  variant="text"
                  size="small"
                  sx={{ ml: 10 }}
                  startIcon={<ForwardIcon/>}
                >
                  https://ftx.com/referrals#a=riusbot
                </Button>
              </Link>
              <br />
              <Link href="https://www.okx.com/join/19793639" underline="none" target="_blank">
                <Button
                  aria-label="okx"
                  variant="text"
                  size="small"
                  sx={{ ml: 10 }}
                  startIcon={<ForwardIcon/>}
                >
                  https://www.okx.com/join/19793639
                </Button>
              </Link>
              <br />
              <Link href="https://accounts.binance.com/zh-TW/register?ref=GG6RBDDS" underline="none" target="_blank">
                <Button
                  aria-label="binance"
                  variant="text"
                  size="small"
                  sx={{ ml: 10 }}
                  startIcon={<ForwardIcon/>}
                >
                  https://accounts.binance.com/zh-TW/register?ref=GG6RBDDS
                </Button>
              </Link>
              <br />
              <Link href="https://www.kucoin.com/r/af/QBSSSZJP" underline="none" target="_blank">
                <Button
                  aria-label="kucoin"
                  variant="text"
                  size="small"
                  sx={{ ml: 10 }}
                  startIcon={<ForwardIcon/>}
                >
                  https://www.kucoin.com/r/af/QBSSSZJP
                </Button>
              </Link>
              <br/>
              <ListItem>
                <ListItemIcon>
                  <LooksTwoIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Bind the API KEY & Start the Bot on RiusBot" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Looks3Icon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Fill out the application form below and the free credit will be send after verification" />
              </ListItem>
              <br />
              <Link href="https://forms.gle/cYgGdR5xb7KBS3zA8" underline="none" target="_blank" >
                <Button
                  aria-label="credit"
                  size="small"
                  sx={{ ml: 10 }}
                  startIcon={<ForwardIcon/>}
                >
                  Apply Now
                </Button>
              </Link>
            </List>
            
            <List sx={{ listStyleType: 'disc' }}>
              <Typography variant="h6" sx={{ paddingTop: '16px' }}>
                NOTE
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <WarningIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Please check out the detailed instructions and F&Q at the bottom of the application form" />
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
