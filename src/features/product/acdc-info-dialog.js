import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Link, Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ProductTags } from '@/features/product/components/tags';
import TocIcon from '@mui/icons-material/Toc';


export const AcdcInfoDialog = (props) => {
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
                    ACDC 亞太區塊鏈發展學院
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
                        ACDC學院王牌策略，15m 1h 週期進出場，做空為主。<br/>
                    </Typography><br/>

                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        績效
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        <img
                          alt="Under development"
                          src="/static/images/products/acdc_perf1.jpg"
                          style={{
                              display: 'inline-block',
                              maxWidth: '100%',
                          }}
                        /><br/>
                        <img
                          alt="Under development"
                          src="/static/images/products/acdc_perf2.jpg"
                          style={{
                              display: 'inline-block',
                              maxWidth: '100%',
                          }}
                        /><br/> 
                    </Typography><br/>

                        
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        特性
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        策略短時匡進出，獲利自動套保。<br/>
                    </Typography><br/>
                      
                    
                    <Typography variant="h5" component="div" color="blue" sx={{padding: '8px 0 16px'}}>
                        注意事項
                    </Typography>
                    <Typography varient="body1" componenet="div" color="blue">
                      <b>此策略自帶止盈止損，並且會自動不斷動態調整。</b><br/>
                      <b>此策略與ACDC學院合作，想使用需要完成指定條件，申請後成為對方會員。</b><br/>
                      <b>⇩ ⇩ ⇩ ⇩ 申請表單 ⇩ ⇩ ⇩ ⇩</b><br/>
                      <Link
                          href="https://forms.gle/ATsB2ohw9P89Nxq9A"
                          target="_blank"
                          color="error"
                        >
                            申請表單 <br/>
                        </Link>
                    </Typography><br/>

                    <br/><br/>
                        
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        團隊介紹
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        <Link
                          href="https://www.acdccollege.com/"
                          target="_blank"
                        >
                            官網: Acdc亞太區塊鏈發展學院 <br/>
                        </Link>
                        <Link
                          href="https://www.facebook.com/ACDC2020pi"
                          target="_blank"
                        >
                            FB: Acdc亞太區塊鏈發展學院 <br/>
                        </Link>
                        <Link
                          herf="https://line.me/ti/g2/WakvcisJJweISbR4NI3PIIdH_9L-1quFTbJdaQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                          target="_blank"
                        >
                            LINE: ACDC亞太學院大廳 <br/>
                        </Link>
                    </Typography><br/>

                </Box>
            </Box>

        </Dialog>
    )

}