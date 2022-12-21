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
    const [data, setData] = React.useState([]);

    // If there is a personalization
    var rows = []
    var total = car.price;
    React.useEffect(() => {

        if (props.tire) {
            var llantas = Llantas.find((llanta) => llanta.id === parseInt(props.tire));
            total += llantas.price
            // Append to data
            setData([...data, createData("Llantas", llantas.title, llantas.price)])


        } else if (props.colors) {
            var colores = Colores.find((color) => color.id === parseInt(props.colors));
            total += colores.price
            setData([...data, createData("Colores", colores.title, colores.price)])
        } else if (props.seats) {
            var asientos = Asientos.find((asiento) => asiento.id === parseInt(props.seats));
            total += asientos.price
            setData([...data, createData("Asientos", asientos.title, asientos.price)])
        }

    }, [setData, data, props.tire, props.colors, props.seats]);



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

                    {data.map((row) => (
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