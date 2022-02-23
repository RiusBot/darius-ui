import React from "react";
import { Dialog, Box, Typography, Button, IconButton, Divider, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function TermsAndConditionsDialog(props) {
    const { open, onClose, accept } = props;

    const [agreed, setAgreed] = React.useState(false);
    const [event, setEvent] = React.useState(null);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    padding: '32px 16px 8px'
                }}>
                <Typography variant="h5" component="div">
                    Terms and Conditions
                </Typography>
                <IconButton
                    style={{marginLeft: 'auto'}}
                    onClick={onClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
            <Divider variant="middle" />
            <Box
                sx={{
                    padding: '16px',
                    overflowY: 'scroll',}}>
                
                <Typography
                    color="textPrimary"
                    variant="h6"
                >
                    1. Blablabla
                </Typography>
                <Typography
                    color="textPrimary"
                    variant="h6"
                >
                    2. Blablablablabla
                </Typography>

                <Divider variant="middle" />
                    
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                    >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: 'auto'
                        }}
                        >
                        <Checkbox
                            checked={agreed}
                            name="policy"
                            onChange={(event) => {
                                setAgreed(event.target.checked);
                                setEvent(event);
                            }}
                        />
                        <Typography
                            color="textSecondary"
                            variant="body2"
                        >
                            I agree to the
                            Terms and Conditions
                        </Typography>
                    </Box>
                    <Button
                        color="primary"
                        style={{margin: '0 auto'}}
                        size="small"
                        variant="contained"
                        disabled={!agreed}
                        onClick={() => {
                            accept(event);
                            onClose();
                        }}
                    >
                        Accept
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )

}

export default TermsAndConditionsDialog;