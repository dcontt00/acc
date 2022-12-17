
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box, Card } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Cars from "../../data/Cars.json";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
function getCar(id) {
    return Cars.find((car) => car.id === id);
}
export default function Details() {
    const params = useParams();
    const car = getCar(params.id);
    const navigate = useNavigate();
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