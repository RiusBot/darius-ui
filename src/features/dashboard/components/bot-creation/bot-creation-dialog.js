import React from "react";
import { Dialog, Box, Typography, Button, IconButton, Divider } from '@mui/material';
import DefaultConfigSettings from "./default-config-settings";
import CloseIcon from '@mui/icons-material/Close';

function BotCreationDialog(props) {
    const { open, channel, onClose } = props;
    const [createButtonDisabled, setCreateButtonDisabled] = React.useState(true);
    const handleCreateButton = (disabled) => {
        setCreateButtonDisabled(disabled);
    }
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md">
            <Box
                sx={{
                    'display': 'flex',
                    'flex-direction': 'row',
                    'width:': '100%',
                    'padding': '32px 16px 8px'
                }}>
                <Typography variant="h5" component="div">
                    {channel} Bot Creation
                </Typography>
                <IconButton
                    style={{'marginLeft': 'auto'}}
                    onClick={onClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
            <Divider variant="middle" />
            <Box
                sx={{
                    'padding': '16px',
                    'overflow-y': 'scroll',}}>
                <DefaultConfigSettings
                    createDisabled={handleCreateButton}
                />
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    >
                    <Button
                        color="primary"
                        style={{'marginLeft': 'auto'}}
                        size="small"
                        variant="contained"
                        onClick={() => onClose}
                        disabled={createButtonDisabled}
                    >
                        Save and Create
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )

}

export default BotCreationDialog;