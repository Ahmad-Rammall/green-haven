import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import AppCurrentVisits from '../app-current-visits';
import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Users"
            total={1}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Sellers"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/businessman.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Users"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/programmer.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Users Chart"
            chart={{
              series: [
                { label: 'Users', value: 5 },
                { label: 'Sellers', value: 10 },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
