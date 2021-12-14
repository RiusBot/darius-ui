import React from 'react';
import Papa from 'papaparse';
import { Dialog, Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TimeseriesChart } from '@/features/product/components/timeseries-chart';

export const DailyScalpingInfoDialog = (props) => {
    const { open, onClose } = props;
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
                        完整歷史績效
                    </Typography>

                    <p style={{marginTop: 32}}>淨資產曲線：</p> 
                    <TimeseriesChart
                        data={completeRecords}
                    />
                </Box>

            </Box>
        </Dialog>
    )

}