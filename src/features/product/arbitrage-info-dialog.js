import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Link, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ProductTags } from '@/features/product/components/tags'


export const ArbitrageInfoDialog = (props) => {
    const { open, onClose, tags } = props;
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
                    <ProductTags data={tags} />
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
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        簡介
                    </Typography>
                    <Typography varient="body1" componenet="div">
                      搬專套利，穩定獲利的方式。<br/>
                      此訊號會針對 FTX/BINANCE，現貨/期貨，偵測2%以上溢價。<br/>
                      本機器人並非高頻套利，無法以微秒等級去做操作，而是瞄準市場較大且較長時間的溢價，每幾分鐘進行定投對沖。<br/>
                      使用者需要自行調度資金，以平衡對沖雙方的資金水位。<br/>

                      <br/>
                      <Typography color="Tomato">
                        <strong>此策略目前只提供溢價訊號Telegram通知，機器人還在開發當中，研發完成價格會調漲，時程未知。</strong>
                      </Typography>
                    </Typography><br/>
                    <br/>

                </Box>
            </Box>
        </Dialog>
    )

}