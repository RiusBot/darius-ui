import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const MoonInfoDialog = (props) => {
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
                    Moon Phases
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
                        Moon Phases 月相玄學指標策略，新月做空，滿月做多。
                    </Typography><br/>


                    <Typography varient="body1" componenet="div">
                        月圓月缺操作，順應月相操作，玄學理財術帶你賺大錢。<br/>
                        月相指標也是Tradingview內建指標之一。<br/>
                        此策略只會操作 BTC ETH 兩種。<br/>
                    </Typography><br/>
                    <img
                      alt="Under development"
                      src="/static/images/products/moon_indicator.jpg"
                      style={{
                          display: 'inline-block',
                          maxWidth: '100%',
                          width: 360
                      }}
                    /><br/><br/>
                        
                    <Typography varient="body1" componenet="div">
                        以下為回測結果，有興趣者可以自行到Tradingview上使用回測工具。
                    </Typography><br/>
                    <img
                      alt="Under development"
                      src="/static/images/products/moon_backtest.png"
                      style={{
                          display: 'inline-block',
                          maxWidth: '100%',
                          width: 1080
                      }}
                    /><br/>
                        
                </Box>

            </Box>
        </Dialog>
    )

}