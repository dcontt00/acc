
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
function createData(part, model, price) {
    return { part, model, price };
}



const cookie = new Cookies();
function getCar(id) {
    return Cars.find((car) => car.id === parseInt(id));
}
export default function Details() {
    const params = useParams();
    const car = getCar(params.id);
    var personalization = [];
    var rows = []
    if (cookie.get("personalization")) {
        personalization = cookie.get("personalization");
        var llantas = Llantas.find((llanta) => llanta.id === parseInt(personalization["tire"]));
        var color = Colores.find((color) => color.id === parseInt(personalization["colors"]));
        var asiento = Asientos.find((asiento) => asiento.id === parseInt(personalization["seats"]));
        rows = [
            createData("Llantas", llantas.title, llantas.price),
            createData("Color", color.title, color.price),
            createData("Asiento", asiento.title, asiento.price),
        ];

    }

    const desglose = () => {
        var total = car.price;
        if (llantas) {
            total += llantas.price;
        }
        if (color) {
            total += color.price;
        }
        if (asiento) {
            total += asiento.price;
        }
        return (
            <div>
                <TableContainer component={Paper} >
                    <Table sx={{ width: "100%" }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >Concepto</TableCell>
                                <TableCell >Modelo</TableCell>
                                <TableCell >Precio</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >Base</TableCell>
                                <TableCell >{car.name}</TableCell>
                                <TableCell >{car.price}€</TableCell>
                            </TableRow>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >{row.part}</TableCell>
                                    <TableCell >{row.model}</TableCell>
                                    <TableCell >{row.price}€</TableCell>
                                </TableRow>
                            ))}

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell >Total</TableCell>
                                <TableCell ></TableCell>
                                <TableCell >{total}€</TableCell>
                            </TableRow>



                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        );
    }

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

                {desglose()}
            </Grid>

        </Grid>

    )
}