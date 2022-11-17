import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function Carousel_comp(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "coche1.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "coche2.jpg",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
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
      {console.log(process.env.PUBLIC_URL)}
      <img src={props.item.image} alt="coche" />

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
