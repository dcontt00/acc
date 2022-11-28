import * as React from "react";
import Grid from "@mui/material/Grid";
import CarCard from "../components/CarCard";

export default function StandardImageList(props) {
  return (
    <Grid container spacing={2}>
      {props.cars.map((coche) => (
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <CarCard
            img={coche.img}
            title={coche.name}
            description={coche.description}
            brand={coche.brand}
            price={coche.price}
            inHistory={props.inHistory}
            car={coche}
          />
        </Grid>
      ))}
    </Grid>
  );
}
