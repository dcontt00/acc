import "../App.css";
import { Paper, Button, Typography, Grid } from "@mui/material";
import Carousel from "../components/Carousel";
import Container from "@mui/material/Container";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Destacados</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Carousel />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Más vendidos</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={2}>
            <Gallery />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
