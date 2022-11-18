import * as React from "react";
import Cars from "../data/Cars.json";
import Grid from "@mui/material/Grid";
import CarCard from "../components/CarCard";

export default function StandardImageList(props) {
  return (
    <Grid container spacing={2}>
      {props.cars.map((coche) => (
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CarCard
            img={coche.img}
            title={coche.name}
            description={coche.description}
            brand={coche.brand}
          />
        </Grid>
      ))}
    </Grid>
  );
}
