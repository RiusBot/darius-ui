import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Chip, Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TimeseriesChart } from '@/features/product/components/timeseries-chart';
import { ProductTags } from '@/features/product/components/tags';
import TocIcon from '@mui/icons-material/Toc';


export const DailyScalpingInfoDialog = (props) => {
    const { open, onClose, tags, openPerfDialog } = props;
    const [completeRecords, setCompleteRecords] = React.useState([]);

    React.useEffect(() => {
        async function getData(file) {
          const path = '/data/backtest_record/daily_scalping_backtest_' + file + '.csv';
          const response = await fetch(path);
          const reader = response.body.getReader();
          const result = await reader.read(); // raw array
          const decoder = new TextDecoder('utf-8');
          const csv = decoder.decode(result.value); // the csv text
          const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
          const data = results.data; // array of objects
          return data;
        }
        getData('complete').then(data => {
            setCompleteRecords(data);
        });
      }, []);

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
                    Daily Scalp
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
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        AltCenter Daily Scalping
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        來自altcenter的daily scalping signal，目前實際回測結果跟他報表很接近，勝率接近6成，少數厲害的訊號<br/>
                        <a href="https://best-trading-signals.com/">官網</a>&nbsp;
                        <a href="https://t.me/Altcenter">Telegram</a>&nbsp;
                        <a href="https://best-trading-signals.com/results/">精美的每月報表</a><br/>
                        這個訊號官網售價夭壽貴，一個月500U，終生3500U。
                    </Typography>
                </Box>
                
                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        實測績效
                    </Typography>

                    <p style={{marginTop: 32}}>淨資產曲線：</p> 
                    <TimeseriesChart
                        data={completeRecords}
                    />
                </Box>

                <Box sx={{p:2}} >
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        回測交易紀錄
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXSuC0Fw9BvWnG8iIPCSM3Tyz-H3epbRApXHtgN2fEv09iILasI8QAc1y8E8mUPvtADbw9pXVwzmo6/pubhtml?gid=500420307&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="3000"></iframe>
                    </Typography>

                    回測分析:&nbsp; &nbsp;
                    <a href="https://zircon-lemonade-940.notion.site/Daily-scalping-c843df6faa854fcc86cffad6fe29a8f1">https://zircon-lemonade-940.notion.site/Daily-scalping-c843df6faa854fcc86cffad6fe29a8f1</a>
                </Box>

            </Box>
        </Dialog>
    )

}