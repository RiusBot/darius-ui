import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



export const WebhookInfoDialog = (props) => {
    const { open, onClose } = props;
    const [completeRecords, setCompleteRecords] = React.useState([]);
    const webhook_example = {'symbol': 'BTC', 'action': 'BUY', 'token': 'abcdefghijklmnopqrstuvwxyz'}

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md">
            <Box
                sx={{
                    'display': 'flex',
                    'flexDirection': 'row',
                    'width:': '100%',
                    'padding': '32px 24px 32px'
                }}>
                <Typography variant="h5" component="div">
                    Webhook Bot
                </Typography>
                <IconButton
                    style={{'marginLeft': 'auto'}}
                    onClick={onClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
            <Divider variant="middle" />
            <Box
                sx={{
                    'width:': 800,
                    'height': '80vh',
                    'overflowY': 'scroll',
                    'padding': '16px 16px',
                }}>
                  
                <Box sx={{p:2}} >
                    <Typography varient="body1" componenet="div">
                        Start your automatic trading with webhook alerts and singals !!<br/><br/>
                        This Bot is created to integrate with other web services such as TradingView.<br/>
                        For more information, you can check out<br/>
                        <a href="https://www.tradingview.com/support/solutions/43000529348-about-webhooks/">https://www.tradingview.com/support/solutions/43000529348-about-webhooks/</a><br/><br/>

                        You will recieve an unique webhook after you create a webhook bot.
                        
                    </Typography><br/>
                            
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        About webhooks usage
                    </Typography>

                    <Typography varient="body1" componenet="div">
                        Webhooks allow you to send a POST request to a certain URL every time the alert is triggered. <br/>
                        The alert message must be in valid JSON. <br/><br/>
                        Three keys are required
                        <Box
                          component="div"
                          sx={{
                            display: 'inline',
                            p: 1,
                            m: 1,
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) =>
                              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                            border: '1px solid',
                            borderColor: (theme) =>
                              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                            borderRadius: 2,
                            fontSize: '0.875rem',
                            fontWeight: '700',
                          }}
                        >
                          symbol
                        </Box>

                        <Box
                          component="div"
                          sx={{
                            display: 'inline',
                            p: 1,
                            m: 1,
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) =>
                              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                            border: '1px solid',
                            borderColor: (theme) =>
                              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                            borderRadius: 2,
                            fontSize: '0.875rem',
                            fontWeight: '700',
                          }}
                        >
                          token
                        </Box>

                        <Box
                          component="div"
                          sx={{
                            display: 'inline',
                            p: 1,
                            m: 1,
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) =>
                              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                            border: '1px solid',
                            borderColor: (theme) =>
                              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                            borderRadius: 2,
                            fontSize: '0.875rem',
                            fontWeight: '700',
                          }}
                        >
                          action :  [ BUY, SELL ]
                        </Box>

                        <br/><br/>

                        Example: <br/>
                        <Box component="span" sx={{
                          display: 'block',
                          p: 1,
                          m: 1,
                          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                          color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                          border: '1px solid',
                          borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                          borderRadius: 2,
                          fontSize: '0.875rem',
                          fontWeight: '700',
                        }}
                      >{JSON.stringify(webhook_example, null, 4)}</Box>
                    </Typography><br/>
                </Box>
            </Box>
        </Dialog>
    )

}