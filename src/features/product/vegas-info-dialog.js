import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const VegasInfoDialog = (props) => {
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
                    Vegas Tunnel 4hr
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
                        Vegas Tunnel Trading 維加斯隧道交易法
                    </Typography>

                    
                    <Typography varient="body1" componenet="div">
                        介紹文章:<br/>
                        <a href="https://ftmo.com/fr/vegas-tunnel-trading/">https://ftmo.com/fr/vegas-tunnel-trading/</a><br/>
                        <a href="https://www.blocktempo.com/guide-for-trading-vegas-tunnel/">https://www.blocktempo.com/guide-for-trading-vegas-tunnel/</a><br/>
                    </Typography><br/>
                </Box>


                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        策略詳細步驟
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        1. 添加三根EMA均線——數值為169（斐波那契數列中13的平方）、144（斐波那契數列之一）和12（過濾信號，12的平方等於144）。 其中，169和144組成了一條"隧道"。<br/>
                        2. 等待價格進入隧道中。 當價格和12EMA均線都突破上軌，是做多信號;兩者都突破下軌，是做空信號。<br/>
                        3. 止損位放在隧道另一側軌道的位置。 例如，空單的止損放在位置較高的上軌;若價格後市如期下跌，隧道也會向下走，此時止損位置也要調整到最新的上軌位置。<br/>
                    </Typography>
                </Box>


                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        回測交易紀錄 & 績效 & 勝率統計
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        <a href="https://docs.google.com/spreadsheets/d/1vpGNkf6lctnhIxUZ2EzqVx218cPlEEegzjGd6A3eYRQ/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1vpGNkf6lctnhIxUZ2EzqVx218cPlEEegzjGd6A3eYRQ/edit?usp=sharing</a><br/>
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS2moWAKGm-T_E1B7oIpLDNqzAkC31fMxZg2uSNvBUzJbpkb8N2y5h2gjTCklyqUm5kNO19IG2OLHnI/pubhtml?widget=true&amp;headers=false" width="100%" height="3000"></iframe>
                    </Typography>
                </Box>

            </Box>
        </Dialog>
    )

}