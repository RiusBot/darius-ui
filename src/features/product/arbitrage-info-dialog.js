import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const ArbitrageInfoDialog = (props) => {
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
                    Brick Arbitrage 搬磚套利
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
                      搬專套利，穩定獲利的方式。
                      此訊號會針對FTX/BINANCE，現貨/期貨，偵測2%以上溢價。<br/>
                      此策略目前只提供溢價訊號Telegram通知，機器人還在開發當中。<br/>
                      使用者需要自行調度資金。<br/>
                    </Typography><br/>
                    <br/>
                </Box>

            </Box>
        </Dialog>
    )

}