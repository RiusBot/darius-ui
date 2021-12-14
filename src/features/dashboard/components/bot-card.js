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
    <Card sx={{ height: '100%', width: '100%' }}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              {bot.channelDisplayName}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              alt={bot.channelDisplayName}
              src={bot.media}
              sx={{
                display: 'flex',
                height: 64,
                width: 64
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
          }}
        >
          <Button
            color="primary"
            endIcon={<AddCircle fontSize="small" />}
            size="small"
            variant="contained"
            onClick={() => openCreateBotDialog({action: "botCreate", 
                                                channel: bot.channel, 
                                                channelDisplayName: bot.channelDisplayName})}
          >
            Create
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default BotCard;