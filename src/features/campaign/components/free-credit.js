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

export const FreeCredit = () => {
  const router = useRouter();
  return (
    <>
      <Card sx={{ height: '100%' }} id="freecredit">
        <CardHeader
          title="Rius Bot ⓧ FTX ⓧ Binance"
          subheader="Earn Free Credits !!!"
          id="freecredit"
        />
        <Divider />
        <CardContent>
          <Box sx={{ padding: '0px 32px' }} >
            <List sx={{ listStyleType: 'disc' }}>
              <Typography variant="h6" >
                What's the deal?
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary"/>
                </ListItemIcon>
                <Typography variant="h7">Register exchange to trade and get RiusBot <b>100U FREE CREDIT</b></Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="primary"/>
                </ListItemIcon>
                  <Typography variant="h7">Experience our quantitaive trading bots up to <b>3 MONTH FOR FREE</b></Typography>
              </ListItem>
            </List>

            <List sx={{ listStyleType: 'disc' }}>
              <Typography variant="h6" sx={{ paddingTop: '16px' }}>
                How to get Free Credit?
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <LooksOneIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Use the invitation code of RiusBot to register" />
              </ListItem>
              <Link href="https://ftx.com/profile#a=riusbot" underline="none" target="_blank">
                <Button
                  aria-label="ftx"
                  variant="text"
                  size="small"
                  sx={{ ml: 10 }}
                  startIcon={<ForwardIcon/>}
                >
                  https://ftx.com/profile#a=riusbot
                </Button>
              </Link>
              <br />
              <Link href="https://accounts.binance.com/zh-TW/register?ref=RNVL4GEG" underline="none" target="_blank">
                <Button
                  aria-label="binance"
                  variant="text"
                  size="small"
                  sx={{ ml: 10 }}
                  startIcon={<ForwardIcon/>}
                >
                  https://accounts.binance.com/zh-TW/register?ref=RNVL4GEG
                </Button>
              </Link>
              <br/>
              <ListItem>
                <ListItemIcon>
                  <LooksTwoIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Bind the API & Start the Bot" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Looks3Icon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Fill out the application form below and the free credit will be send after verification" />
              </ListItem> 
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
                <ListItemText primary="100U trial credit can only be used in Rius Bot and CANNOT be withdrawn" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WarningIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="100U trial credit for each exchange" />
              </ListItem>
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
