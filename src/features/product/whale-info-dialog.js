import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TimeseriesChart } from '@/features/product/components/timeseries-chart';

export const WhaleHuntInfoDialog = (props) => {
    const { open, onClose } = props;

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
                    Whale Hunting
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
                        捕鯨流訊號 Whale Hunt
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        特色:<br/>
                        - 監控 DeFi協議 和 ETH錢包 鏈上大額交易<br/>
                        - 使用 anomaly detection 找出特殊大單<br/>
                        - 跟單 多交易次數 高勝率 高平均報酬 鯨魚<br/>
                        - 捕捉多數鯨魚共識<br/>
                        - 判斷整體持倉比例 + 交易週期<br/>
                        - 篩選BTC強勢交易對 + 交易量增加<br/>
                        - 整合5大資訊服務<br/>
                          &nbsp; - Prysm<br/>
                          &nbsp; - Debank<br/>
                          &nbsp; - defi sniper<br/>
                          &nbsp; - etherscan<br/>
                          &nbsp; - Nansen.ai smart money<br/>

                        <br/>開發中:<br/>
                        - 回測和最佳參數搜索<br/>
                        - 梯度提升決策樹 買入賣出訊號<br/>
                    </Typography>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        Telegram 訊號圖解
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <img
                        alt="Under development"
                        src="/static/images/products/whale_explain.png"
                        style={{
                            display: 'inline-block',
                            maxWidth: '100%',
                            width: 760
                        }}
                        />
                    </Box>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        實際使用心得
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        <a href="https://hackmd.io/@poch3ng/rkzngzILF">捕鯨流 (POCHΞNG)</a><br/>
                        <iframe src="https://hackmd.io/@poch3ng/rkzngzILF" width="100%" height="3000"></iframe>
                    </Typography>
                </Box>
                

            </Box>
        </Dialog>
    )

}