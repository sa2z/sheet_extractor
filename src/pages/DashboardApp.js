import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";

// components
import Page from "../components/Page";
import { AppWidgetSummary } from "../sections/@dashboard/app";
export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="x1">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome Back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Projects"
              total={123}
              icon={"ant-design:android-filled"}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
