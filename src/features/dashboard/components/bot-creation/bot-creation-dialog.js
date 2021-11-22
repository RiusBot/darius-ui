import React from "react";
import { Dialog, Box, Typography, Button } from '@mui/material';
import DefaultConfigSettings from "./default-config-settings";

// TODO:
// 1. Add Cancel Icon
// 2. Modify Save Button
function BotCreationDialog(props) {
    const { open, channel, onClose } = props;
    return (
        <Dialog
            open={open}
            onClose={onClose}>
            <Box
                style={{
                    'height': '80vh',
                    'overflow-y': 'scroll',
                    'padding': '16px',
                }}>
                <Typography variant="h5" component="div">
                {channel} Bot Creation
                </Typography>
                <DefaultConfigSettings/>
                <Button size="small">Start Bot</Button>
            </Box>
        </Dialog>
    )

}

export default BotCreationDialog;