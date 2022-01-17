import { useSelector } from 'react-redux';
import {
    Box,
    Button,
    Typography,
    FormGroup,
    Checkbox,
    Divider,
    FormControlLabel
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const BotSettings = (props) => {
    const { openConfirmDialog, config, botId, userApi } = props;
    const ApiKey = () => {
        if (userApi[config.api_id]) {
            return (
                <>
                    <Typography variant="body1" sx={{pt: 1, display: 'block', width: '320px', wordWrap: 'break-word'}}>
                        <strong>API key :</strong> &emsp; {userApi[config.api_id].api_key}
                    </Typography>
                    <Typography variant="body1" sx={{pt: 1}}>
                        <strong>Exchange :</strong> &emsp; {userApi[config.api_id].exchange}
                    </Typography>
                </>
            );
        } else {
            return (<></>);
        }
    }
    return (
        <Box 
            sx={{ margin: '-24px 0 32px 32px', 
                  padding: '32px',
                  border: '1px solid #C3B292',
                  borderRadius: '16px',
                  width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row'}} >
                <Typography variant="h6">
                    Bot Settings
                </Typography>
                <Button
                    color="error"
                    endIcon={<DeleteForeverIcon fontSize="small" />}
                    size="small"
                    variant="contained"
                    onClick={() => openConfirmDialog({action: "botDelete", botId: botId})}
                    sx={{marginLeft: 'auto'}}
                >
                    Delete
                </Button>
            </Box>
            <Box sx={{pt: 2,}} >
                <FormGroup >
                    <FormControlLabel disabled checked={config.test} control={<Checkbox color="primary"/>} label="Test only" />
                    <FormControlLabel disabled checked={config.duplicate} control={<Checkbox color="primary"/>} label="No duplicate Order" />
                </FormGroup>
                <Divider />
                <ApiKey/>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Target :</strong> &emsp; {config.target}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Order Type :</strong> &emsp; {config.order_type}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Stop Loss :</strong> &emsp; {config.stop_loss_type}, {config.stop_loss}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Take Profit :</strong> &emsp; {config.take_profit_type}, {config.take_profit}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Quantity :</strong> &emsp; {config.quantity}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Leverage :</strong> &emsp; {config.leverage}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Minimum Margin Ratio :</strong> &emsp; {config.margin}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Minimum Volume :</strong> &emsp; {config.minimum_volume}
                </Typography>
                
            </Box>
        </Box>
    );
}