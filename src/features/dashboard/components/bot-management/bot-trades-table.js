import { format } from 'date-fns';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '@/features/dashboard/components/bot-management/severity-pill';

const orders = [
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

export const BotTradesTable = (props) => (
  <>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Typography variant="h6">
          Trading History
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Channel
              </TableCell>
              <TableCell>
                Content
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
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Received Timestamp
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                hover
                key={index}
              >
                <TableCell>
                  {order.message.channel}
                </TableCell>
                <TableCell>
                  {order.message.content}
                </TableCell>
                <TableCell>
                  {order.message.symbol}
                </TableCell>
                <TableCell>
                  {order.message.action}
                </TableCell>
                <TableCell>
                  <SeverityPill
                    color={(order.status === 'open' && 'success')
                    || (order.status === 'refunded' && 'error')
                    || 'warning'}
                  >
                    {order.status}
                  </SeverityPill>
                </TableCell>
                <TableCell>
                  {format(order.message.message_timestamp, 'dd/MM/yyyy mm:ss')}
                </TableCell>
                <TableCell>
                  {format(order.message.receive_timestamp, 'dd/MM/yyyy mm:ss')}
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
