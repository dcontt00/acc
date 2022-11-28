import "../App.css";
import { Paper, Button, Typography, Grid } from "@mui/material";
import Carousel from "../components/Carousel";
import Container from "@mui/material/Container";
import Gallery from "../components/Gallery";
import Cars from "../data/Cars.json";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h1">Destacados</Typography>
          <Carousel cars={Cars} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h1">Más vendidos</Typography>
          <Gallery cars={Cars} />
        </Grid>
      </Grid>
    </Container>
  );
}
