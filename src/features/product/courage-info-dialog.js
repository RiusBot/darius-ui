import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const CourageInfoDialog = (props) => {
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
                    Courage
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
                        勇氣一號，大周期主流幣穩健策略。
                    </Typography><br/>
    
                </Box>
            </Box>
        </Dialog>
    )

}