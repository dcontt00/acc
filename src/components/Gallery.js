import * as React from "react";
import Cars from "../data/Cars.json";
import Grid from "@mui/material/Grid";

export default function StandardImageList(props) {
  return (
    <Grid container spacing={2}>
      {props.cars.map((coche) => (
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <img src={coche.img} alt={coche.name} width={"100%"} />
        </Grid>
      ))}
    </Grid>
  );
}
