import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
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
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.image} alt="coche" />

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
