import * as React from "react";
import Typography from "@mui/material/Typography";
import Cars from "../../data/Cars.json";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import Llantas from "../../data/Llantas.json";
import Colores from "../../data/Colores.json";
import Asientos from "../../data/Asientos.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import TablaPrecio from "../../components/TablaPrecio"



function getCar(id) {
    return Cars.find((car) => car.id === parseInt(id));
}

export default function Details() {
    const params = useParams();
    const car = getCar(params.id);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Detalles del pedido
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <img src={car.img} alt={car.name} width="100%" />
            </Grid>

            <Grid item xs={6}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            {car.name}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            {car.type}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            {car.year}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h2">Desglose</Typography>
            </Grid>

            <Grid item xs={12}>
                <TablaPrecio />
            </Grid>
        </Grid>
    )
}