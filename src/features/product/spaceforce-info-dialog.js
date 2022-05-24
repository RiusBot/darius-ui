import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const SpaceforceInfoDialog = (props) => {
    const { open, onClose } = props;
    const [completeRecords, setCompleteRecords] = React.useState([]);
    const acdc = '<iframe width="0%" height="0%" src="https://www.acdc.com/" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe>'

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
                    Space Force 太空部隊
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
                    <Typography varient="body1" componenet="div">
                      15M 30M 1H 短線進出策略，AIR FORCE 升級版，走熊做空也給力。<br/>
                      此策略自帶止盈止損，機器人設定的部分會做為fallback使用。<br/>
                    </Typography><br/>

                    
                </Box>

                <Box sx={{p:2}} >
                  <Typography varient="body1" componenet="div">
                    偷渡最近看的有趣美劇，推薦一下 :P<br/>
                    
                    <a href="https://www.netflix.com/title/81021929" target="_blank">
                      <img width="220" height="250" border="0" align="center"  src="https://upload.wikimedia.org/wikipedia/en/a/a6/Poster_for_Netflix_series_Space_Force.png"/>
                    </a>
                  </Typography><br/>
                  <br/>
                </Box>
            </Box>
        </Dialog>
    )

}