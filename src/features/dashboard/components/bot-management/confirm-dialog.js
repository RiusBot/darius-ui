import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Button } from '@mui/material';

export const ConfirmDialog = (props) => {
    const { open, onClose, onConfirm, object } = props;

    const DialogSubtitle = () => {
      switch (object) {
        case "API":
          return (<DialogContentText id="confirm-dialog-description">
                    After you delete the API, it will no longer be an option for creating bots.
                    You will have to recreate another API from sketch.
                  </DialogContentText>);
        case "BOT":
          return (<DialogContentText id="confirm-dialog-description">
                    After you delete the bot, it will no longer be functioning and creating trade orders.
                    You will have to recreate another bot from sketch.
                  </DialogContentText>);
      }
    }
    return (
      <Dialog
        open={open}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title" sx={{pt:2}}>
          {`Are you sure you want to delete this ${object}?`}
        </DialogTitle>
        <DialogContent>
          <DialogSubtitle/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onConfirm}>Delete</Button>
          <Button onClick={onClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
}