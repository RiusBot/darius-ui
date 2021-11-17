import React from "react";
import { Dialog, Box, Typography, Button } from '@mui/material';
import BotCreationTabs from "./bot-creation-tabs";

function BotCreationDialog(props) {
    const { open, onClose } = props;
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}>
            <Box
                style={{
                    'height': '80vh',
                    'overflow-y': 'scroll',
                    'padding': '16px',
                }}>
                <Typography variant="h5" component="div">
                Bot Creation
                </Typography>
                <BotCreationTabs/>
                <Button size="small">Start Bot</Button>
            </Box>
        </Dialog>
    )

}

export default BotCreationDialog;