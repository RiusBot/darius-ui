import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const JustinInfoDialog = (props) => {
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
                    Justin's Trading Room
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
                        派網分析師Justin
                    </Typography>

                    <img
                      alt="Under development"
                      src="/static/images/products/justin_curve.jpg"
                      style={{
                          display: 'inline-block',
                          maxWidth: '100%',
                          width: 360
                      }}
                      />

                    
                    <Typography varient="body1" componenet="div">
                        歡迎各位追蹤我的頻道。我是 Justin ，在台股用程式交易操盤 18 年，目前專注在加密貨幣市場的交易，我習慣用多個指標去做中長期的布局操作，並且使用 Pionex 平台提供的交易工具管控交易風險。<br/><br/>

                        該止盈就止盈、該止損堅決止損，在加密貨幣市場賺錢其實是非常容易的，歡迎一起學習交流。<br/><br/>

                        Telegram: <a href="https://t.me/justin_tw">https://t.me/justin_tw</a><br/>
                        Line: <a href="https://line.me/ti/g2/_82EbLYZbceEoZydRGUdVw">https://line.me/ti/g2/_82EbLYZbceEoZydRGUdVw</a><br/>
                        Facebook: <a href="https://www.facebook.com/showumoney/">https://www.facebook.com/showumoney/</a><br/>
                        Line: <a href="https://medium.com/@joiesfu.tw">https://medium.com/@joiesfu.tw</a><br/>
                        
                    </Typography><br/>
                </Box>

            </Box>
        </Dialog>
    )

}