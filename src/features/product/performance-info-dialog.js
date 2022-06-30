import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton, Link, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ProtofolioStats } from '@/features/product/components/protofolio-stats';


export const PerformanceInfoDialog = (props) => {
    const { open, onClose, channel, data } = props;
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
                  {channel} 策略績效總覽
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
          <ProtofolioStats channel={channel} data={data} />
        </Dialog>
    )
}