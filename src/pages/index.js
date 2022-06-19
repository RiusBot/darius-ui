import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
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
      >

        <img
          alt="Trading Bot"
          src="/static/images/trading-bot.png"
          style={{
              display: 'inline-block',
              maxWidth: '100%',
              width: '100%',
              height: '100%',
              overflowY: 'hidden'
          }}
        />
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
