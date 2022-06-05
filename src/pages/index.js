import Head from 'next/head';
// import {useRef} from "react";
import { useRouter } from 'next/router';
import SendIcon from '@mui/icons-material/Send';
import { Box, Card, Typography, Link, Button, Divider, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Text } from '@mui/material';
import { DashboardLayout } from '@/common/components/dashboard-layout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ForwardIcon from '@mui/icons-material/Forward';
import TelegramIcon from '@mui/icons-material/Telegram';


const Tutorial = () => {
  
  // const myRef = useRef(null)
  const router = useRouter();
  
  const redirect = (ref) =>{
    router.push(ref);
  }

  return (
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

        <Card sx={{heigh: '100%', width: '100%', padding: '32px'}} id="overview">
          <Box sx={{p:2}} >
            <Typography variant="h3" component="div" sx={{padding: '8px 0 16px'}}>
                RiusBot 使用教學<br/>
            </Typography>
            簡單3步驟，開始執行策略機器人
            <List>
              <ListItemButton onClick={() => redirect("/#register")}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="註冊" />
              </ListItemButton>
            </List>
            <List>
              <ListItemButton onClick={() => redirect("/#bindApi")}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="綁訂交易所api key" />
              </ListItemButton>
            </List>
            <List>
              <ListItemButton onClick={() => redirect("/#createBot")}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="開啟RiusBot機器人" />
              </ListItemButton>
            </List>
            <Divider/>
            <List>
              <ListItemButton onClick={() => redirect("/#telegram")}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Telegram 訊號通知" />
              </ListItemButton>
            </List>
            <List>
              <ListItemButton onClick={() => redirect("/#fee")}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="收費方案" />
              </ListItemButton>
            </List>
            <Divider/><br/>
            <Link href="https://www.notion.so/RiusBot-Help-Center-c1d5c5cf76e144738dbf8cc3b7237e04" underline="none" target="_blank">
              <Button
                aria-label="help center"
                variant="text"
                startIcon={<MenuBookIcon/>}
              >
                RiusBot 詳細使用手冊
              </Button>
            </Link>
            <br/>
            <Link href="https://t.me/OrderBotFQ" underline="none" target="_blank">
              <Button
                aria-label="riusbot telegram group"
                variant="text"
                startIcon={<TelegramIcon/>}
              >
                RiusBot telegram 討論群
              </Button>
            </Link>
          </Box>
        </Card><br/>
                  
                  
        

        <Card sx={{heigh: '100%', width: '100%', padding: '8px'}}>
          <Box sx={{p:2}} >

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
              
                <Link href="https://www.notion.so/RiusBot-Help-Center-c1d5c5cf76e144738dbf8cc3b7237e04#2f8c745783024a17a1fcc12dbd3cef92" underline="none" target="_blank">
                  <Button
                    aria-label="riusbot detail register instruction"
                    variant="text"
                    startIcon={<SendIcon/>}
                    size="large"
                  >
                    RiusBot 詳細註冊/登入解說
                  </Button>
                </Link>
                <br/><br/>
            </Box>
          </Box>
        </Card><br/>


        <Card  sx={{heigh: '100%', width: '100%', padding: '8px'}} id="bindApi">
          <Box sx={{p:2}} >

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
                2. 填入交易所apikey和api secret，目前支援binance、ftx、okx，子帳戶功能只支援ftx，需要開起交易權限。<br/>
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
            />
            <br/><br/>
              
            <Link href="https://www.notion.so/RiusBot-Help-Center-c1d5c5cf76e144738dbf8cc3b7237e04#a4ce958fc5924e06ae3db0496321f32a" underline="none" target="_blank">
              <Button
                aria-label="riusbot detail bind api instruction"
                variant="text"
                startIcon={<SendIcon/>}
                size="large"
              >
                RiusBot 詳細API設定解說
              </Button>
            </Link>
            <br/><br/>
          </Box>
        </Card><br/>

        <Card  sx={{heigh: '100%', width: '100%', padding: '8px'}} id="createBot">
          <Box sx={{p:2}} >
            
            <Typography variant="h3" component="div" sx={{padding: '8px 0 16px'}}>
                3. 開啟RiusBot機器人<br/>
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
                1. 建立新的機器人，每個策略限制最多2個機器人，建立新機器人前先綁訂交易所apikey<br/>
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
            />
            <br/><br/>

            <Link href="https://www.notion.so/RiusBot-Help-Center-c1d5c5cf76e144738dbf8cc3b7237e04#fa0e0b650e2b48dcb951158c2c3eabf6" underline="none" target="_blank">
              <Button
                aria-label="riusbot detail bot instruction"
                variant="text"
                startIcon={<SendIcon/>}
                size="large"
              >
                RiusBot 詳細機器人設定解說
              </Button>
            </Link>

            <br/>
          </Box>
        </Card><br/>


        <Card  sx={{heigh: '100%', width: '100%', padding: '8px'}} id="telegram">
          <Box sx={{p:2}} >

            <Typography variant="h3" component="div" sx={{padding: '8px 0 16px'}}>
                4. Telegram 訊號通知<br/>
            </Typography>
            <Typography varient="body1" componenet="div">
                點擊右上角用戶頭像，進入用戶資料，綁定Telegram帳號，綁定後到telegram與機器人說話，訂閱者才會有權限加入<br/>
            </Typography>
            <img
              alt="Under development"
              src="/static/images/tutorial/user_profile.png"
              style={{
                  display: 'inline-block',
                  maxWidth: '100%',
                  width: 360
              }}
            /><br/><br/>
            <img
              alt="Under development"
              src="/static/images/tutorial/telegram_bind.png"
              style={{
                  display: 'inline-block',
                  maxWidth: '100%',
                  width: 760
              }}
            />
            <br/><br/>

            <Link href="/account" underline="none">
              <Button
                aria-label="bind telegram"
                variant="text"
                startIcon={<SendIcon/>}
                size="large"
              >
                立即綁定 Telegram 帳號
              </Button>
            </Link>
          </Box>
        </Card><br/>


        <Card  sx={{heigh: '100%', width: '100%', padding: '8px'}} id="fee">
          <Box sx={{p:2}} >

            <Typography variant="h3" component="div" sx={{padding: '8px 0 16px'}}>
                5. 收費方案<br/>
            </Typography>
            
            <List>
              <ListItemButton onClick={() => redirect("/campaign#freetrial")}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary="註冊後免費試用"
                  secondary="試用期30天，限制金額30U，註冊後綁定Telegram開啟試用期"
                />
              </ListItemButton>
            </List>

            <List>
              <ListItemButton onClick={() => redirect("/campaign#vip")}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  primary="使用 Riusbot邀請碼 註冊交易所，成為VIP使用RiusBot完整功能和所有策略"
                  secondary="RiusBot不收取任何額外費用，並且用戶還會獲得10％交易手續費減免，RiusBot將會依靠手續費反饋保持營運，雙贏方案！"
                />
              </ListItemButton>
            </List>

            <List>
              <ListItemButton onClick={() => redirect("/#subscription")}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="月費制方案，付款訂閱後即可使用機器人完整功能" />
              </ListItemButton>
            </List>

            <br/><Divider/><br/>

            <Typography variant="h4" component="div" sx={{padding: '8px 0 16px'}} id="subscription" >
                月費制收費方式<br/>
            </Typography>
            <Typography varient="body1" componenet="div">
                月費制方案請先進入收費頁面，填入轉帳txid還有錢包地址(地址隨便填，方便用戶自己紀錄)還有轉帳日期，就可以成功充值<br/>
            </Typography>
            <Link href="/transaction" underline="none">
              <Button
                aria-label="transaction page"
                variant="text"
                startIcon={<ForwardIcon/>}
                size="large"
              >
                進入付費頁面
              </Button>
            </Link><br/>
            <img
              alt="Under development"
              src="/static/images/tutorial/transaction.png"
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
)};

Tutorial.getLayout = (page) => (
  <DashboardLayout
    pageName='Tutorial'
  >
    {page}
  </DashboardLayout>
);

export default Tutorial;
