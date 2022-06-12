import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { format, fromUnixTime } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Box, Tooltip, Typography, Popover, Button } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '@/features/dashboard/components/bot-management/severity-pill';
import { BotTradesDetailPopup } from '@/features/dashboard/components/bot-management/bot-trades-detail-popup';
import { getBotTrades } from '@/features/dashboard/dashboard-selector';
import { loadBotTrades } from '@/features/dashboard/dashboard-slice';

export const BotTradesTable = (props) => {
  const dispatch = useDispatch();
  const { botId } = props;
  const [botTrades, setBotTrades] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [tradeDetail, setTradeDetail] = useState({info: null, anchorEl: null, open: false});
  const allBotTrades = useSelector(getBotTrades);
  useEffect (() => {
    if (allBotTrades[botId] && allBotTrades[botId][rowsPerPage] && allBotTrades[botId][rowsPerPage][page]) {
      setBotTrades(allBotTrades[botId][rowsPerPage][page]);
    }
  }, [allBotTrades]);

  useEffect (() => {
    if (! allBotTrades[botId] || ! allBotTrades[botId][rowsPerPage] || ! allBotTrades[botId][rowsPerPage][page]) {
      dispatch(loadBotTrades({botId: botId, page: page, pagesize: rowsPerPage}));
    } else {
      setBotTrades(allBotTrades[botId][rowsPerPage][page]);
    }
  }, [botId, page, rowsPerPage])
  
  const statusColorMap = new Map([
    ['success', 'warning'],
    ['SL', 'info'],
    ['TP', 'error'],
    ['error', 'success']
  ])
  const statusPostprocess = (status, err_msg) => {
      if (typeof err_msg === 'string' || err_msg instanceof String) {
        if (err_msg.includes("Position duplicate"))
          return "Position Duplicate";
        else if (err_msg.includes("Test only"))
          return "Test Only";
      }
      return status;
  }

  const getTotalCount = () => {
    if (! allBotTrades[botId] ) return 0;
    return allBotTrades[botId].total_count;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 520, width: '100%' }}>
          <Typography variant="h6" sx={{padding: '0 0 12px 12px'}}>
            Trading History
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Message Timestamp
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Symbol
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {botTrades.map((trade, index) => (
                <TableRow
                  hover
                  key={index}
                  onClick={(event) => setTradeDetail({info: trade, anchorEl: event.currentTarget, open: true})}
                >
                  <TableCell>
                    {format(fromUnixTime(trade.message.message_timestamp), 'dd/MM/yyyy kk:mm')}
                  </TableCell>
                  <TableCell>
                    {trade.message.symbol}
                  </TableCell>
                  <TableCell>
                    {trade.message.action}
                  </TableCell>
                  <TableCell>
                    <SeverityPill
                      color={statusColorMap.has(trade.status) ? statusColorMap.get(trade.status) : "success"}
                    >
                      {statusPostprocess(trade.status, trade.error)}
                    </SeverityPill>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Popover
        open={tradeDetail.open}
        anchorEl={tradeDetail.anchorEl}
        onClose={() => setTradeDetail({info: null, anchorEl: null, open: false})}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <BotTradesDetailPopup
          tradeDetail={tradeDetail.info}
        />
      </Popover>
      <TablePagination
        component="div"
        count={getTotalCount()}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box> */}
    </>
  );
}
