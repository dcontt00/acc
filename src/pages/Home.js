import "../App.css";
import { Typography, Grid } from "@mui/material";
import Carousel from "../components/Carousel";
import Container from "@mui/material/Container";
import Gallery from "../components/Gallery";
import Cars from "../data/Cars.json";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Destacados</Typography>
          <Carousel cars={Cars} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Más vendidos</Typography>
          <Gallery cars={Cars} />
        </Grid>
      </Grid>
    </Container>
  );
}
