import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import AddCircle from '@mui/icons-material/AddCircle'

const BotCard = (props) => {
  const { bot, openCreateBotDialog } = props;

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {bot.channel}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {bot.interestRate} / month
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              alt={bot.channel}
              src={bot.media}
              sx={{
                height: 56,
                width: 56
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
          }}
        >
          <Button
            color="primary"
            endIcon={<AddCircle fontSize="small" />}
            size="small"
            variant="contained"
            onClick={() => openCreateBotDialog(bot.channel)}
          >
            Create
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default BotCard;