import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography
} from '@mui/material';
import { ServiceCurrentSubscription } from '@/features/services/components/service-current-subscription';
import { products } from '__data__/products';

const mockSubscriptions = [{channel: 'ROSE',
                            expireDate: '2021/12/12'}, 
                           {channel: 'WHALE',
                            expireDate: '2021/12/23'}];

const ServiceOptions = (props) => (
  <form {...props}>
    <Card>
      <CardHeader
        subheader="Currently subscribed services and according expire date."
        title="Current Subscribed Services"
      />
      <Box sx={{padding: '0 32px 32px'}} >
        <ServiceCurrentSubscription
          subscriptions={mockSubscriptions}
        />
      </Box>
      <Divider />
      <CardContent>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h6"
        >
          Select another service and subscription plan.
        </Typography>
        <Grid
          container
          spacing={6}
          wrap="wrap"
        >
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="rgba(0, 0, 0, 0.5)"
              gutterBottom
              variant="h6"
            >
              Signals
            </Typography>
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  defaultChecked
                />
              )}
              label="Perpetual Data"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  defaultChecked
                />
              )}
              label="Rose Premium"
            />
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="rgba(0, 0, 0, 0.5)"
              gutterBottom
              variant="h6"
            >
              Subscription Plan
            </Typography>
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  defaultChecked
                />
              )}
              label="1 month"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="6 month"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                />
              )}
              label="12 month (1 year)"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Card>
  </form>
);

export default ServiceOptions;
