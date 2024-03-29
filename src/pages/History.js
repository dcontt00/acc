import "../App.css";
import * as React from "react";
import { Typography, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import GalleryHistory from "../components/GalleryHistory";
import Cars from "../data/History.json";


export default function History() {
  const [selectedCars, setSelectedCars] = React.useState(Cars);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Historial de compras</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <GalleryHistory cars={selectedCars} inHistory={true}/>
        </Grid>
      </Grid>
    </Container>
  );
}
