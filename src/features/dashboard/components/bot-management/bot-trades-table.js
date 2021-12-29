import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { format, fromUnixTime } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Box, Tooltip, Typography, Popover } from '@mui/material';
import { SeverityPill } from '@/features/dashboard/components/bot-management/severity-pill';
import { BotTradesDetailPopup } from '@/features/dashboard/components/bot-management/bot-trades-detail-popup';
import { getBotTradesFromState } from '@/features/dashboard/dashboard-selector';

export const BotTradesTable = (props) => {
  const dispatch = useDispatch();
  const { botId } = props;
  const [botTrades, setBotTrades] = useState([]);
  const [tradeDetail, setTradeDetail] = useState({info: null, anchorEl: null, open: false});

  const allBotTrades = useSelector(getBotTradesFromState);
  useEffect (() => {
    if (allBotTrades[botId]) {
      setBotTrades(allBotTrades[botId]);
    }
  }, [allBotTrades]);

  return (
    <>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 520, width: 800 }}>
          <Typography variant="h6">
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
                      color={(trade.status !== 'success' && 'success')
                      || (trade.status === 'error' && 'error')
                      || 'warning'}
                    >
                      {trade.status}
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
