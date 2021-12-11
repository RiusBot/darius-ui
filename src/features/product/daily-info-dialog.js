import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TimeseriesChart } from '@/features/product/components/timeseries-chart';

export const DailyScalpingInfoDialog = (props) => {
    const { open, onClose } = props;
    const [backtestRecords, setRecords] = React.useState({complete: [], short: []})

    React.useEffect(() => {
        async function getData(file) {
          const path = '/data/backtest_record/rose_backtest_' + file + '.csv';
          const response = await fetch(path);
          const reader = response.body.getReader();
          const result = await reader.read(); // raw array
          const decoder = new TextDecoder('utf-8');
          const csv = decoder.decode(result.value); // the csv text
          const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
          const data = results.data; // array of objects
          setRecords({...backtestRecords, [file]: data});
        //   console.log(file, data);
        }
        getData('complete');
        getData('short');
      }, [])

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
                    Daily Scalping
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
                        Rose歷史績效分析
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
                    <TimeseriesChart
                        data={backtestRecords.short}
                    />
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        完整歷史績效
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        這邊測量按照rose的設置，持倉5-7天的績效表現。使用最佳化演算法找出最佳的參數做設置，止損10%，止盈15-20%。<br/>
                        具體方式是市價馬上買進後，10分鐘內出掉，沒有槓桿。<br/>
                        單純現貨交易，3個月全倉滾績效達2000%。<br/>
                    </Typography>

                    <p style={{marginTop: 32}}>淨資產曲線：</p> 
                    <TimeseriesChart
                        data={backtestRecords.complete}
                    />
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
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        實際使用心得
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        目前跑2個月都是60%up，2-3倍槓桿<br/>
                        使用心得是勝率不錯，越快進場越好，但價格通常不會跑完整個setup，tp1 tp2 就要出掉比較好或是把止損往上拉。<br/>
                        另一點就是btc在資費過熱，大回調就會讓所有單都止損，所以市場過熱的時候可以止損近一點。<br/>
                    </Typography>
                </Box>
            </Box>
        </Dialog>
    )

}