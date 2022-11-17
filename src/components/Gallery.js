import * as React from "react";
import Coches from "../coches.json";
import Grid from "@mui/material/Grid";

export default function StandardImageList() {
  return Coches.map((item, i) => (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <img src={item.image} alt="coche" width={"100%"} style={{}} />
    </Grid>
  ));
}
