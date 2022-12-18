
import * as React from "react";
import Typography from "@mui/material/Typography";
import Cars from "../../data/Cars.json";
import { useParams } from "react-router-dom";

function getCar(id) {
    return Cars.find((car) => car.id === id);
}
export default function Details() {
    const params = useParams();
    const car = getCar(params.id);

    return (
        <div>
            <Typography>{car.name}</Typography>
            <Typography>{car.brand}</Typography>
            <Typography>{car.type}</Typography>
            <Typography>{car.year}</Typography>
            <Typography>Desglose</Typography>
            <Typography color="red">Total: {car.price}€</Typography>

        </div>

    )
}