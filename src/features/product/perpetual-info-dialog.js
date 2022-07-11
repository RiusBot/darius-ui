import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Chip, Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TimeseriesChart } from '@/features/product/components/timeseries-chart';
import { ProductTags } from '@/features/product/components/tags';
import TocIcon from '@mui/icons-material/Toc';


export const PerpetualInfoDialog = (props) => {
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
                    Binance Perpetual
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
                        多空數據訊號，仿照Benson數據流訊號開發的訊號頻道，更新較快，每15分鐘會更新。<br/>
                    </Typography>
                
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <img
                        alt="Under development"
                        src="/static/images/products/perpetual_demo.png"
                        style={{
                            display: 'inline-block',
                            maxWidth: '100%',
                            width: 260
                        }}
                        />
                    </Box>

                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        • 特性
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        牛市中獲取極暴力的獲利，捕捉拉盤開噴瞬間。<br/>
                    </Typography><br/>
                        
                        
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        • 風險
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        熊市不建議繼續使用，回撤非常大<br/>
                    </Typography><br/>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                      績效
                    </Typography>
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        淨資產曲線
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      <img
                          alt="Under development"
                          src="/static/images/products/perpetual_balance.png"
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
                        最佳參數搜索
                    </Typography>
                    目前在歷史資料回測使用 grid search 做最佳參數搜索找到，以下最佳平均參數<br/>
                    - 72小時內買出<br/>
                    - 止損 0.30<br/>
                    - 止盈 0.90<br/>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        回歸分析
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      <img
                          alt="Under development"
                          src="/static/images/products/perpetual_analysis.png"
                          style={{
                              display: 'inline-block',
                              maxWidth: '100%',
                              width: 560
                          }}
                        />
                    </Box>
                    更詳細的數據分析:&nbsp; &nbsp;
                    <a href="https://nbviewer.org/gist/j40903272/6110bf8dd3c9359c33ef8afc216a0d3f">https://nbviewer.org/gist/j40903272/6110bf8dd3c9359c33ef8afc216a0d3f</a>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        過去所有訊號紀錄列表 & 回測交易紀錄
                    </Typography>
                    <a href="https://docs.google.com/spreadsheets/d/1zXbfxzSGMZ1j0JFc8tAcl75JldeywbScdznRkR23Fn4/edit#gid=1870663993">https://docs.google.com/spreadsheets/d/1zXbfxzSGMZ1j0JFc8tAcl75JldeywbScdznRkR23Fn4/edit#gid=1870663993</a><br/>
                    <Typography varient="body1" componenet="div">
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQrfIPyWgTPAmwQsu5U6JWQGEmMv465hwqCHA2iPHHZOJc-XVlb7Bsauh3hhj9kX1sdbKJrduQXLYjn/pubhtml?widget=true&amp;headers=false" width="100%" height="500"></iframe>
                    </Typography>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        建議機器人設定
                    </Typography>
                    <Typography varient="body1" componenet="div" color="blue">
                      下單金額設定總資金 1/20 <br/>
                    </Typography><br/>
                    
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        實際使用心得
                    </Typography>
                    目前跑一個月25%左右，純現貨<br/>

                    我使用是很佛系放程式下單，是用訊號不再持續出現後8小時固定關單，跟數據變差跑不太一樣，訊號不出止沒有持續變好，不一定是變差。<br/>

                    訊號停止後8小時，通常還不到止損，但是就會固定關掉，一般來說可能+-5%左右。<br/>

                    照我上述的策略做了話，勝率一般，部分通常小虧，但只要遇到有一個爆拉的訊號，就會大賺，爆拉通常漲幅100% up。<br/>

                    <br/>簡單來說，大賺小賠<br/>
                    訊號出來 10個，只有2, 3個會噴<br/>
                    沒噴的虧2% 噴的賺15%<br/>
                    整體還是會賺<br/>
                    有盯盤會更有效率，賺更多賠更少<br/>
                    
                </Box>
                

            </Box>
        </Dialog>
    )

}