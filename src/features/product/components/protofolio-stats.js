import { useState, useEffect } from 'react';
import { Card,
         CardContent,
         CardHeader,
         Grid,
         TextField,
         Box,
         Divider,
         Skeleton,
         Button,
         Typography } from '@mui/material';
import { getAllPerformance } from '@/features/product/product-selector';


export const ProtofolioStats = (props) => {
    const { channel, data } = props;
    const [ portofolioInfo, setPortofolioInfo ] = useState();
  
    const makeGridList = (props) => {
      const { keys, info } = props;
      return keys.map(
        (keyPair) => {
          const key = keyPair[0];
          const displayKey = keyPair[1];
          return (
            <Grid item xs={0} sm={4} md={4}>
              <CardHeader
                title={info[key] == null ? 0 : info[key]}
                subheader={displayKey}
                titleTypographyProps={{ variant:'h6' }}
                sx={{'padding': '15px'}}
              />
            </Grid>
          )
        }
      )
    };
    
    const statsGrids = (portofolioInfo) => {
      const keys = [
        ['holding_avg', '平均持倉時間'],
        // ['volume', '交易量'],
        ['fee', '手續費'],
        ['total_trades', '交易次數'],
        ['best_pair', '盈利最高幣種'],
        ['worst_pair', '虧損最多幣種'],
        ['trades_per_day', '交易頻率'],
        ['start', '開始'],
        ['end', '結束'],
      ];
      
      const formatStat = (report) => {
        return {
          volume: report.volume.toFixed(0),
          fee: report.fee.toFixed(1),
          holding_avg: report.holding_avg,
          total_trades: report.total_trades.toFixed(0),
          best_pair: report.best_pair,
          worst_pair: report.worst_pair,
          trades_per_day: report.trades_per_day + ' 次/日',
          start: report.start.slice(0, 10),
          end: report.end.slice(0, 10),
        }
      }
      
      const info = formatStat(portofolioInfo);
      return makeGridList({keys, info});
    }
    
    const metricGrids = (portofolioInfo) => {
      const keys = [
        ['roi', '收益率'],
        ['annual_roi', '年化'],
        ['sharperatio', '夏普值'],
        ['cagr', '複合年均增長率'],
        ['win_rate', '勝率'],
        ['max_drawdown', '最大回撤'],
      ];
      
      const formatMetric = (report) => {
        return {
          roi: (report.roi*100).toFixed(2) + '%',
          annual_roi: (report.annual_roi*100).toFixed(2) + '%',
          cagr: (report.cagr*100).toFixed(2) + '%',
          max_drawdown: (report.max_drawdown*100).toFixed(2) + '%',
          win_rate: (report.win_rate*100).toFixed(2) + '%',
          sharperatio: report.sharperatio.toFixed(2),
        }
      }
      
      const info = formatMetric(portofolioInfo);
      return makeGridList({keys, info});
    }
  
    useEffect (() => {
      if (data == undefined) return;
      setPortofolioInfo(data.result);
    },[data]);
  
    if (portofolioInfo === undefined)
      return (
        <Card sx={{marginTop: '3px'}}>
          <CardContent>
            <Box sx={{'height': '30vh', 'overflowY': 'scroll', 'padding': '0px 0px 30px 0px'}}>
              <Skeleton animation="wave" height="50%" />
              <Skeleton animation="wave" height="50%" />
            </Box>
          </CardContent>
        </Card>
      );

    return (
      <Card sx={{marginTop: '3px'}}>
        <CardContent>
          <Grid container rowSpacing={-1} columns={{ xs: 0, sm: 8, md: 8 }}>
            {metricGrids(portofolioInfo)}
          </Grid>
          <Divider />
          <Grid container rowSpacing={-1} columns={{ xs: 0, sm: 8, md: 8 }}>
            {statsGrids(portofolioInfo)}
          </Grid>
        </CardContent>
      </Card>
  );
};
