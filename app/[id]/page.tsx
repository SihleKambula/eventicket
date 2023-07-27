import { EventImage } from "@/components";
import { Container, Grid, Typography } from "@mui/material";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <EventImage id={params.id} />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </Container>
  );
}
