import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import firebase from '@/utils/firebase';

export const TelegramBindingDialog = (props) => {
    const { open, onClose } = props;
    const idToken = firebase.auth().currentUser?.getIdToken();
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    padding: '32px 16px 8px'
                }}>
                <Typography variant="h5" component="div">
                    Telegram Binding Tutorial
                </Typography>
                <IconButton
                    style={{marginLeft: 'auto'}}
                    onClick={onClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
            <Divider variant="middle" />
            <Box
                sx={{
                    padding: '16px',
                    overflowY: 'scroll',}}>

                <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                    1. 和 RiusBot 對話<br/>
                </Typography>
                <img
                  alt="Under development"
                  src="/static/images/tutorial/riusbot.png"
                  style={{
                      display: 'inline-block',
                      maxWidth: '100%',
                      width: 760
                  }}
                /><br/><br/>
                <img
                  alt="Under development"
                  src="/static/images/tutorial/bind_riusbot.png"
                  style={{
                      display: 'inline-block',
                      maxWidth: '100%',
                      width: 660
                  }}
                /><br/><br/>
                <img
                  alt="Under development"
                  src="/static/images/tutorial/enter_idToken.png"
                  style={{
                      display: 'inline-block',
                      maxWidth: '100%',
                      width: 360
                  }}
                /><br/><br/>
                <Typography varient="body1" componenet="div">
                    1. Telegram 搜尋 RiusBot<br/>
                    2. 選擇綁定帳號。<br/>
                    3. 點擊下列按鈕複製密鑰<br/>
                    4. 貼上密鑰<br/>
                    5. 成功 !!<br/>
                    6. 之後就可以從 RiusBot 查詢訂閱 選像進入頻道
                </Typography><br/>
                
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    >
                    <Button
                        color="primary"
                        size="large"
                        variant="contained"
                        onClick={() => navigator.clipboard.writeText(idToken)}
                    >
                        Copy Token
                    </Button>
                </Box><br/><br/>

                <img
                  alt="Under development"
                  src="/static/images/tutorial/riusbot_subscription.png"
                  style={{
                      display: 'inline-block',
                      maxWidth: '100%',
                      width: 260
                  }}
                /><br/><br/>

            </Box>
        </Dialog>
    )

}
