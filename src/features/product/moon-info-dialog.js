import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Chip, Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ProductTags } from '@/features/product/components/tags';
import TocIcon from '@mui/icons-material/Toc';


export const MoonInfoDialog = (props) => {
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
                    Moon Phases
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
                    </Typography><br/>


                    <Typography varient="body1" componenet="div">
                        Moon Phases 月相玄學指標策略，新月做空，滿月做多。<br/>
                        月圓月缺操作，順應月相操作，玄學理財術帶你賺大錢。<br/>
                        月相指標也是Tradingview內建指標之一。<br/>
                        此策略只會操作 BTC ETH 兩種。<br/>
                    </Typography><br/>
                    <img
                      alt="Under development"
                      src="/static/images/products/moon_indicator.jpg"
                      style={{
                          display: 'inline-block',
                          maxWidth: '100%',
                          width: 360
                      }}
                    /><br/><br/>
                      
                    
                    <Typography variant="h5" component="div" sx={{padding: '8px 0 16px'}}>
                        績效
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        以下為回測結果，有興趣者可以自行到Tradingview上使用回測工具。
                    </Typography><br/>
                    <img
                      alt="Under development"
                      src="/static/images/products/moon_backtest.png"
                      style={{
                          display: 'inline-block',
                          maxWidth: '100%',
                          width: 1080
                      }}
                    /><br/>
                        
                </Box>

            </Box>
        </Dialog>
    )

}