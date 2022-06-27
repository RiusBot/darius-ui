import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Link, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const PerformanceInfoDialog = (props) => {
    const { open, onClose, data } = props;
    const [completeRecords, setCompleteRecords] = React.useState([]);
    console.log(data);

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
                    Performance Detail
                </Typography>
              </Grid>
              <Grid item xs={6}>
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
                      Rose 是擁有龐大 Telegram 社群的 Crypto Trader，提供即時的進出場點位，此機器人會自動進行跟單<br/>
                      ⚡️ROSE 100btc CHALLENGE<br/>
                  </Typography><br/>
                        
                  <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                      • 風險
                  </Typography>
                  <Typography varient="body1" componenet="div">
                      此機器人自動跟單 Trader 提供點位，並非量化交易，風險無法由程式控管<br/>
                  </Typography><br/>
                  
                  <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                      績效
                  </Typography>
                  <Typography varient="body1" componenet="div">
                      目前記錄了績效表現<br/>
                      1. 計算程式交易比手動交易額外收益的全倉帳戶<br/>
                      2. 使用最佳化演算法找出的最佳歷史回測表現的全倉帳戶<br/>
                      歷史績效回測功能之後會一同整合進機器人，可以讓使用者自己嘗試不同參數的績效<br/>
                  </Typography>
                </Box>


                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        短打單績效
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        短打單績效主要測量以程式下單相較於手動下單可以多賺多少利潤。<br/>
                        具體方式是市價馬上買進後，10分鐘內出掉，沒有槓桿。<br/>
                        程式下單比起手動下單，三個月可以多30%利潤。<br/>
                        完整按照rose的止盈止損利潤會是30倍。<br/>
                    </Typography>

                    <p style={{marginTop: 32}}>淨資產曲線：</p>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        完整歷史績效
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        這邊測量按照rose的設置，持倉5-7天的績效表現。使用最佳化演算法找出最佳的參數做設置，止損10%，止盈15-20%。<br/>
                        單純現貨交易，3個月全倉滾績效達2000%。<br/>
                    </Typography>

                    <p style={{marginTop: 32}}>淨資產曲線：</p> 
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        BTC價格走勢和rose開單勝率關聯分析
                    </Typography>
                    <p style={{marginTop: 32}}>綠為盈，紅為虧</p>
                    <Box sx={{ textAlign: 'center' }}>
                        <img
                        alt="Under development"
                        src="/static/images/products/rose_btc_analysis_chart.png"
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
                        機器人建議設定
                    </Typography>
                    <Typography varient="body1" componenet="div" color="blue">
                        下單金額設定總資金 1/10 <br/>
                    </Typography>
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        實際使用心得
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        使用心得是勝率不錯，越快進場越好，但價格通常不會跑完整個setup，tp1 tp2 就要出掉比較好或是把止損往上拉。<br/>
                        另一點就是btc在資費過熱，大回調就會讓所有單都止損，所以市場過熱的時候可以止損近一點。<br/>
                    </Typography>
                </Box>
            </Box>
        </Dialog>
    )

}