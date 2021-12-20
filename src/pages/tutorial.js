import Head from 'next/head';
import { Box, Card, Typography } from '@mui/material';
import withAuth from '@/common/utils/auth';
import { DashboardLayout } from '@/common/components/dashboard-layout';

const Tutorial = () => (
  <>
    <Head>
      <title>
        Tutorial | RiusBot
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        padding: '64px'
      }}
    >
      <Card sx={{heigh: '100%', width: '100%', padding: '32px'}}> 
        <Box sx={{p:2}} >
          
          <Typography variant="h4" component="div" sx={{padding: '8px 0 16px'}}>
              簡單3步驟，開始執行策略機器人<br/>
          </Typography>

          <Typography variant="h3" component="div" sx={{padding: '8px 0 16px'}}>
              1. 註冊<br/>
          </Typography>
          <Box sx={{ textAlign: 'left' }}>
              <Typography varient="body1" componenet="div">
                  首先進入登入頁面<br/>
                  目前註冊支援兩種方式:<br/>
                  1. google帳號註冊<br/>
                  2. 信箱註冊<br/>
              </Typography>
              <img
              alt="Under development"
              src="/static/images/tutorial/register.png"
              style={{
                  display: 'inline-block',
                  maxWidth: '100%',
                  width: 760
              }}
              /><br/><br/>
              <Typography varient="body1" componenet="div">
                  信箱註冊頁面<br/>
              </Typography>
              <img
                alt="Under development"
                src="/static/images/tutorial/email_register.png"
                style={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    width: 760
                }}
              /><br/><br/>
              <Typography varient="body1" componenet="div">
                  google登入則會直接出現跳轉頁面<br/>
              </Typography>
              <img
                alt="Under development"
                src="/static/images/tutorial/google_register.png"
                style={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    width: 760
                }}
              /><br/><br/>
          </Box>


          <Typography variant="h3" component="div" sx={{padding: '8px 0 16px'}}>
              2. 綁訂交易所apikey<br/>
          </Typography>
          <img
            alt="Under development"
            src="/static/images/tutorial/api.png"
            style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 760
            }}
          /><br/><br/>
          <Typography varient="body1" componenet="div">
              1. 綁訂的api列表，目前每位用戶限制最多3組api<br/>
              2. 填入交易所apikey和api secret，目前只支援binance和ftx，子帳戶功能只支援ftx，需要開起交易權限。<br/>
              3. 刪除綁訂api按鈕<br/>
          </Typography><br/>
          <Typography varient="body1" componenet="div">
              使用幣安的用戶，到幣安用戶設定，建立api<br/>
          </Typography>
          <img
            alt="Under development"
            src="/static/images/tutorial/binance_create_api.png"
            style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 760
            }}
          /><br/><br/>
          <Typography varient="body1" componenet="div">
              開起交易權限，選擇無限制IP<br/>
          </Typography>
          <img
            alt="Under development"
            src="/static/images/tutorial/binance_api_permission.png"
            style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 760
            }}
          /><br/><br/>
          <Typography varient="body1" componenet="div">
              使用FTX的用戶，到FTX用戶設定，建立api，選擇交易權限<br/>
          </Typography>
          <img
            alt="Under development"
            src="/static/images/tutorial/ftx_api.png"
            style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 760
            }}
          /><br/><br/>


          <Typography variant="h3" component="div" sx={{padding: '8px 0 16px'}}>
              3. 機器人面版<br/>
          </Typography>
          <img
            alt="Under development"
            src="/static/images/tutorial/dashboard.png"
            style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 760
            }}
          /><br/><br/>
          <Typography varient="body1" componenet="div">
              1. 建立新的機器人，目前每位用戶限制最多5個機器人，建立新機器人前先綁訂交易所apikey<br/>
              2. 正在運行中的機器人<br/>
              3. 機器人的交易紀錄，點進去有詳細的訊息跟資訊<br/>
          </Typography><br/><br/>
                
          <Typography varient="body1" componenet="div">
              機器人設定圖解<br/>
          </Typography>
          <img
            alt="Under development"
            src="/static/images/tutorial/bot_config.png"
            style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 760
            }}
          /><br/><br/>
          
          <Typography varient="body1" componenet="div">
              點擊交易紀錄會出現詳細訊息，右手邊則是運行中的機器人設置，關閉按鈕在右上方<br/>
          </Typography>
          <img
            alt="Under development"
            src="/static/images/tutorial/running_bot.png"
            style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 760
            }}
          /><br/><br/>
          

        </Box>
      </Card>
    </Box>
  </>
);

Tutorial.getLayout = (page) => (
  <DashboardLayout
    pageName='Tutorial'
  >
    {page}
  </DashboardLayout>
);

export default withAuth(Tutorial);
