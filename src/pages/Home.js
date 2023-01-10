import "../App.css";
import { Typography, Grid, cardActionAreaClasses } from "@mui/material";
import Carousel from "../components/Carousel";
import Container from "@mui/material/Container";
import Gallery from "../components/Gallery";
import Cars from "../data/Cars.json";


function getCars(ids) {
  var list = []
  ids.forEach(id => {
    var car = Cars.find((car) => car.id === parseInt(id));
    list.push(car)
  });
  return list
}

export default function Home() {

  const mostSelled = getCars([1, 3, 5, 7])
  const carrouselCars = getCars([2, 4, 6])

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Carousel cars={carrouselCars} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Más vendidos</Typography>
          <Gallery cars={mostSelled} />
        </Grid>
      </Grid>
    </Container>
  );
}
