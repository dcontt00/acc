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

export default function Details(props) {
    const params = useParams();
    const car = getCar(params.id);

    // If there is a personalization
    var rows = []
    var total = car.price;
    if (props.tire) {
        total += props.tire.price + props.colors.price + props.seats.price;
        rows = [
            createData("Llantas", props.tire.title, props.tire.price),
            createData("Color", props.colors.title, props.colors.price),
            createData("Asiento", props.seats.title, props.seats.price),
        ];
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