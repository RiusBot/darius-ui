import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Button } from '@mui/material';

export const ConfirmDialog = (props) => {
    const { open, onClose } = props;
    return (
      <Dialog
        open={open}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title" sx={{pt:2}}>
          {"Are you sure you want to delete this bot?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            After you delete the bot, it will no longer be functioning and creating trade orders.
            You will have to recreate another bot from sketch.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Continue and Delete</Button>
          <Button onClick={onClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
}