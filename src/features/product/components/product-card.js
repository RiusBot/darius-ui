import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, Button, Chip } from '@mui/material';
import { Clock as ClockIcon } from '@/icons/clock';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { MixedChart } from '@/features/product/components/mixed-chart';
import { ProductTags } from '@/features/product/components/tags'


function StatusIcon(status){
  if (status.status == 'active')
    return <ClockIcon/>
  else
    return <NewReleasesIcon/>
}

export const ProductCard = (props) => {
  const { product, chartData, openInfoDialog, setTags } = props;
  const reversedData = (chartData === undefined) ? chartData : [...chartData].reverse();

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      id={product.channel}
    >
      <CardContent>
        <ProductTags data={product.tags} /><br/><br/>
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
      <Box sx={{p:2}} >
        <MixedChart
            data={reversedData}
        />
      </Box>
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
            {StatusIcon(product)}
            <Typography
              color={(product.status == 'active') ? 'active' : 'red'}
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              Status: {product.status.toUpperCase()}
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
              onClick={() => {openInfoDialog(product.channel); setTags(product.tags);}}
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
