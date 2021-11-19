import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
} from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';
import { red } from '@mui/material/colors';
import AddCircle from '@mui/icons-material/AddCircle'

const BotCard = (props) => {
  const { bot, openCreateBotDialog } = props;

  return (<Card sx={{ height: '100%' }}>
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
              {bot.interestRate}% / month
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: red[600],
                height: 56,
                width: 56
              }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <IconButton
            edge="end"
            size="small"
            onClick={() => openCreateBotDialog(bot.channel)}
          >
            Create
            <AddCircle />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}

export default BotCard;