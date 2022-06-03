import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const CtaInfoDialog = (props) => {
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
                    Commodity Trading Advisor
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
                        簡介
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        利用在加密貨幣市場中投資者時常反應過度和反應不足的現象，建立一籃子加密貨幣的多空投資組合。<br/>
                        一小時週期進出場，多空雙向操作。<br/>
                    </Typography><br/>
                        
                        
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        特性
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        當市場趨勢越明確，CTA策略越能夠完整捕捉波段的獲利，顯著降低投資組合的風險和提高投資組合的收益，特別是在股票市場處於熊市的狀態下，投資者就可以通過在資產組合中加入CTA基金，不但可以使其資產防禦風險，還能提高收益（Schneeweis andSpurgin，1998）。<br/>
                    </Typography><br/>
                        
                        
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        風險
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        當市場在區間來回震盪，容易使得CTA策略績效回落。<br/>
                    </Typography><br/>
                        
                    <Typography variant="h6" component="div" sx={{padding: '8px 0 16px'}}>
                        關於CTA投資組合
                    </Typography>
                    <Typography varient="body1" componenet="div">
                        CTA基金，或稱為絕對報酬基金，屬於為避險基金中的一種，基於計量的技術，產生出投資決策，並在發現交易訊號時執行交易。<br/>
                        其操作方式亦以電腦程式設定交易邏輯為主，避免人為主觀判斷或是人為執行誤差影響投資操作結果。同時，多空雙向操作。<br/>
                        CTA以電腦24小時監控全球上百個期貨市場，利用計量模式即時進出場，多空雙向操作，只要在趨勢明顯時就能夠獲利。<br/>
                        
                        <br/>
                        介紹文章：<br/>
                        <Link
                            to="https://wiki.mbalib.com/zh-tw/%E5%95%86%E5%93%81%E4%BA%A4%E6%98%93%E9%A1%BE%E9%97%AE%E5%9F%BA%E9%87%91<br/>"

                        >
                            https://wiki.mbalib.com/zh-tw/商品交易顾问基金<br/>
                        </Link>
                        <Link
                            to="https://eurika.pixnet.net/blog/post/27466491<br/>"
                            
                        >
                            什麼是管理期貨基金(CTA)<br/>
                        </Link>
                        <Link
                            to="https://www.moneydj.com/funddj/yb/yp059001.djhtm?b=1&a=14A3DFCF-5FA8-4A0D-825D-AD1E53870B7E<br/>"
                            
                        >
                            CTA投資新法 多空雙向創造絕對報酬<br/>
                        </Link>
                    </Typography><br/>

                    <img
                      alt="Under development"
                      src="/static/images/products/cta.jpeg"
                      style={{
                          display: 'inline-block',
                          maxWidth: '100%',
                          opacity: 0.1
                      }}
                    /><br/>  

                </Box>
            </Box>
        </Dialog>
    )

}