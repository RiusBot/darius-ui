import { React } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export const BotTradesDetailPopup = (props) => {
    const { tradeDetail } = props;

    if (tradeDetail != null) {
        return (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sortDirection="desc">
                  Channel
                </TableCell>
                <TableCell>
                  Content
                </TableCell>
                <TableCell>
                  Price
                </TableCell>
                <TableCell>
                  Entry
                </TableCell>
                <TableCell>
                  Stop Loss
                </TableCell>
                <TableCell>
                  Take Profit
                </TableCell>
                <TableCell>
                  Error
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {tradeDetail.message.channel}
                </TableCell>
                <TableCell sx={{width: '300px'}}>
                  {tradeDetail.message.content}
                </TableCell>
                <TableCell>
                  {tradeDetail.message.price}
                </TableCell>
                <TableCell>
                  {tradeDetail.message.entry}
                </TableCell>
                <TableCell>
                  {tradeDetail.message.stop_loss}
                </TableCell>
                <TableCell>
                  {tradeDetail.message.take_profit}
                </TableCell>
                <TableCell>
                  {tradeDetail.error}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )
      } else {
        return (<></>);
      }
}