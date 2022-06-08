import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const AcdcInfoDialog = (props) => {
    const { open, onClose } = props;
    const [completeRecords, setCompleteRecords] = React.useState([]);

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
                    ACDC 學院
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
                    
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        簡介
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        ACDC學院王牌策略，15m 1h 週期進出場，做空為主。<br/>
                    </Typography><br/>

                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        績效
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        <img
                          alt="Under development"
                          src="/static/images/products/acdc_perf1.jpg"
                          style={{
                              display: 'inline-block',
                              maxWidth: '100%',
                          }}
                        /><br/>
                        <img
                          alt="Under development"
                          src="/static/images/products/acdc_perf2.jpg"
                          style={{
                              display: 'inline-block',
                              maxWidth: '100%',
                          }}
                        /><br/> 
                    </Typography><br/>

                        
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        特性
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        策略短時匡進出，獲利自動套保。<br/>
                    </Typography><br/>
                        
                        
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        風險
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        無。<br/>
                    </Typography><br/>
                      
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        注意事項
                    </Typography>
                    <Typography varient="body1" componenet="div" color="blue">
                      <b>此策略自帶止盈止損，並且會自動不斷動態調整。</b><br/>
                      <b>此策略與ACDC學院合作，尚未開放訂閱，敬請期待。</b><br/>
                    </Typography><br/>

                    <br/><br/>
                        
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        團隊介紹
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        <Link
                            to="https://www.facebook.com/ACDC2020pi/<br/>"

                        >
                            https://www.facebook.com/ACDC2020pi/<br/>
                        </Link>
                    </Typography><br/>

                </Box>
            </Box>

        </Dialog>
    )

}