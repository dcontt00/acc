import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Typography, Grid } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

export default function Carousel_comp(props) {
  const navigate = useNavigate();

  return (
    <Carousel autoPlay showArrows>
      {props.cars.map((item, i) => (
        <div onClick={() => navigate("description/" + item.id)}>
          <Item key={i} item={item} />
        </div>
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
        <img src={props.item.img} alt="coche" width={"70%"} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
    </Grid>
  );
}
