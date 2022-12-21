import React from "react";
import Carousel from "react-material-ui-carousel";
import { Typography, Grid } from "@mui/material";
import Cars from "../data/Audi.json";
console.log(Cars["highlights"]);

export default function Carousel_comp(props) {
  return (
    <Carousel>
      {Cars.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h2">{props.item.name}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="p">{props.item.description}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <img src={process.env.PUBLIC_URL + props.item.img} alt="coche" height={"20%"} width="auto" />
      </Grid>
    </Grid>
  );
}
