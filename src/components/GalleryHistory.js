import * as React from "react";
import Grid from "@mui/material/Grid";
import CarCardHistory from "./CarCardHistory";

export default function StandardImageList(props) {
  return (
    <Grid container spacing={2}>
      {props.cars.map((coche) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CarCardHistory
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