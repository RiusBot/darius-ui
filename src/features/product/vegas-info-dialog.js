import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Chip, Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ProductTags } from '@/features/product/components/tags';
import TocIcon from '@mui/icons-material/Toc';


export const VegasInfoDialog = (props) => {
    const { open, onClose, tags, openPerfDialog } = props;
    const [completeRecords, setCompleteRecords] = React.useState([]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md">
            <Grid container spacing={1} sx={{
                    'display': 'flex',
                    'flexDirection': 'row',
                    'width:': '100%',
                    'padding': '32px 24px 32px'
                }}>
              <Grid item xs={5.5}>
                <Typography variant="h5" component="div">
                    Vegas Tunnel
                    <ProductTags data={tags} />
                </Typography>
              </Grid>
              <Grid item xs={4}>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  color="success"
                  style={{'margin': 'auto', 'height': '100%'}}
                  startIcon={<TocIcon />}
                  onClick={openPerfDialog}
                >
                  詳細績效數據
                </Button>
              </Grid>
              <Grid item xs={0.5}>
                <IconButton
                    style={{'marginLeft': 'auto'}}
                    onClick={onClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
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
                        Vegas Tunnel Trading 維加斯隧道交易法<br/><br/>
                        介紹文章:<br/>
                        <a href="https://ftmo.com/fr/vegas-tunnel-trading/">https://ftmo.com/fr/vegas-tunnel-trading/</a><br/>
                        <a href="https://www.blocktempo.com/guide-for-trading-vegas-tunnel/">https://www.blocktempo.com/guide-for-trading-vegas-tunnel/</a><br/>
                    </Typography><br/>
                      
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        • 特性
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        Vegas 屬於順勢交易，牛熊都適合，當市場趨勢越明確，越能夠完整捕捉波段的獲利。<br/>
                    </Typography><br/>
                        
                        
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        • 風險
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        當市場在區間來回震盪，容易使得績效回落。<br/>
                    </Typography><br/>
                </Box>



                <Box sx={{p:2}} >
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        績效
                    </Typography>
                    <Typography variant="h7" component="div" sx={{padding: '8px 0 16px'}}>
                        回測交易紀錄 & 績效 & 勝率統計 表單
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        <a href="https://docs.google.com/spreadsheets/d/1vpGNkf6lctnhIxUZ2EzqVx218cPlEEegzjGd6A3eYRQ/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1vpGNkf6lctnhIxUZ2EzqVx218cPlEEegzjGd6A3eYRQ/edit?usp=sharing</a><br/>
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS2moWAKGm-T_E1B7oIpLDNqzAkC31fMxZg2uSNvBUzJbpkb8N2y5h2gjTCklyqUm5kNO19IG2OLHnI/pubhtml?widget=true&amp;headers=false" width="100%" height="500"></iframe>
                    </Typography>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        建議機器人設定
                    </Typography>
                    <Typography varient="body1" componenet="div" color="blue">
                      下單金額設定總資金 1/20 <br/>
                    </Typography><br/>
                </Box>

            </Box>
        </Dialog>
    )

}