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


export const UserReferralHistory = () => {
    const dispatch = useDispatch();
    const [referralRecords, setreferralRecords] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const userReferralHistory = useSelector(getUserReferralHistory);

    useEffect (() => {
      if (userReferralHistory && userReferralHistory[rowsPerPage] && userReferralHistory[rowsPerPage][page]) {
        setreferralRecords(userReferralHistory[rowsPerPage][page]);
      }
    }, [userReferralHistory]);

    useEffect (() => {
      if (! userReferralHistory || ! userReferralHistory[rowsPerPage] || ! userReferralHistory[rowsPerPage][page]) {
        dispatch(loadUserReferralHistory({page: page, pagesize: rowsPerPage}));
      } else {
        setreferralRecords(userReferralHistory[rowsPerPage][page]);
        console.log(referralRecords);
      }
    }, [page, rowsPerPage])
  
    const getTotalCount = () => {
      if (! userReferralHistory ) return 0;
      return userReferralHistory.total_count;
    }
    
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const recrodType = (bot_id, subscription_id) => {
      if ( bot_id )
        return "交易";
      if ( subscription_id )
        return "訂閱"
      return "註冊"
    }

    return (
      <Card sx={{marginTop: '0px'}}>
        <CardHeader
          title="推薦紀錄"
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
                    好友
                  </TableCell>
                  <TableCell>
                    類型
                  </TableCell>
                  <TableCell>
                    獎金
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {referralRecords.map((record, index) => (
                  <TableRow
                    hover
                    key={index}
                  >
                    <TableCell>
                      {format(fromUnixTime(record.timestamp), 'yyyy/MM/dd')}
                    </TableCell>
                    <TableCell>
                      {record.referral_code}
                    </TableCell>
                    <TableCell>
                      {recrodType(record.bot_id, record.subscription_id)}
                    </TableCell>
                    <TableCell>
                      {record.rebate}
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
