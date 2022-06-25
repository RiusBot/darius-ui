import Head from 'next/head';
import { useRouter } from 'next/router';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Typography } from '@mui/material';
import { DashboardLayout } from '@/common/components/dashboard-layout';


const Home = () => {
  const router = useRouter();
  
  const redirect = (ref) =>{
    router.push(ref);
  }

  return (
    <>
      <Head>
        <title>
          HOME | RiusBot
        </title>
      </Head>
      <Box
        component="main"
        sx={{backgroundImage: "radial-gradient(#154360, #111827)", 
             height: '500px', 
             width: '100%',
             display: 'flex',
             flexDirection: 'row'}}
      >
        <Box sx={{width: '50%', height: '100%'}}> 
          <Typography 
            color="white"
            variant="h3"
            sx={{ paddingLeft: '20%', paddingTop: '20%', textAlign: 'left', width: '100%'}}>
            Discover New <br/>Possibilities
          </Typography>
          <Typography 
            color="white"
            variant="h5"
            sx={{ paddingLeft: '20%', paddingTop: '2%', textAlign: 'left', width: '100%'}}>
            Try yourself. Subscribe now.
          </Typography>
        </Box>

        <img
          alt="Trading Bot"
          src="/static/images/trading-bot.png"
          style={{
              display: 'inline-block',
              width: '50%',
              height: '80%',
              margin: '32px',
          }}
        />
      </Box>
      <Box
          sx={{backgroundImage: "linear-gradient(#A8B6C4, #E2E5EE)", 
              height: '550px', 
              width: '100%',
              paddingLeft: '64px',
              display: 'flex',
              flexDirection: 'row'}}
      >
        <img
          alt="WhaleHunting"
          src="/static/images/index/products-1.png"
          style={{
              display: 'inline-block',
              width: '40%',
              height: '80%',
              margin: '64px 16px',
              borderRadius: '5%',
              boxShadow: '8px 8px 5px #616E84'
          }}
        />
        <img
          alt="Vegas"
          src="/static/images/index/products-2.png"
          style={{
              display: 'inline-block',
              width: '40%',
              height: '80%',
              margin: '64px 16px',
              borderRadius: '5%',
              boxShadow: '8px 8px 5px #616E84'
          }}
        />
        <img
          alt="CTA"
          src="/static/images/index/products-3.png"
          style={{
              display: 'inline-block',
              width: '40%',
              height: '80%',
              margin: '64px 16px',
              borderRadius: '5%',
              boxShadow: '8px 8px 5px #616E84'
          }}
        />
        <Box sx={{width: '50%'}}
        >
          <Typography 
            color="textPrimary"
            variant="h4"
            sx={{ paddingLeft: '32px',
                  paddingTop: '64px',
                  textAlign: 'Left'}}>
            Products
          </Typography>
          <Typography 
            color="textPrimary"
            variant="h5"
            sx={{ paddingLeft: '32px', paddingTop: '2%', textAlign: 'left', width: '100%'}}>
            Detailed performance report & chart visualization. <br/><br/>
            Explore more signals and introduction in the products page.
          </Typography>
        </Box>
      </Box>

      <Box
          sx={{backgroundImage: "linear-gradient(to bottom right, #5B46A2, #25406F, #1C3258, #163F6C, #16768D);", 
              height: '1000px', 
              width: '100%'}}
      >
        <Typography 
          color="white"
          variant="h4"
          sx={{ paddingLeft: '10%',
                paddingTop: '64px',
                textAlign: 'Left'}}>
          Features
        </Typography>
        <Box 
          sx={{width: '100%',
              padding: '64px 10%',
              display: 'flex',
              flexDirection: 'row'}}
        >
          <Box sx={{
                    width: '30%',}}>
            <EventAvailableIcon color="light" fontSize="large" />
            <Typography 
              color="white"
              variant="h5"
              sx={{ 
                    textAlign: 'Left'}}>
              Free Trial
            </Typography>
            <Typography 
              color="white"
              variant="h6"
              sx={{ paddingTop: '16px',
                    textAlign: 'Left'}}>
              All signals available.
            </Typography>
          </Box>
          <Box sx={{width: '30%',
                    paddingLeft: '16px',}}>
            <StarIcon color="light" fontSize="large" />
            <Typography 
              color="white"
              variant="h5"
              sx={{ 
                    textAlign: 'Left'}}>
              VIP Plan
            </Typography>
            <Typography 
              color="white"
              variant="h6"
              sx={{ paddingTop: '16px',
                    textAlign: 'Left'}}>
              <StarBorderIcon color="light" fontSize="medium" sx={{padding: '4px 0 -4px', marginRight: '8px'}}/>
              FTX
            </Typography>
            <Typography 
              color="white"
              variant="h6"
              sx={{ paddingTop: '16px',
                    textAlign: 'Left'}}>
              <StarBorderIcon color="light" fontSize="medium" sx={{padding: '4px 0 -4px', marginRight: '8px'}}/>
              Binance
            </Typography>
            <Typography 
              color="white"
              variant="h6"
              sx={{ paddingTop: '16px',
                    textAlign: 'Left'}}>
              <StarBorderIcon color="light" fontSize="medium" sx={{padding: '4px 0 -4px', marginRight: '8px'}}/>
              OKX
            </Typography>
            <Typography 
              color="white"
              variant="h6"
              sx={{ paddingTop: '16px',
                    textAlign: 'Left'}}>
              <StarBorderIcon color="light" fontSize="medium" sx={{padding: '4px 0 -4px', marginRight: '8px'}}/>
              AlphaShark
            </Typography>
          </Box>
          <Box sx={{width: '30%',
                    paddingLeft: '16px',}}>
            <LightbulbIcon color="light" fontSize="large" />
            <Typography 
              color="white"
              variant="h5"
              sx={{ 
                    textAlign: 'Left'}}>
              AI Optimization
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
          sx={{backgroundImage: "linear-gradient(#A8B6C4, #E2E5EE)",
              width: '100%'}}
      >
        <Typography 
          color="textPrimary"
          variant="h4"
          sx={{ paddingLeft: '10%',
                paddingTop: '64px',
                textAlign: 'Left'}}>
          Dashboard
        </Typography>
        <Box 
          sx={{width: '100%',
              padding: '64px 10%',
              display: 'flex',
              flexDirection: 'row'}}
        >
          <Box sx={{ width: '50%'}}>
            <Typography
              color="textPrimary"
              variant="h6"
              sx={{ textAlign: 'Left'}}>
              /01 <br/>
              Bot Trading History
            </Typography>
          </Box>
          <img
            alt="History"
            src="/static/images/index/dashboard-trade-history.png"
            style={{
                display: 'inline-block',
                width: '60%',
                height: '50%',
                margin: '0 48px 0 0',
                borderRadius: '2%',
                boxShadow: '8px 8px 5px #616E84'
            }}
          />
        </Box>
        <Box 
          sx={{width: '100%',
              padding: '64px 10%',
              display: 'flex',
              flexDirection: 'row'}}
        >
          <img
            alt="History"
            src="/static/images/index/dashboard-config-setting.png"
            style={{
                display: 'inline-block',
                width: '60%',
                height: '50%',
                margin: '0 48px 0 0',
                borderRadius: '2%',
                boxShadow: '8px 8px 5px #616E84'
            }}
          />
          <Box sx={{ width: '50%'}}>
            <Typography
              color="textPrimary"
              variant="h6"
              sx={{ textAlign: 'Left'}}>
              /02 <br/>
              Use AI optimized bot parameters <br/>
              or customize as much as you want.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
)};

Home.getLayout = (page) => (
  <DashboardLayout
    pageName='HOME'
  >
    {page}
  </DashboardLayout>
);

export default Home;
