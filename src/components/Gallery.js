import * as React from "react";
import Grid from "@mui/material/Grid";
import CarCard from "../components/CarCard";
import { useNavigate } from "react-router-dom";

export default function StandardImageList(props) {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      {props.cars.map((coche) => (
        <Grid item xs={12} sm={6} md={4} lg={3} onClick={() => navigate("description/" + coche.id)}>
          <CarCard
            img={coche.img}
            title={coche.name}
            description={coche.description}
            brand={coche.brand}
            price={coche.price}
            inHistory={props.inHistory}
            car={coche}
          />
        </Grid>
      ))}
    </Grid>
  );
}
