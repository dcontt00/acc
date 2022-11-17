import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Coches from "../coches.json";
import Grid from "@mui/material/Grid";

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
        <h2>{props.item.name}</h2>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <p>{props.item.description}</p>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <img src={props.item.image} alt="coche" width={"100%"} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Button className="CheckButton">Check it out!</Button>
      </Grid>
    </Grid>
  );
}
