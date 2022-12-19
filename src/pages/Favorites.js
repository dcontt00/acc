import "../App.css";
import * as React from "react";
import {
  Typography,
  Grid
} from "@mui/material";
import Container from "@mui/material/Container";
import Gallery from "../components/Gallery";
import Cars from "../data/Cars.json";
import { dataName, getData, addData } from "../data/data";
import Cookie from "universal-cookie";

const cookie = new Cookie();

function getCar(id) {
  return Cars.find((car) => car.id === id);
}

export default function Favorites() {
  var favorites = [];
  if (cookie.get("favorites")) {
    favorites = cookie.get("favorites");
    console.log(favorites)
    // Get cars info from the id
    favorites = favorites.map((id) => getCar(id));

  }
  const [selectedCars, setSelectedCars] = React.useState(favorites);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Coches Favoritos</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Gallery cars={selectedCars} />
        </Grid>
      </Grid>
    </Container>
  );
}
