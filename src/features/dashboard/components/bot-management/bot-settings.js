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


const setting = {
    target: "SPOT",
    order_type: "limit",
    stop_loss_type: "limit",
    stop_loss: "0.5",
    take_profit_type: "limit",
    take_profit: "0.5",
    quantity: "50",
    leverage: "50",
    margin: "50",
    minimum_volume: "50",
}
export const BotSettings = () => {
    return (
        <Box sx={{ padding: '0 32px' }}>
            <Typography variant="h6">
                Bot Settings
            </Typography>
            <Box sx={{pt: 2,}} >
                <FormGroup >
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Test only" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="No duplicate Order" />
                </FormGroup>
                <Divider />
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Target :</strong> {setting.target}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Order Type :</strong> {setting.order_type}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Stop Loss :</strong> {setting.stop_loss_type}, {setting.stop_loss}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Take Profit :</strong> {setting.take_profit_type}, {setting.take_profit}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Quantity :</strong> {setting.quantity}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Minimum Margin Ratio :</strong> {setting.margin}
                </Typography>
                <Typography variant="body1" sx={{pt: 1}}>
                    <strong>Minimum Volume :</strong> {setting.minimum_volume}
                </Typography>
                <Button
                    color="error"
                    endIcon={<DeleteForeverIcon fontSize="small" />}
                    size="small"
                    variant="contained"
                    onClick={() => openCreateBotDialog(bot.channel)}
                    sx={{mt: 2}}
                >
                    Delete Bot
                </Button>
            </Box>
        </Box>
    );
}