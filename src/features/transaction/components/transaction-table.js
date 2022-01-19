import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { format, fromUnixTime } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Box, Tooltip, Card, CardHeader } from '@mui/material';
import { getTransactions } from '@/features/transaction/transaction-selector';

// TODO: update transaction history info format
const TransactionTable = (props) => {
  const transactions = useSelector(getTransactions);

  return (
    <Card>
      <CardHeader
        subheader="The table of your transaction history and conrifm status."
        title="Transaction History"
      />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 520, width: '100%', padding: '0 32px 32px' }}>
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
                      Transaction Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Amount
                </TableCell>
                <TableCell>
                  TXID
                </TableCell>
                <TableCell>
                  Wallet
                </TableCell>
                {/* <TableCell>
                  Confirm Status
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((trans, index) => (
                <TableRow
                  hover
                  key={index}
                >
                  <TableCell>
                    {trans.date}
                  </TableCell>
                  <TableCell>
                    {trans.amount}
                  </TableCell>
                  <TableCell>
                    {trans.txid}
                  </TableCell>
                  <TableCell>
                    {trans.wallet}
                  </TableCell>
                  {/* <TableCell>
                    {trans.status}
                  </TableCell> */}
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
    </Card>
  );
}

export default TransactionTable;
