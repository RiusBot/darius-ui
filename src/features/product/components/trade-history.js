import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card,
         CardContent,
         CardHeader,
         Grid,
         TextField,
         Box,
         Divider,
         Button,
         Typography } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { format, fromUnixTime } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Tooltip, Popover,  } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '@/features/dashboard/components/bot-management/severity-pill';

import { loadUserReferralHistory } from '@/features/referral/referral-slice';
import { getUserReferralHistory } from '@/features/referral/referral-selector';


export const TradeHistory = (props) => {
    const dispatch = useDispatch();
    const { channel, data } = props;
    const [tradeRecords, setTradeRecords] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect (() => {
      if (data != undefined && data.trades != undefined) {
        const st = page * rowsPerPage;
        const ed = (page+1) * rowsPerPage;
        const trades = [...data.trades].sort((a,b) => b.open_timestamp - a.open_timestamp);;
        setTradeRecords(trades.slice(st, ed));
      }
    }, [data, page, rowsPerPage])
  
    const getTotalCount = () => {
      if (data == undefined || data.trades == undefined) return 0;
      return data.trades.length;
    }
    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
      <Card sx={{marginTop: '32px'}}>
        <CardHeader
          title="交易紀錄"
        />
        <Divider />
        <CardContent>
          <PerfectScrollbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sortDirection="desc" sx={{width: "25%"}}>
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        active
                        direction="desc"
                      >
                        日期
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    幣種
                  </TableCell>
                  <TableCell>
                    方向
                  </TableCell>
                  <TableCell>
                    收益
                  </TableCell>
                  <TableCell>
                    持倉時間
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tradeRecords.map((record, index) => (
                  <TableRow
                    hover
                    key={index}
                  >
                    <TableCell>
                      {format(fromUnixTime(record.open_timestamp/1000), 'yyyy/MM/dd kk:mm')}
                    </TableCell>
                    <TableCell>
                      {record.pair.split('/')[0]}
                    </TableCell>
                    <TableCell>
                      {record.is_short ? '空' : '多'}
                    </TableCell>
                    <TableCell>
                      {(record.profit_ratio > 0 ? '+' : '') + (record.profit_ratio*100).toFixed(2) + '%'}
                    </TableCell>
                    <TableCell>
                      {(record.trade_duration/60).toFixed(1) + '小時'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </PerfectScrollbar>
          <TablePagination
            component="div"
            count={getTotalCount()}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
  );
};
