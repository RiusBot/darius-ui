import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { format } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Box, Tooltip, Typography } from '@mui/material';
import { SeverityPill } from '@/features/dashboard/components/bot-management/severity-pill';
import { getBotTrades } from '@/features/dashboard/dashboard-slice';
import { getBotTradesFromState } from '@/features/dashboard/dashboard-selector';

const blankTrade = [
  {
    message: {
      channel: "Rose",
      content: "test",
      symbol: "test",
      action: "buy",
      message_timestamp: 1555016400000,
      receive_timestamp: 1555016400000,
    },
    status: 'open',
    error: '',
  },
];
export const BotTradesTable = (props) => {
  const dispatch = useDispatch();
  const { botId } = props;
  const [botTrades, setBotTrades] = useState([]);

  useEffect (() => {  
      dispatch(getBotTrades({userId: "lnkniyQLCNPlJz4cH0k3ejeh9ZB3", botId: botId}));
      },[]
  );
  const allBotTrades = useSelector(getBotTradesFromState);

  useEffect (() => {
    if (allBotTrades[botId]) {
      setBotTrades(allBotTrades[botId]);
    }
  }, [allBotTrades]);
  console.log(botTrades);


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
                >
                  <TableCell>
                    {format(trade.message.message_timestamp, 'dd/MM/yyyy mm:ss')}
                  </TableCell>
                  <TableCell>
                    {trade.message.symbol}
                  </TableCell>
                  <TableCell>
                    {trade.message.action}
                  </TableCell>
                  <TableCell>
                    <SeverityPill
                      color={(trade.status === 'open' && 'success')
                      || (trade.status === 'refunded' && 'error')
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
