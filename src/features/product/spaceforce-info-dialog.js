import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const SpaceforceInfoDialog = (props) => {
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
                    Space Force
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
                      15M 1H 進出策略<br/>
                      <Link href="https://www.youtube.com/watch?v=k0e-gDWrpdI" color="inherit" rel="noreferrer" target="_blank">
                        https://www.youtube.com/watch?v=k0e-gDWrpdI
                      </Link><br/>
                    </Typography><br/>


                    <Typography varient="body1" componenet="div">
                      偷渡最近看的有趣美劇，推薦一下 :P<br/>
                      <Link href="https://www.netflix.com/title/81021929" color="inherit" rel="noreferrer" target="_blank">
                        https://www.netflix.com/title/81021929
                      </Link><br/>
                      <Link href="https://en.wikipedia.org/wiki/Space_Force_(TV_series)" color="inherit" rel="noreferrer" target="_blank">
                        https://en.wikipedia.org/wiki/Space_Force_(TV_series)
                      </Link>
                    </Typography><br/>
                    <br/>
                </Box>

            </Box>
        </Dialog>
    )

}