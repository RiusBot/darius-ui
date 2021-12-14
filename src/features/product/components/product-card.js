import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, Button } from '@mui/material';
import { Clock as ClockIcon } from '@/icons/clock';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const ProductCard = (props) => {
  const { product, openInfoDialog } = props;
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            alt="Product"
            src={product.media}
            sx={{
              height: 64,
              width: 64
            }}
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {product.channelDisplayName}
        </Typography>
        {product.description.map((line, idx) => (
          <Typography
            key={idx}
            align="center"
            color="textPrimary"
            variant="body1"
          >
            {line}
          </Typography>
        ))}
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <ClockIcon color="action" />
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              color="primary"
              endIcon={<ArrowRightIcon fontSize="small" />}
              size="small"
              variant="text"
              onClick={() => openInfoDialog(product.channel)}
            >
              See more
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
