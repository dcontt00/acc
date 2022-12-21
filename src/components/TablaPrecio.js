import * as React from "react";
import Typography from "@mui/material/Typography";
import Cars from "../data/Cars.json";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import Llantas from "../data/Llantas.json";
import Colores from "../data/Colores.json";
import Asientos from "../data/Asientos.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
    var llantas = 0;
    var color = 0;
    var asiento = 0;
    var total = car.price;
    if (cookie.get("personalization")) {
        personalization = cookie.get("personalization");
        llantas = Llantas.find((llanta) => llanta.id === parseInt(personalization["tire"]));
        color = Colores.find((color) => color.id === parseInt(personalization["colors"]));
        asiento = Asientos.find((asiento) => asiento.id === parseInt(personalization["seats"]));
        rows = [
            createData("Llantas", llantas.title, llantas.price),
            createData("Color", color.title, color.price),
            createData("Asiento", asiento.title, asiento.price),
        ];


        if (llantas) {
            total += llantas.price;
        }
        if (color) {
            total += color.price;
        }
        if (asiento) {
            total += asiento.price;
        }

    }


    return (
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
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell >{row.part}</TableCell>
                            <TableCell >{row.model}</TableCell>
                            <TableCell >{row.price}€</TableCell>
                        </TableRow>
                    ))}

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell >Total</TableCell>
                        <TableCell ></TableCell>
                        <TableCell >{total}€</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}