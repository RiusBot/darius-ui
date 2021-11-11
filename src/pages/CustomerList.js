import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ServiceOptions from '../components/services/ServiceOptions';
import ServicePayment from '../components/services/ServicePayment';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ServiceOptions />
        <Box sx={{ pt: 3 }}>
          <ServicePayment />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
