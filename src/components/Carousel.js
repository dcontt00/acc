import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Grid } from "@mui/material";
import Cars from "../data/Cars.json";
import { useNavigate } from "react-router-dom";
console.log(Cars["highlights"]);

export default function Carousel_comp(props) {
  console.log(props.cars)
  return (
    <Carousel>
      {props.cars.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const navigate=useNavigate();

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
        <Button variant="contained" onClick={()=>navigate("description/" + props.item.id)}>Saber más</Button>
      </Grid>
    </Grid>
  );
}
