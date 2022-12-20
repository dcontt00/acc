import * as React from "react";
import Grid from "@mui/material/Grid";
import CarCard from "../components/CarCard";

export default function StandardImageList(props) {
  if (props.cars.length === 0) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h1>No hay coches que mostrar</h1>
        </Grid>
      </Grid>
    );
  } else {

    return (
      <Grid container spacing={2}>
        {props.cars.map((coche) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CarCard
              img={coche.img}
              title={coche.name}
              description={coche.description}
              brand={coche.brand}
              price={coche.price}
              inHistory={props.inHistory}
              car={coche}
              year={coche.year}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
