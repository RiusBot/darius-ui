import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Button } from '@mui/material';

export const ConfirmDialog = (props) => {
    const { open, onClose } = props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title">
          {"Are you sure you want to close this bot?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            After you delete the bot, it will no longer be functioning.
            You will have to recreate it from start.
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