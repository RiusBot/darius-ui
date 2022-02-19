import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useSelector } from 'react-redux';
import { getAuthUser } from '@/common/selectors';
import {
    Box,
    Button,
    Typography
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

export const BotSettings = (props) => {
    const reverse = (s) => {return s.split("").reverse().join("");}
    const { openConfirmDialog, openEditDialog, config, channel, botId, botStatus } = props;
    const auth = useSelector(getAuthUser);
    const webhook = process.env.NEXT_PUBLIC_DARIUS_BACKEND_API + '/api/v1/execute_webhook_signal/' + botId.toString();

    const WebhookExtra = () => {
        if (channel === "WEBHOOK") {
            return (
                <Box sx={{ marginTop: '8px'}}>
                    <Button
                        aria-label="copy webhook to clipboard"
                        size="small"
                        sx={{ ml: 2 }}
                        onClick={() => navigator.clipboard.writeText(webhook)}
                        startIcon={<ContentCopyIcon/>}
                        >  Copy Webhook to Clipboard
                    </Button>
                    <Button
                        aria-label="copy token to clipboard"
                        size="small"
                        sx={{ ml: 2 }}
                        onClick={() => navigator.clipboard.writeText(reverse(auth.uid))}
                        startIcon={<ContentCopyIcon/>}
                    >  Copy Token to Clipboard
                    </Button>
                </Box>
            )
        }
        else return (<></>)
    }
    
    
    return (
        <Box 
            sx={{ margin: '-24px 0 32px', 
                    padding: '32px',
                    border: '1px solid #C3B292',
                    borderRadius: '16px',
                    width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row'}} >
                <Typography variant="h6">
                    Bot Status  [{botStatus}]
                </Typography>
                <Button
                    color="primary"
                    endIcon={<EditIcon fontSize="small" />}
                    size="small"
                    variant="contained"
                    onClick={() => openEditDialog({action: "botEdit",
                                                  channel: channel,
                                                  botId: botId,
                                                  config: config,
                                                  botStatus: botStatus,
                                                })}
                    sx={{marginLeft: 'auto'}}
                >
                    Edit Bot Config
                </Button>
                <Button
                    color="error"
                    endIcon={<DeleteForeverIcon fontSize="small" />}
                    size="small"
                    variant="contained"
                    onClick={() => openConfirmDialog({action: "botDelete", botId: botId})}
                    sx={{marginLeft: '8px'}}
                >
                    Delete Bot
                </Button>
            </Box>
            <Box sx={{pt: 2,}} >
                <WebhookExtra/>
            </Box>
        </Box>
    );
}