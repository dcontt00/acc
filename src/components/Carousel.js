import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Grid } from "@mui/material";
import Coches from "../coches.json";

export default function Carousel_comp(props) {
  return (
    <Carousel>
      {Coches.map((item, i) => (
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
        <img src={props.item.img} alt="coche" width={"100%"} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Button>Check it out!</Button>
      </Grid>
    </Grid>
  );
}
