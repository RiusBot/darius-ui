import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Chip, Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TimeseriesChart } from '@/features/product/components/timeseries-chart';
import { ProductTags } from '@/features/product/components/tags'
import TocIcon from '@mui/icons-material/Toc';


export const WhaleHuntInfoDialog = (props) => {
    const { open, onClose, tags, openPerfDialog } = props;

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
                    Whale Hunt
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
                        捕鯨流訊號 Whale Hunt 分析鏈上數據，整合5大資訊彙整工具，演算法找出關鍵交易，追蹤巨鯨聰明錢進行跟單。<br/>
                        演算法效能遠超人工追蹤數據，交易發生當下，全自動即時追蹤 高勝率 高報酬 巨鯨動向。<br/><br/>
                    </Typography>

                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        • 特色
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        - 監控 DeFi協議 和 ETH錢包 鏈上大額交易<br/>
                        - 使用 anomaly detection 找出關鍵交易<br/>
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
                    </Typography><br/>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
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
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        建議機器人設定
                    </Typography>
                    <Typography varient="body1" componenet="div" color="blue">
                      下單金額設定總資金 1/5 <br/>
                    </Typography><br/>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        實際使用心得 - <a href="https://hackmd.io/@poch3ng/rkzngzILF">捕鯨流 (POCHΞNG)</a><br/>
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        <iframe src="https://hackmd.io/@poch3ng/rkzngzILF" width="100%" height="3000"></iframe>
                    </Typography>
                </Box>
            </Box>
        </Dialog>
    )

}