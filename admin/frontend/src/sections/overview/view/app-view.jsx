import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import AppCurrentVisits from '../app-current-visits';
import AppWidgetSummary from '../app-widget-summary';

import {dashboardDataSource} from "../../../core/remoteDataSource/dashboard";

import {useEffect, useState} from "react"

// ----------------------------------------------------------------------

export default function AppView() {
  const [counts, setcounts] = useState({
    seller:0,
    user:0,
    order:0
  });

  const getCounts = async () => {
    const response = await dashboardDataSource.getCounts();
    if(response?.status === 200){
      const { user_result, orders_result } = response.data;
        setcounts({
          seller: user_result.find(item => item._id === 'seller')?.count || 0,
          user: user_result.find(item => item._id === 'user')?.count || 0,
          order: orders_result[0].count
        });
    }
  }

  useEffect(() => {
    getCounts()
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Users"
            total={counts.seller + counts.user}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Sellers"
            total={counts.seller}
            color="success"
            icon={<img alt="icon" src="/assets/icons/businessman.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Users"
            total={counts.user}
            color="error"
            icon={<img alt="icon" src="/assets/icons/programmer.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Item Orders"
            total={counts.order}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Users Chart"
            chart={{
              series: [
                { label: 'Users', value: counts.user },
                { label: 'Sellers', value: counts.seller },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
